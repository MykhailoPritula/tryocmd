const
  express = require('express'),
  router = express.Router(),
  request = require("request");

const objectToParams = obj => {
  let urlParams = '';
  for(let item in obj){
    urlParams += `${item}=${encodeURIComponent(obj[item])}&`;
  }
  urlParams = urlParams.slice(0, -1);
  return urlParams;
}


/*-------------------------------------------
START Klaviyo
-------------------------------------------*/

const
  klaviyoStartedCheckout = (email, fname, lname, price, klaviyoID, httpReferer) => {
    const Klaviyo = require('klaviyo-node'),
          client = new Klaviyo(klaviyoID)

    client.identify( email, {
      '$first_name': fname,
      '$last_name': lname
    })
    .then(() => {
      client.track('Started Checkout', email,{
        '$first_name': fname,
        '$last_name': lname,
        '$value': price,
        'url': `${httpReferer}checkout`
      })
    })
  },
  klaviyoPlacedOrder = (email, fname, lname, price, klaviyoID, httpReferer) => {
    const Klaviyo = require('klaviyo-node'),
          client = new Klaviyo(klaviyoID)

    client.identify( email, {
      '$first_name': fname,
      '$last_name': lname
    })
      .then(() => {
        client.track('Placed Order', email,{
          '$first_name': fname,
          '$last_name': lname,
          '$value': price,
          'url': `${httpReferer}checkout`
        })
      })
  }
/*-------------------------------------------
END Klaviyo
-------------------------------------------*/


/*-------------------------------------------
START FB Purchase
-------------------------------------------*/

const fbPurchase = (email, amount, ip, head, httpReferer, event_id) => {

  const
    bizSdk = require('facebook-nodejs-business-sdk'),
    Content = bizSdk.Content,
    CustomData = bizSdk.CustomData,
    DeliveryCategory = bizSdk.DeliveryCategory,
    EventRequest = bizSdk.EventRequest,
    UserData = bizSdk.UserData,
    ServerEvent = bizSdk.ServerEvent,
    access_token = 'EAAL0U7inZCDEBADaX5YrlZAdHIZBQZAZBbGHzjjrJTdrHcwOA6AjHJnhChqM0i2H3fHYBILWmhkcotDoZAEhFGZCEBL47SIktB02uDDM3xiLMrW4SUjykBdAbNZAUe82muWCN63ik6v6oZCmfrNF0fDxtIRAeC4SZC4bJOO5LedozBjWQLkFwtBaXy',
    pixel_id = '767835227441749',
    api = bizSdk.FacebookAdsApi.init(access_token),
    current_timestamp = Math.floor(new Date() / 1000),
    userData = (new UserData())
      .setEmail(`${email}`)
      .setClientIpAddress(ip)
      .setClientUserAgent(head)
      .setFbp('fb.1.1558571054389.1098115397')
      .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890'),
    content = (new Content())
      .setId('Some burnit shit')
      .setQuantity(1),
    customData = (new CustomData())
      .setContents([content])
      .setCurrency('eur')
      .setValue(amount),
    serverEvent = (new ServerEvent())
      .setEventName('Purchase')
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      .setEventSourceUrl(`${httpReferer}checkout`)
      .setActionSource('website'),
    eventsData = [serverEvent],
    eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);

  eventRequest.execute().then(
    response => {
      console.log(response);
    },
    err => {
      console.error('Error: ', err);
    }
  );
}

/*-------------------------------------------
END FB Purchase
-------------------------------------------*/

const konnektive = (endpoint, method, data) => {
  return new Promise((resolve, reject) => {
    let params = objectToParams(data);
    setTimeout(()=>{
      request({
        url: `https://api.konnektive.com/${endpoint}?${params}`,
        method: method
      }, (error, result, body) => {
        if (error) reject(error);
        else resolve(result);
      });
    }, 1000);
  });
}

let session_id,
  ipAddress = '54.177.181.42',
  loginId = 'maxapi',
  password = '9J8iak45'

router.route('/konnektive/paypal/add')
  .post((req, res) => {
    klaviyoStartedCheckout(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price, req.body.params.klaviyoID, req.body.params.httpReferer)
    konnektive(`landers/clicks/import/`, 'POST', {
      loginId: loginId,
      password: password,
      pageType: "checkoutPage",
      requestUri: `${req.body.params.httpReferer}checkout`,
      campaignId: req.body.params.campaignId,
      ipAddress: ipAddress,
      httpReferer: req.body.params.httpReferer
    })
      .then(click => {
        let clickData = JSON.parse(click.body);
        session_id = clickData.message.sessionId;
        if(session_id){
          let data = {
            loginId: loginId,
            password: password,
            sessionId: session_id,
            campaignId: req.body.params.campaignId,
            pageType: 'leadPage',
            billShipSame: 0,
            firstName: req.body.params.firstName,
            lastName: req.body.params.lastName,
            emailAddress: req.body.params.emailAddress,
            phoneNumber: req.body.params.phoneNumber,
            address1: req.body.params.address1,
            city: req.body.params.city,
            country: 'US',
            postalCode: req.body.params.postalCode,
            state: req.body.params.state,
            shipFirstName: req.body.params.firstName,
            shipLastName: req.body.params.lastName,
            shipAddress1: req.body.params.address1,
            shipCity: req.body.params.city,
            shipCountry: 'US',
            shipPostalCode: req.body.params.postalCode,
            shipState: req.body.params.state
          }
          if(req.body.params.affId) data.affId = req.body.params.affId;
          if(req.body.params.custom1) data.custom1 = req.body.params.custom1;
          if(req.body.params.custom2) data.custom2 = req.body.params.custom2;
          if(req.body.params.custom3) data.custom3 = req.body.params.custom3;
          if(req.body.params.custom4) data.custom4 = req.body.params.custom4;
          if(req.body.params.custom5) data.custom5 = req.body.params.custom5;
          return konnektive('leads/import/', 'POST', data)
        }
      })
      .then(lead => {
        let leadData = JSON.parse(lead.body);
        if( leadData.result == 'ERROR' ){
          throw leadData;
        } else {
          return konnektive('order/import/', 'POST', {
            loginId: loginId,
            password: password,
            sessionId: session_id,
            orderId: leadData.message.orderId,
            product1_id: req.body.params.product1_id,
            campaignId: req.body.params.campaignId,
            paypalBillerId: 5,
            paySource: 'PAYPAL',
            salesUrl: req.body.params.checkoutUrl,
            redirectsTo: req.body.params.checkoutUrl,
            errorRedirectsTo: req.body.params.checkoutUrl,
            orderItems: `{"${req.body.params.product1_id}":1}`
          })
        }
      })
      .then(order => {
        let orderData = JSON.parse(order.body);
        res.send({
          orderId: orderData.message.orderId,
          paypalUrl: orderData.message.paypalUrl,
          sessionId: session_id
        });
      })
      .catch(err => res.send(err))
  })

router.route('/konnektive/paypal/confirm')
  .post((req, res) => {
    let
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      head = req.headers['user-agent']

    konnektive('transactions/confirmPaypal/', 'POST', {
      token: req.body.params.token,
      payerId: req.body.params.payerId,
      loginId: loginId,
      password: password,
      sessionId: req.body.params.sessionId,
      orderId: req.body.params.orderId,
      product1_id: req.body.params.product1_id,
      campaignId: req.body.params.campaignId,
      paypalBillerId: 5,
      orderItems: `{"${req.body.params.product1_id}":1}`,
    })
      .then(confirm => {
        fbPurchase(req.body.params.emailAddress, req.body.params.amount, ip, head, req.body.params.httpReferer, req.body.params.orderId)
        // fbPurchase(req.body.params.emailAddress, 114, req.body.params.data.full_path, ip, head, req.body.params.orderId)
        klaviyoPlacedOrder(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price, req.body.params.klaviyoID, req.body.params.httpReferer)
        res.send(confirm.body);
      })
      .catch(err => res.send(err))
})

router.route('/konnektive/paypal/upsale')
  .post((req, res) => {
    let
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      head = req.headers['user-agent']
    konnektive('upsale/import/', 'POST', {
      loginId: loginId,
      password: password,
      orderId: req.body.params.orderId,
      product1_id: req.body.params.product1_id,
      salesUrl: `${req.body.params.url}`,
      redirectsTo: `${req.body.params.url}`,
      errorRedirectsTo: `${req.body.params.url}`,
      paypalBillerId: 5,
      paySource: 'PAYPAL'
    })
      .then(result => {
        res.send(result.body);
      })
      .catch(err => res.send(err))
})

router.route('/konnektive/paypal/upsaleConfirm')
  .post((req, res) => {
    let
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      head = req.headers['user-agent']

    konnektive('upsale/import/', 'POST', {
      token: req.body.params.token,
      payerId: req.body.params.payerId,
      loginId: loginId,
      password: password,
      orderId: req.body.params.orderId,
      product1_id: req.body.params.product1_id,
      salesUrl: `${req.body.params.httpReferer}${req.body.params.url}`,
      paypalBillerId: 5,
      paySource: 'PAYPAL'
    })
      .then(result => {
        res.send(result.body);
      })
      .catch(err => res.send(err))
})

router.route('/charge')
  .post((req, res) => {
    let
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      head = req.headers['user-agent']

    klaviyoStartedCheckout(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price, req.body.params.klaviyoID, req.body.params.httpReferer)

    let data = {
      loginId: loginId,
      password: password,
      firstName: req.body.params.firstName,
      lastName: req.body.params.lastName,
      emailAddress: req.body.params.emailAddress,
      phoneNumber: req.body.params.phoneNumber,
      address1: req.body.params.address1,
      city: req.body.params.city,
      country: 'US',
      postalCode: req.body.params.postalCode,
      state: req.body.params.state,
      billShipSame: '1',
      ipAddress: ipAddress,
      campaignId: req.body.params.campaignId,
      paySource: 'CREDITCARD',
      cardNumber: req.body.params.cardNumber,
      cardMonth: req.body.params.cardMonth,
      cardYear: req.body.params.cardYear,
      cardSecurityCode: req.body.params.cardSecurityCode,
      product1_id: req.body.params.product1_id,
      httpReferer: req.body.params.httpReferer
    }

    if(req.body.params.affId) data.affId = req.body.params.affId;
    if(req.body.params.custom1) data.custom1 = req.body.params.custom1;
    if(req.body.params.custom2) data.custom2 = req.body.params.custom2;
    if(req.body.params.custom3) data.custom3 = req.body.params.custom3;
    if(req.body.params.custom4) data.custom4 = req.body.params.custom4;
    if(req.body.params.custom5) data.custom5 = req.body.params.custom5;
    konnektive('order/import/', 'POST', data)
      .then(result => {
        let resultData = JSON.parse(result.body);
        if( resultData.result == 'SUCCESS' ){
          klaviyoPlacedOrder(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price, req.body.params.klaviyoID, req.body.params.httpReferer)
          fbPurchase(req.body.params.emailAddress, req.body.params.amount, ip, head, req.body.params.httpReferer, resultData.message.orderId)
        }
        res.send(result.body);
      })
      .catch(err => res.send(err))
})

router.route('/charge-sezzle')
  .post((req, res) => {
    let
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      head = req.headers['user-agent']

    // klaviyoStartedCheckout(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price)

    let data = {
      loginId: loginId,
      password: password,
      campaignId: req.body.params.campaignId,
      firstName: req.body.params.firstName,
      lastName: req.body.params.lastName,
      emailAddress: req.body.params.emailAddress,
      phoneNumber: req.body.params.phoneNumber,
      billShipSame: '1',
      country: 'US',
      address1: req.body.params.address1,
      city: req.body.params.city,
      postalCode: req.body.params.postalCode,
      state: req.body.params.state,
      product1_id: '218',
      httpReferer: req.body.params.httpReferer,
      paySource: 'PREPAID',
      prepaidType: 'SEZZLE'
    }

    if(req.body.params.affId) data.affId = req.body.params.affId;
    if(req.body.params.custom1) data.custom1 = req.body.params.custom1;
    if(req.body.params.custom2) data.custom2 = req.body.params.custom2;
    if(req.body.params.custom3) data.custom3 = req.body.params.custom3;
    if(req.body.params.custom4) data.custom4 = req.body.params.custom4;
    if(req.body.params.custom5) data.custom5 = req.body.params.custom5;
    console.log(data)
    konnektive('order/import/', 'POST', data)
      .then(resp => {
        let respData = JSON.parse(resp.body);
        console.log('--------------------');
        console.log(respData);
        console.log('--------------------');
        // if( respData.result == 'SUCCESS' ){
        //   klaviyoPlacedOrder(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price)
        //   fbPurchase(req.body.params.emailAddress, req.body.params.amount, ip, head)
        // }
        res.send(resp.body);
      })
      .catch(err => res.send(err))
})

router.route('/upselling')
  .post((req, res) => {
    konnektive('upsale/import/', 'POST', {
      loginId: loginId,
      password: password,
      orderId: req.body.params.orderId,
      product1_id: req.body.params.product1_id
    })
      .then(result => {
        res.send(result.body);
      })
      .catch(err => res.send(err))
})

router.route('/konnektive/order-confirm')
  .post((req, res) => {
    konnektive('order/confirm/', 'POST', {
      loginId: loginId,
      password: password,
      orderId: req.body.params.orderId
    })
      .then(result => {
        res.send(result.body);
      })
      .catch(err => res.send(err))
})

router.route('/konnektive/orders')
  .post((req, res) => {
    let ordersArray = [];
    konnektive('order/query/', 'POST', {
      loginId: loginId,
      password: password,
      campaignId: req.body.params.campaignId,
      startDate: req.body.params.startDate,
      endDate: req.body.params.endDate,
      page: 1,
      resultsPerPage: 200
    })
      .then(ordersData => {
        console.log(ordersData);
        let orders = JSON.parse(ordersData.body)
        ordersArray = orders.message.data;
        let pages = Math.ceil(orders.message.totalResults / 200);
        if(pages > 1){
          for (let i = 2; i <= pages; i++) {
            setTimeout(()=>{
              konnektive('order/query/', 'POST', {
                campaignId: req.body.params.campaignId,
                startDate: req.body.params.startDate,
                endDate: req.body.params.endDate,
                page: i,
                resultsPerPage: 200
              })
                .then(ordersDataNew => {
                  let ordersNew = JSON.parse(ordersDataNew.body)
                  ordersNew.message.data.forEach(order => {
                    ordersArray.push(order);
                  })
                })
            }, i * 750);
          }
          setTimeout(()=>{
            res.send(ordersArray);
          }, pages * 1000);
        } else {
          res.send(ordersArray);
        }
      })
})

// konnektive('order/import/', 'POST', {
//   loginId: loginId,
//   password: password,
//   campaignId: 5,
//   firstName: 'Mykhailo',
//   lastName: 'Pritula',
//   emailAddress: 'mih.pritula1990@gmail.com',
//   phoneNumber: '1234567890',
//   billShipSame: '1',
//   country: 'US',
//   address1: 'Beverly Hills 123',
//   city: 'Los Angeles',
//   postalCode: '90210',
//   state: 'CA',
//   product1_id: '218',
//   httpReferer: 'http://localhost:3000/',
//   paySource: 'PREPAID',
//   prepaidType: 'SEZZLE'
// })
//   .then(resp => {
//     let respData = JSON.parse(resp.body);
//     console.log('--------------------');
//     console.dir(respData);
//     console.log('--------------------');
//     // if( respData.result == 'SUCCESS' ){
//     //   klaviyoPlacedOrder(req.body.params.emailAddress, req.body.params.firstName, req.body.params.lastName, req.body.params.product1_price)
//     //   fbPurchase(req.body.params.emailAddress, req.body.params.amount, ip, head)
//     // }
//   })
//   .catch(err => console.dir(err))

module.exports = router