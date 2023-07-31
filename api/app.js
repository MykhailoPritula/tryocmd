/*-------------------------------------------
              C O N S T S
-------------------------------------------*/
const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  http = require('http'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8009,
  app = express(),
  server = http.createServer(app)
  // sendEmail = require('./nodemailer/index.js')


/*-------------------------------------------
              Path settings
-------------------------------------------*/
// const frontPath = path.join(__dirname, '../front/dist/')

app.use(history())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.set("view options", {layout: false})
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
// app.set('views', path.join(frontPath))
// app.use(express.static(frontPath))
app.use(express.json())

/*-------------------------------------------
              R O U T I N G
-------------------------------------------*/
// app.get('/', (req, res) => {
//   res.render(path.join(frontPath+'index.html'))
// });

app.use('/', require('./konnektive/'))

// app.post('/nodemailer', (req, res) => {
//   sendEmail.contact(req.body.params.name, req.body.params.email, req.body.params.phone, req.body.params.message)
//     .then(result => res.send(result))
// });


app.post('/klaviyo-identify', (req, res) => {
  if(req.body.params.klaviyoID){
    const
      klaviyoID = req.body.params.klaviyoID,
      Klaviyo = require('klaviyo-node'),
      client = new Klaviyo(klaviyoID)
    client.identify( req.body.params.emailAddress, {
      '$first_name': req.body.params.firstName,
      '$last_name': req.body.params.lastName
    })
      .then(() => {
        return client.track('addToCart', req.body.params.emailAddress,{
          '$first_name': req.body.params.firstName,
          '$last_name': req.body.params.lastName,
          'product_name': req.body.params.product_name,
          'product_price': req.body.params.product_price,
          'product_id': req.body.params.product_id,
          '$value': req.body.params.product_price
        })
      })
      .then(result => {
        res.send({
          status: result
        })
      })
  } else {
    res.send({
      status: 'error'
    })
  }
});
/*-------------------------------------------
END Klaviyo
-------------------------------------------*/

/*-------------------------------------------
Server Listen
-------------------------------------------*/
server.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})
