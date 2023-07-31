<template>
  <header class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <div class="logo">
            <picture>
              <source srcset="@/assets/img/logo.webp" type="image/webp">
              <source srcset="@/assets/img/logo.png" type="image/png"> 
              <img src="@/assets/img/logo.svg">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

</script>
<style lang="scss" scoped>
.page-header{
  padding: 20px;
  background: #FFF;
  height: 90px;
  .logo{
    width: 95px;
    max-width: 100%;
    display: block;
    @media(max-width:767px){
      margin: 0 auto;
    }
    img{
      display: block;
      width: 100%;
    }
  }
}
.row{
  @media(max-width:767px){
    justify-content: center;
  }
}
.col-md-9{
  display: flex;
  align-items: center;
}
.offset-md-1 {
  margin-left: 0;
}
</style>
