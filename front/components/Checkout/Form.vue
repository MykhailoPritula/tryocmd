<template>
  <div class="form">
    <form v-if="stepOneActive" @submit="stepOne" class="row form-step form-step-one">
      <div class="field col-12 field-title">
        <h3>Shipping Information</h3>
        <div class="step">Step 1 of 2</div>
      </div>
      <div class="field col-12">
        <div class="checkout-viewing">
          <img src="@/assets/img/eye.png" alt=""> {{viewing}} others are viewing this offer right now - <span data-time="40">40:00</span>
        </div>
      </div>
      <div class="field col-md-6">
        <label for="firstName">First name</label>
        <input type="text" v-model="firstName" id="firstName" @input="validation" @change="validation" placeholder="ex.John" minlength="2" maxlength="30" required />
      </div>
      <div class="field col-md-6">
        <label for="lastName">Last name</label>
        <input type="text" v-model="lastName" id="lastName" @input="validation" @change="validation" placeholder="ex.Doe" minlength="2" maxlength="30" required />
      </div>
      <div class="field col-md-6">
        <label for="emailAddress">Email</label>
        <input type="email" v-model="emailAddress" id="emailAddress" @input="validation" @change="validation" placeholder="ex.email@gmail.com" required />
      </div>
      <div class="field col-md-6">
        <label for="phoneNumber">Phone number</label>
        <input type="tel" @input="phoneNumberInput" v-model="phoneNumber" id="phoneNumber" @change="validation" placeholder="ex.+14845101768" maxlength="11" required />
      </div>
      <div class="field col-md-6">
        <label for="country">Country</label>
        <input type="text" v-model="country" id="country" @input="validation" @change="validation" placeholder="United States" maxlength="2" readonly />
      </div>
      <div class="field col-md-6">
        <label for="city">City</label>
        <input type="text" v-model="city" id="city" @input="validation" @change="validation" placeholder="ex.Los Angeles" maxlength="30" required />
      </div>
      <div class="field field-sel col-md-6">
        <label for="state">State</label>
        <span v-if="!state">Select state</span>
        <select v-model="state" id="state" @change="validation" @input="validation" required><option value="" default selected disabled >Select state</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select>
      </div>
      <div class="field col-md-6">
        <label for="postalCode">Postal code</label>
        <input type="text" v-model="postalCode" id="postalCode" @input="validation" @change="validation" placeholder="ex.90210" maxlength="20" required />
      </div>
      <div class="field col-12">
        <label for="address1">Address</label>
        <input type="text" v-model="address1" id="address1" @input="validation"  @change="validation" placeholder="ex.516 Walden Dr, Beverly Hills" maxlength="50" required />
      </div>
      <div class="field col-12">
        <button type="submit" :disabled="(validForm) ? false:true">Click to Continue</button>
      </div>
      <div class="field col-12">
        <img src="@/assets/img/bank-logos.png" alt="" width="440px">
      </div>
    </form>
    <form @submit="stepTwo" class="row form-step form-step-two" v-else >
      <div class="field col-12 field-title">
        <h3>Payment Information</h3>
        <div class="step">Step 2 of 2</div>
      </div>

      <div class="col-12">

        <div class="field-box active" id="cc">
          <div class="row">
            <div class="field field-label col-12" @click="fieldLabel('cc')">
              <h4>Credit Card</h4>
              <div class="field-imgs">
                <img src="@/assets/img/checkout/visa.svg" >
                <img src="@/assets/img/checkout/amex.svg" >
                <img src="@/assets/img/checkout/mastercard.svg" >
                <img src="@/assets/img/checkout/discover.svg" >
                <img src="@/assets/img/checkout/jcb.svg" >
                <img src="@/assets/img/checkout/diners.svg" >
              </div>
            </div>
            <div class="field field-row field-cc col-md-12">
              <h5>Card Number</h5>
              <input type="text" v-model="cardNumber" id="cardNumber" @change="cardNumberChange" @input="cardNumberInput" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19" required />
            </div>
            <div class="field field-row field-cc field-exp col-12">
              <h5>Expiration date</h5>
            </div>
            <div class="field field-row field-cc field-sel col-md-3">
              <span v-if="!cardMonth">Month</span>
              <select v-model="cardMonth" id="cardMonth" @input="validation" required>
                <option disabled default selected value="" >Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="field field-row field-cc field-sel col-md-3">
              <span v-if="!cardYear">Year</span>
              <select v-model="cardYear" id="cardYear" @input="validation" required>
                <option disabled default selected >Year</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
            </div>
            <div class="col-12"></div>
            <div class="field field-row field-cc field-cvv col-md-3">
              <h5>CVV</h5>
              <input type="text" v-model="cardSecurityCode" @input="validation" id="cardSecurityCode" placeholder="***" minlength="3" maxlength="4" required />
            </div>
            <div class="field field-row field-cc col-12">
              <button type="submit" :disabled="(validFormCart) ? false:true">Proceed To Checkout</button>
            </div>
          </div>
        </div>

        <div class="field-box" id="cp" v-if="status === 'development'">
          <div class="row">
            <div class="field field-label col-12" @click="fieldLabel('cp')">
              <div class="field-img">
                <img src="@/assets/img/checkout/sezzle_dark.svg" class="sezzle-img">
              </div>
            </div>
            <div class="field field-row field-cp col-12">
              <a href="#" @click="getSezzle" class="sezzle-btn"><img src="@/assets/img/checkout/sezzle.svg" alt="pay via Sezzle" ></a>
            </div>
          </div>
        </div>

        <div class="field-box" id="pp">
          <div class="row">
            <div class="field field-label col-12" @click="fieldLabel('pp')">
              <div class="field-img">
                <img src="@/assets/img/checkout/paypal.svg" >
              </div>
            </div>
            <div class="field field-row field-pp col-12">
              <a @click="getPayPal" class="payPalButton"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" data-v-fd53f700="" alt="" aria-label="PayPal" ></a>
            </div>
          </div>
        </div>

        <div class="return" @click="goToStepOne">❮ return to shipping info</div>

      </div>
    </form>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'CheckoutForm',
  data(){
    return {
      status: false,
      validForm: false,
      validFormCart: false,
      stepOneActive: true,
      viewing: 10,

      firstName: null,
      lastName: null,
      emailAddress: null,
      phoneNumber: null,
      address1: null,
      city: null,
      country: 'United States',
      postalCode: null,
      state: null,

      cardNumber: null,
      cardMonth: null,
      cardYear: null,
      cardSecurityCode: null,

      token: null,
      payerId: null,
      sessionId: null,
      orderId: null,
      paypalUrl: null,
      salesUrl: null,

      product_type: null,
      product_id: this.id,
      product_price: this.price,
      product_name: this.name
    }
  },
  computed: {
    productsObj(){
      const products = this.$store.state.products
      return this.convertArrayToObject(products, 'id')
    }
  },
  methods: {
    convertArrayToObject(array, key) {
      const initialValue = {};
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item
        };
      }, initialValue);
    },
    validation(){
      let contains = () => {
        let result = true;
        document.querySelectorAll('input').forEach(input => {
          if( input.classList.contains('no-valid') ) result = false;
      });
      return result
    }
      if( this.firstName !== null && this.lastName !== null && this.emailAddress !== null &&
          this.phoneNumber !== null && this.address1 !== null && this.city !== null && this.postalCode !== null && this.state !== null && contains()){
        this.validForm = true;
      } else {
        this.validForm = false;
      }
      if( this.cardNumber !== null && this.cardMonth !== null && this.cardYear !== null && this.cardSecurityCode !== null){
        this.validFormCart = true;
      } else {
        this.validFormCart = false;
      }
    },
    emailAddressChange(e){
      const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( !emailReg.test(e.target.value) ){
        e.target.classList.add('no-valid');
        alert('Email is wrong!');
      } else {
        e.target.classList.remove('no-valid');
      }
      this.validation();
    },
    phoneNumberInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.phoneNumber = arr.toString().replace(/[,]/g, '');
    },
    cardNumberInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if(arr.length > 4) arr.splice(4, 0, ' ');
      if(arr.length > 9) arr.splice(9, 0, ' ');
      if(arr.length > 14) arr.splice(14, 0, ' ');
      this.cardNumber = arr.toString().replace(/[,]/g, '');
    },
    cardNumberChange(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if(arr.length < 16){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
      }
      this.validation();
    },
    redirectToThankYou(){
      // let upsellType = [372, 373, 374];
      // let productID = Number(localStorage.product_id);
      // if( upsellType.includes(productID)){
        this.$router.push('/thank-you');
      // } else {
      //   this.$router.push('/6-jars-drc-upsell');
      // }
    },
    stepOne(e){
      e.preventDefault();
      this.stepOneActive = false;
      window.scrollTo(0, 0);
      let data = {
        klaviyoID: this.$store.state.klaviyoID,
        emailAddress: this.emailAddress,
        firstName: this.firstName,
        lastName: this.lastName,
        product_name: this.productsObj[localStorage.product_id].name,
        product_price: this.productsObj[localStorage.product_id].price,
        product_id: localStorage.product_id
      }
      localStorage.data = JSON.stringify(data);
      Request.klaviyoIdentify(data)
        .then(result => {
          if(result.status === 'error'){
            console.log(result)
          }
        })
    },
    goToStepOne(e){
      e.preventDefault();
      this.stepOneActive = true;
      window.scrollTo(0, 0);
    },
    stepTwo(e){
      e.preventDefault();

      this.$store.state.loader = true;

      localStorage.emailAddress = this.emailAddress;
      let data = {
        klaviyoID: this.$store.state.klaviyoID,
        campaignId: this.$store.state.campaignId,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        address1: this.address1,
        city: this.city,
        postalCode: this.postalCode,
        state: this.state,
        cardMonth: this.cardMonth,
        cardYear: this.cardYear,
        cardSecurityCode: this.cardSecurityCode,
        product1_id: localStorage.product_id,
        product1_price: this.productsObj[localStorage.product_id].price,
        amount: this.productsObj[localStorage.product_id].price,
        httpReferer: localStorage.httpReferer,
        country: 'US',
        billShipSame: '1',
        paySource: 'CREDITCARD'
      }

      data.cardNumber = this.cardNumber.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '');

      if(localStorage.affId) data.affId = localStorage.affId;
      if(localStorage.utm_source) data.custom1 = localStorage.utm_source;
      if(localStorage.utm_medium) data.custom2 = localStorage.utm_medium;
      if(localStorage.utm_campaign) data.custom3 = localStorage.utm_campaign;
      if(localStorage.utm_content) data.custom4 = localStorage.utm_content;
      if(localStorage.utm_term) data.custom5 = localStorage.utm_term;

      Request.charge(data)
        .then(res => {
          this.$store.state.loader = false;
          if(res.result === "SUCCESS"){

            // fbq('track', 'Purchase', {
            //   currency: "USD",
            //   value: this.productsObj[localStorage.product_id].price,
            //   transaction_id: res.message.orderId
            // });
            fbq('track', 'Purchase', {
              value: this.productsObj[localStorage.product_id].price,
              currency: "USD",
            }, {
              eventID: res.message.orderId
            })
            dataLayer.push({
              'event': 'Purchase',
              'currency': "USD",
              'value': `${this.productsObj[localStorage.product_id].price}`,
              'transaction_id': `${res.message.orderId}`
            });
            this.$store.state.orderId = res.message.orderId;
            localStorage.orderId = res.message.orderId;
            this.redirectToThankYou();
          } else if(res.result === "ERROR"){
            if( typeof res.message === 'object' ){
              for (const [key, value] of Object.entries(res.message)) {
                alert(`Something goes wrong. Error! ${key}: ${value}`);
              }
            } else {
              alert(`Something goes wrong. Error! ${res.message}`);
            }
          } else {
            alert('Something goes wrong! Please reload the page and try again!');
          }
        })

    },
    getPayPal(){
      this.$store.state.loader = true;
      localStorage.emailAddress = JSON.stringify(this.emailAddress);

      let data = {
        klaviyoID: this.$store.state.klaviyoID,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        address1: this.address1,
        city: this.city,
        postalCode: this.postalCode,
        state: this.state,
        product1_id: localStorage.product_id,
        product1_price: this.productsObj[localStorage.product_id].price,
        amount: this.productsObj[localStorage.product_id].price,
        checkoutUrl: window.location.href,
        httpReferer: localStorage.httpReferer,
        campaignId: this.$store.state.campaignId
      }

      if(localStorage.affId) data.affId = localStorage.affId;

      if(localStorage.utm_source) data.utm_source = localStorage.utm_source;
      if(localStorage.utm_medium) data.utm_medium = localStorage.utm_medium;
      if(localStorage.utm_campaign) data.utm_campaign = localStorage.utm_campaign;
      if(localStorage.utm_content) data.utm_content = localStorage.utm_content;
      if(localStorage.utm_term) data.utm_term = localStorage.utm_term;

      Request.konnektivePaypalAdd(data)
        .then(res => {
          this.$store.state.loader = false;
          this.orderId = res.orderId;
          localStorage.orderId = this.orderId;
          this.sessionId = res.sessionId;
          localStorage.sessionId = this.sessionId;
          window.location.href = `${res.paypalUrl}`;
          localStorage.paypalConfirmed = 0;
        });
    },
    confirmPP(){
      this.$store.state.loader = true;

      let userData = JSON.parse(localStorage.data);
      const redirectToThankYou = () => this.redirectToThankYou()
      Request.konnektivePaypalConfirm({
        klaviyoID: this.$store.state.klaviyoID,
        token: localStorage.token,
        payerId: localStorage.payerId,
        sessionId: localStorage.sessionId,
        orderId: localStorage.orderId,
        product1_id: localStorage.product_id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        campaignId: this.$store.state.campaignId,
        emailAddress: localStorage.emailAddress,
        amount: this.productsObj[localStorage.product_id].price,
        httpReferer: localStorage.httpReferer,
      })
        .then(res => {
          this.$store.state.loader = false;
          if( res.result == 'SUCCESS' ){
            // fbq('track', 'Purchase', {
            //   currency: "USD",
            //   value: this.productsObj[localStorage.product_id].price,
            //   transaction_id: localStorage.orderId
            // });
            fbq('track', 'Purchase', {
              value: this.productsObj[localStorage.product_id].price,
              currency: "USD",
            }, {
              eventID: localStorage.orderId
            })
            dataLayer.push({
              'event': 'Purchase',
              'currency': "USD",
              'value': `${this.productsObj[localStorage.product_id].price}`,
              'transaction_id': `${localStorage.orderId}`
            });
            setTimeout(()=>{
              redirectToThankYou();
            }, 500);
          }
        });
    },
    getSezzle(e){
      e.preventDefault();

      this.$store.state.loader = true;

      localStorage.emailAddress = this.emailAddress;

      let data = {
        campaignId: this.$store.state.campaignId,
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        billShipSame: '1',
        country: 'US',
        address1: this.address1,
        city: this.city,
        postalCode: this.postalCode,
        state: this.state,
        product1_id: localStorage.product_id,
        product1_price: this.productsObj[localStorage.product_id].price,
        amount: this.productsObj[localStorage.product_id].price,
        httpReferer: localStorage.httpReferer,
        campaignId: localStorage.campaignId,
        paySource: 'PREPAID',
        prepaidType: 'SEZZLE'
      }

      if(localStorage.affId) data.affId = localStorage.affId;
      if(localStorage.utm_source) data.custom1 = localStorage.utm_source;
      if(localStorage.utm_medium) data.custom2 = localStorage.utm_medium;
      if(localStorage.utm_campaign) data.custom3 = localStorage.utm_campaign;
      if(localStorage.utm_content) data.custom4 = localStorage.utm_content;
      if(localStorage.utm_term) data.custom5 = localStorage.utm_term;

      Request.chargeSezzle(data)
        .then(res => {
          console.log(`Charge Sezzle - ${res}`);
          this.$store.state.loader = false;
          if(res.result === "SUCCESS"){

            // fbq('track', 'Purchase', {
            //   currency: "USD",
            //   value: this.productsObj[localStorage.product_id].price,
            //   transaction_id: res.message.orderId
            // });
            dataLayer.push({
              'event': 'Purchase',
              'currency': "USD",
              'value': `${this.productsObj[localStorage.product_id].price}`,
              'transaction_id': `${res.message.orderId}`
            });

            this.$store.state.orderId = res.message.orderId;
            localStorage.orderId = res.message.orderId;
            this.redirectToThankYou();
          } else if(res.result === "ERROR"){
            if( typeof res.message === 'object' ){
              for (const [key, value] of Object.entries(res.message)) {
                alert(`Something goes wrong. Error! ${key}: ${value}`);
              }
            } else {
              alert(`Something goes wrong. Error! ${res.message}`);
            }
          } else {
            alert('Something goes wrong! Please reload the page and try again!');
          }
        })
    },
    fieldLabel(method){
      let fieldBoxes = document.querySelectorAll('.field-box');
      fieldBoxes.forEach(field => field.classList.remove('active'))
      document.getElementById(method).classList.add('active');

      this.$store.state.payment = method;
      localStorage.payment = this.$store.state.payment;
    }
  },
  mounted() {
    this.status = process.env.NODE_ENV;

    if (this.$route.query.paypalAccept == '1' && localStorage.paypalConfirmed == 0) {
      localStorage.paypalConfirmed = 1;
      localStorage.token = this.$route.query.token;
      localStorage.payerId = this.$route.query.PayerID;
      this.confirmPP();
      this.redirectToThankYou()
    } else if (this.$route.query.paypalAccept == '1' && localStorage.paypalConfirmed == 1) {
      this.redirectToThankYou()
    } else if (this.$route.query.token){
      this.redirectToThankYou()
    }

    fbq('track', 'InitiateCheckout', {
      currency: "USD",
      value: this.productsObj[localStorage.product_id].price,
      name: `${this.productsObj[localStorage.product_id].name}`
    });
    dataLayer.push({
      'event': 'InitiateCheckout',
      'currency': "USD",
      'value': `${this.productsObj[localStorage.product_id].price}`,
      'name': `${this.productsObj[localStorage.product_id].name}`
    });

    // this.product_type = localStorage.product_type;

    const timer_counter = e => {
      const deadTime = '<i>00</i>:<i>00</i>';
      if (!e.dataset.time) return deadTime;
      const
        now = new Date(),
        timer = setInterval(() => {
          const
            deadline = new Date(now.getTime() + Number(e.dataset.time) * 60000),
            dateNow = new Date(),
            t = deadline - dateNow;

          let
            h = Math.floor((t % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)),
            m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
            s = Math.floor((t % (1000 * 60)) / 1000);

          h = (h < 10) ? `0${h}` : h;
          m = (m < 10) ? `0${m}` : m;
          s = (s < 10) ? `0${s}` : s;

          if (t < 0) {
            clearInterval(timer);
            timer_counter(document.querySelector('[data-time]'));
          }
          e.innerHTML = (t < 0) ? deadTime : `<i>${m}</i>:<i>${s}</i>`;
        }, 1000);
    }
    timer_counter(document.querySelector('[data-time]'));

    const viewingInterval = setInterval(() => {
      this.viewing = this.viewing + 1;
    }, 10000);
  }
}
</script>
<style lang="scss" scoped>
.form{
  padding-right: 15px;
}
form{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  padding: 0 15px 0;
  margin-left: -15px;
  margin-right: -15px;
}
.field{
  position: relative;
  margin: 10px 0;
  &:first-child{
    margin-top: 0;
  }
  &-label{
    background: #fafafa;
    cursor: pointer;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    padding-left: 50px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    &:before{
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #b4b9be;
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translate(0, -50%);
    }
    &:after{
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translate(0, -50%);
      background: #1e8cbe;
      display: none;
    }
    h4{
      font-size: 16px;
    }
    *{
      pointer-events: none;
    }
  }
  &-imgs{
    padding-top: 5px;
    display: flex;
    padding-left: 10px;
    @media(min-width:768px){
      padding-top: 0;
      padding-left: 15px;
    }
    img{
      width: auto;
      display: inline-block;
      @media(max-width:375px){
        width: 10px;
      }
      @media(min-width:768px){
        height: 20px;
      }
      &:not(:first-child){
        margin-left: 5px;
      }
    }
  }
  &-img{
    img{
      width: auto;
      display: inline-block;
      height: 25px;
    }
  }
  &-box{
    background: #fff;
    border: 1px solid #ddd;
    padding: 0 15px;
    border-radius: 4px 4px 0 0;
    &:last-child{
      border-top: none;
      border-radius: 0 0 4px 4px;
    }
    &.active{
      .field-row{
        display: block;
        padding-bottom: 15px;
        padding-top: 15px;
        &.field-cc{
          padding-bottom: 0px;
          padding-top: 0px;
          &:last-child{
            padding-bottom: 15px;
          }
        }
      }
      .field-label:after{
        display: block;
      }
    }
  }
  &-row{
    display: none;
  }
  &-sel{
    select{
      cursor: pointer;
      -webkit-appearance: none;
    }
    span{
      display: block;
      position: absolute;
      font-size: 15px;
      top: 50%;
      transform: translate(0, -50%);
      left: 30px;
      opacity: .75;
    }
    &:hover{
      cursor: pointer;
      span{
        display: none;
      }
    }
  }
  &-exp{
    margin-bottom: -10px;
  }
}
input, select{
  background: #fff;
  display: block;
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  &:focus{
    outline: none;
  }
}
label{
  display: block;
  font-size: 12px;
  line-height: 1.2;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translate(0, -50%);
  background: #fff;
  padding-left: 5px;
  padding-right: 5px;
  display: block;
  font-weight: 300;
  color: #9b9b9b;
}
button{
  background: #fe6f61;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  height: 55px;
  letter-spacing: .04em;
  width: auto;
  border: none;
  padding: 0 30px;
  border-radius: 4px;
  width: 100%;
  @media(min-width:375px){
    font-size: 18px;
  }
  @media(min-width:768px){
    max-width: 300px;
  }
  &:disabled{
    background: gray;
  }
  &.paypal{
    background: #ffc439;
    img{
      display: block;
      margin: 0 auto;
    }
  }
  &:hover{
    opacity: .8;
  }
}
button[type="submit"]{
  border-radius: 10px;
  &:disabled{
    background: gray;
    cursor: default;
    pointer-events: none;
  }
}
h3{
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  line-height: 44px;
  @media(min-width:375px){
    font-size: 18px;
  }
  @media(min-width:768px){
    font-size: 24px;
  }
}
.step{
  position: absolute;
  right: 15px; top: 50%;
  transform: translate(0, -50%);
  background: #6C5D57;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  padding: 10px 7px 10px 20px;
  font-weight: 500;
  @media(min-width:768px){
    font-size: 20px;
    padding: 10px 10px 10px 25px;
  }
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-top: 23px solid transparent;
    border-bottom: 23px solid transparent;
    border-left: 15px solid #fff;
    width: 0;
  }
}
.checkout-viewing {
  border: 2px solid #6c5d57;
  padding: 15px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  background: #f9f5f4;
  color: #000;
  text-align: center;
  span{
    color: red;
  }
}
.return{
  color: #fe6f61;
  text-decoration: underline;
  cursor: pointer;
  padding: 10px 0 0;
}
h5{
  font-size: 16px;
  color: #999;
  font-weight: 500;
  margin-bottom: 4px;
  line-height: 20px;
  min-height: 20px;
}
.sezzle{
  &-btn{
    background: #382757;
    display: block;
    width: 300px;
    max-width: 100%;
    padding: 10px 30px;
    height: 55px;
    text-align: center;
    border-radius: 4px;
    &:hover{
      opacity: .7;
    }
    img{
      display: inline-block;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>