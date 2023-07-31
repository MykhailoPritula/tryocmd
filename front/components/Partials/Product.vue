<template>
    <div class="product" :class="(best)?'product-best' : ''">
    <div class="product-inner">
      <picture>
        <source :srcset="require(`@/assets/img/${img_webp}`)" type="image/webp" />
        <source :srcset="require(`@/assets/img/${img_png}`)" type="image/png" />
        <img :src="require(`@/assets/img/${img_png}`)">
      </picture>
      <div class="line"></div>
      <div class="product-info">
        <div class="product-name">{{ name }}</div>
        <div class="product-title">{{ product_title }}</div>
        <div class="product-price" :class="(only)?'product-price-only' : ''"><span>{{ text_price }}</span> ${{ ea }}</div>
      </div>
    <div class="btn">
      <button class="buy-now button" @click="goToCheckout" >ORDER NOW ></button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      productId: this.id,
      productPrice: this.price,
      productName: this.name
    }
  },
  props: ['ea', 'id', 'name', 'price', 'product_title', 'img_webp', 'img_png', 'best', 'text_price', 'only'],
  methods: {
    goToCheckout(e) {
      e.preventDefault()
      const productId=this.productId
      let productObj
      this.products.forEach(product=>{
        if(product.id===productId) {
          productObj=product
        }
      })
      fbq('track', 'AddToCart', {
        currency: "USD",
        value: productObj.price,
        name: `${productObj.name}`,
        img:`${productObj.img}`
      });
      dataLayer.push({
        'event': 'AddToCart',
        'currency': "USD",
        'value': `${productObj.price}`,
        'name': `${productObj.name}`,
        'img':`${productObj.img}`
      });

      localStorage.product_id = this.productId;
      localStorage.product_price = productObj.price;
      localStorage.product_name = productObj.name;

      this.$store.state.product_type = productObj.product_type;
      localStorage.product_type = this.$store.state.product_type;

      this.$router.push('/checkout');
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  text-align: center;
  position: relative;
  max-width: 380px;
  width: 100%;
  margin: 30px auto;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  &-inner{
    img{
      z-index: 2;
      position: relative;
    }
    .line{
      position: absolute;
      top: 25%;
      width: 100%;
      height: 50%;
      background: #F4FAFF;
      z-index: 1;
      border-top: 2px solid #DCE7F0;
    }
  }
  &-info{
    position: relative;
    background: #F4FAFF;
    padding: 10px;
    z-index: 2;
  }
  img{
    max-width: 210px;
    width: 100%;
  }
  &-best {
    overflow: hidden;
    .product-inner{
      .btn{
        overflow: hidden;
        position: relative;
        &:after {
          content: "Limited Edition";
          position: absolute;
          background: #FF0000;
          width: 215px;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          padding: 2px 10px;
          transform: rotate(-45deg);
          left: -65px;
          top: 30px;
        }
      }
    }
  }
  &-price {
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
    color: #707070;
    @media(min-width:992px){
      margin-top: 0;
    }
    span{
      font-size: 15px;
      font-weight: 500;
      color: #707070;
    }
  }
  &-name,&-title{
    line-height: 1.2;
    text-align: center;
    margin-bottom: 23px;
    color: #0C426D;
    font-size: 23px;
    @media(min-width:992px){
      font-size: 18px;
    }
    @media(min-width:1200px){
      font-size: 23px;
      padding:  5px 15px;
    }
  }
  &-name{
    font-weight: 700;
    @media(min-width:992px){
      font-size: 20px;
    }
    @media(min-width:1200px){
      font-size: 23px;
    }
  }
  &-title{
    font-weight: 500;
  }
  &-price, span{
    font-size: 30px;
    color: #0C426D;
    span{
      text-decoration-line: line-through;
      font-size: 16px;
    }
  }
  .product-price-only{
    span{
      text-decoration-line: none;
      font-weight: 500;
      font-size: 23px;
      line-height: 1.2;
    }
  }
  .btn{
    background: #0C426D;
    padding: 30px;
  }
  .buy-now{
    background: #00CB35;
    border-radius: 45px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.2;
    color: #fff;
    max-width: 225px;
    width: 100%;
    margin: 23px 0px;
    padding: 10px;
    text-decoration: none;
    transition: .3s ease;
    border: none;
    @media (min-width: 1200px) {
      font-size: 20px;
      line-height: 1.2;
    }
    &:hover {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
    }
  }
}
</style>