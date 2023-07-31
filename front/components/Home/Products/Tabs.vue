<template>
  <section class="section-tabs">
    <div class="tabs" id="products">
      <div class="tabs-tab tab1">
        <div class="row">
          <div class="col-12 col-lg-4">
            <PartialsProduct
              img_png="product-1.png"
              img_webp="product-1.webp"
              :name="products[0].name"
              :product_title="products[0].product_title"
              :ea="products[0].ea"
              :id="products[0].id"
              :text_price="products[0].text_price"
              :only="true"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              img_png="product-1.png"
              img_webp="product-1.webp"
              :name="products[2].name"
              :product_title="products[2].product_title"
              :ea="products[2].ea"
              :id="products[2].id"
              :text_price="products[2].text_price"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              img_png="product-limited.png"
              img_webp="product-limited.webp"
              :best="true"
              :name="products[1].name"
              :product_title="products[1].product_title"
              :ea="products[1].ea"
              :id="products[1].id"
              :text_price="products[1].text_price"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs{
  &-tab {
    .product{
      text-align: center;
    }
    .row{
      & > div {
        order: 2;
        &:nth-child(2) {
          order: 2;
          @media (min-width: 992px) {
            order: 2;
          }
        }
      }
    }
  }
}
</style>

