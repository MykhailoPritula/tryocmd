<template>
  <section class="section-products">
    <div class="products">
      <div class="container">
        <div class="box">  
          <div class="box-left">
            <img src="@/assets/img/title-img.svg">
          </div>
          <div class="box-right">
            <div class="top">
              <div class="price">
                <span>Only </span><s> $44</s><b> $22.95</b>
              </div>
            </div>
            <div class="bottom">
              <div class="subtitle">FAST 2-4 Business Day Shipping in USA<br>
                From Our US Warehouses
              </div>
            <div class="icons">
              <picture>
                <source srcset="@/assets/img/icons-offer.webp" type="image/webp">
                <source srcset="@/assets/img/icons-offer.png" type="image/png"> 
                <img src="@/assets/img/icons-offer.png">
              </picture>
            </div>
          </div>
        </div>
      </div>
        <HomeProductsTabs />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      status: false
    }
  },
  mounted(){
    localStorage.httpReferer = window.location.href;
    this.status = process.env.NODE_ENV;
  }
}
</script>

<style lang="scss" scoped>
.section-products {
  color: #2d2d2d;
  line-height: 1.2;
  font-size: 14px;
  background: #F8FDFF;
  margin: 0 auto;
  &--mob{
    .order{
      @media(max-width:991px){
        &-md{
          &-1{order: 1}
          &-2{order: 2}
          &-3{order: 3}
        }
      }
    }
  }
}
.products {
  z-index: 2;
  position: relative;
  .container {
    @media (min-width: 1200px) {
      padding: 45px 0;
    }
  }
}
.box{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media(min-width:768px){
    margin-bottom: 100px; 
  }
  @media(max-width:991px){
    flex-direction: column;
    align-items: center;
  }
  &-left{
    margin-bottom: 40px;
    background: #F4FAFF;
    @media(min-width:992px){
      margin-bottom: 0;
    }
  }
  &-right{
    text-align: center;
    margin-left: 0;
    @media(min-width:992px){
      margin-left: 40px;
    }
    .top{
      border-top: 2px solid #DCE7F0;
      border-bottom: 2px solid #DCE7F0;
      margin-bottom: 10px;
    }
  }
  .price{
    display: flex;
    flex-direction: column;
    font-size: 40px;
    line-height: 63px;
    margin-bottom: 20px;
    background: #f4faff;
    span{
      font-weight: 500;
      font-size: 30px;
      line-height: 1.2;
      text-align: center;
      color: #0C426D;
    }
    s{
      font-weight: 500;
      font-size: 16px;
      line-height: 1.2;
      color: #0C426D;
    }
    b{
      font-weight: 700;
      font-size: 40px;
      line-height: 1.2;
      color: #10B3F0;
    }
  }
  .subtitle{
    font-size: 18px;
    line-height: 1.2;
    text-align: left;
    color: #0C426D;
    margin-bottom: 20px;
    @media(min-width:768px){
      font-size: 23px;
    }
  }
  .bottom{
    max-width: 500px;
  }
}
</style>