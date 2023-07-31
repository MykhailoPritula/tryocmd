<template>
  <section class="quality">
    <div class="container">
      <div class="quality-info">  
        <picture>
          <source srcset="@/assets/img/quality-icon.webp" type="image/webp">
          <source srcset="@/assets/img/quality-icon.png" type="image/png"> 
          <img src="@/assets/img/quality-icon.png">
        </picture>
        <div class="text">
          <h2>We are proud about our product and Stand Behind Our Promise!</h2>
          <p>Use the OCMD Rejuvenation Complex Cream Morning & Evening,
            and if for whatever reason, you do not see positive results within 14 days,
            just send us a message and we’ll refund you the full amount,
            no questions asked!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quality{
  background: #0C426D;
  padding: 10px;
  text-align: left;
  margin-bottom: 50px;
  @media(min-width:992px){
    margin-bottom: 100px;
  }
  @media(min-width:576px){
    padding: 60px;
  }
  &-info{
    display: flex;
    align-items: center;
    @media(max-width:991px){
      flex-direction: column;
    }
    .text{
      max-width: 800px;
      width: 100%;
    }
  }
  img{
    @media(min-width:992px){
      padding-right: 100px;
    }
  }
  h2, p {
    line-height: 1.2;
    color: #fff;
  }
  h2{
    font-weight: 500;
    font-size: 23px;
    margin-bottom: 40px;
    @media(min-width:768px){
      font-size: 30px;
    }
  }
  p{
    font-size: 18px;
    @media(min-width:768px){
      font-size: 20px;
    }
  }
}
</style>
