import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      klaviyoID: "TV3vxN",
      counter: 0,
      cart: false,
      upsell: false,
      downsell: false,
      crosssell: false,
      orderId: false,
      loader: false,
      popup: false,
      payment: "cc",
      product_type: false,
      mode: "live",
      campaignId: 23,
      products: [
        {
          id: 372,
          price: 22.95,
          text_price: `Only`,
          ea: 22.95,
          name: `2-Weeks Challenge Sample Kit`,
          product_title: `Volume: 20ml / 0.67oz`,
          // sku: "SAMPLEAC1",
          // product_type: "onetime",
        },
        {
          id: 374,
          price: 88,
          text_price: `$138`,
          ea: 88,
          name: `60ml OCMD Rejuvenation Complex Cream - 2 Pack`,
          product_title: `Volume: 60ml / 2.03oz Each`,
          // sku: "SAMPLECC2",
          // product_type: "onetime",
        },
        {
          id: 373,
          price: 49,
          text_price: `$69`,
          ea: 49,
          name: `OCMD Rejuvenation Complex Cream (Full Size)`,
          product_title: `Volume: 60ml / 2.03oz`,
          // sku: "SAMPLEBC1",
          // product_type: "onetime",
        },
      ],
    },
    mutations: {
      increment(state) {
        state.counter++;
      },
    },
  });
export default store;
