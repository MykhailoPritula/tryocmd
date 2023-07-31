<template>
  <section class="page page-checkout">
    <div class="container">
      <img src="@/assets/img/chkl-stp-img.png" alt="" class="steps-icon">
      <div class="row">
        <div class="col-md-8">
          <CheckoutForm />
        </div>
        <div class="col-md-4">
          <CheckoutCart />
          <CheckoutText />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>
<style lang="scss" scoped>
.page-checkout{
  padding-top: 30px;
}
.steps-icon{
  display: block;
  margin: 0 auto 30px;
}
.container{
  border-bottom: 1px solid #ccc;
  padding-bottom: 60px;
}
</style>