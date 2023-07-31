<template>
  <section class="limit">
    <div class="main-title">Limited Offer!!!!</div>
    <div class="container">
      <div class="title"><span>Claim Your Limited Edition Starter-Kit While<br>Supply Last...</span></div>
      <div class="box">
        <div class="box-left">
          <div class="box-price">
            <span>Only </span><s> $44</s><b> $22.95</b>
          </div>
          <div class="box-button">
            <button @click="scrollToProducts"><b>Order Yours Now</b><span>QUICK 2-4 Business Days Shipping</span></button>
          </div>
        </div>
        <div class="box-right">
          <div class="box-subtitle">FAST 2-4 Business Day Shipping in USA
            From Our<br> US Warehouses
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
      <p>Proudly introducing the revolutionary technology of <b>Apple<br> Stem Cells</b>that helps <b>firming</b> and <b>lifting</b> skin… while reducing <br> the appearance of wrinkles depth!</p>
      <div class="bottom-title"><span>Real Customers Results</span></div>
      <PartialsSlider />
      <div class="list">
        <ul>
          <li>Helps Reducing the appearance of wrinkles.</li>
          <li>Helps Firming and lifting the skin (for over 92% of customers)</li>
          <li>Removes Dead Surface Skin Cells to Help  Creating a brighter complexion.</li>
          <li>Swiss Apple Stem Cells Helps stimulate skin stem cell regeneration by up to 80%.</li>
          <li>Helps reducing the damage of UV sun light on skin stem cells by 46%.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  methods:{
    scrollToProducts(){
      const box = document.getElementById('products')
      window.scrollTo({
        top: box.offsetTop - 100,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.limit{
  text-align: center;
}
br{
  @media(max-width:575px){
    display: none;
  }
}
.main-title{
  background: #0C426D;
  padding: 25px;
  color: #fff;
  font-weight: bold;
  font-size: 23px;
  line-height: 46px;
  margin-bottom: 40px;
  @media(min-width:768px){
    font-size: 40px;
  }
}
.title{
  font-weight: bold;
  font-size: 23px;
  line-height: 1.2;
  color: #0C426D;
  margin-bottom: 20px;
  position: relative;
  @media(min-width:768px){
    font-size: 40px;
    &::before{
      content: "";
      height: 1px;
      width: 10%;
      display: block;
      background: #dce7f0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after{
      content: "";
      height: 1px;
      width: 10%;
      display: block;
      background: #dce7f0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.box{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media(min-width:768px){
    margin-bottom: 100px;
  }
  @media(max-width:991px){
    flex-direction: column;
    align-items: center;
  }
  &-left{
    margin-bottom: 40px;
    @media(min-width:992px){
      margin-bottom: 0;
    }
  }
  &-right{
    display: block;
    padding-left: 0;
    @media(min-width:768px){
      padding-left: 130px;
    }
    @media(max-width:1199px){
      br{
        display: none;
      }
    }
  }
  &-price{
    display: flex;
    flex-direction: column;
    font-size: 40px;
    line-height: 63px;
    margin-bottom: 20px;
    background: #f4faff;
    border-top: 2px solid #DCE7F0;
    margin-bottom: 10px;
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
  &-subtitle{
    font-size: 18px;
    line-height: 1.2;
    color: #0C426D;
    text-align: left;
    padding: 0 30px;
    @media(min-width:768px){
      font-size: 23px;
      padding: 0;
    }
  }
  .icons{
    margin-top: 20px;
    @media(min-width:768px){
      margin-top: 65px;
      text-align: left;
    }
  }
  &-button{
    background: #0C426D;
    padding: 15px 30px;
  }
  button{
    max-width: 400px;
    width: 100%;
    height: 75px;
    background: #00CB35;
    border-radius: 50px;
    border: none;
    position: relative;
    padding: 5px 30px;
    b{
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      display: block;
    }
    span{
      font-weight: bold;
      line-height: 16px;
      color: #BAE0C5;
      font-size: 16px;
      @media(min-width:376px){
        font-size: 18px;
      }
    }
  }
}
.bottom-title{
  font-weight: bold;
  font-size: 23px;
  line-height: 1.2;
  color: #0C426D;
  margin-bottom: 20px;
  position: relative;
  span{
    background: #fff;
    position: relative;
    z-index: 1;
  }
  &::before{
    content: "";
    height: 1px;
    width: 100%;
    display: block;
    background: #dce7f0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  @media(min-width:768px){
    font-size: 30px;
    margin-bottom: 40px;
  }
}
p{
  font-weight: 500;
  font-size: 23px;
  line-height: 1.2;
  color: #0C426D;
  margin-bottom: 25px;
  @media(min-width:768px){
    font-size: 31px;
    margin-bottom: 100px;
  }
}
.list{
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 25px;
  @media(min-width:768px){
    margin-bottom: 100px;
  }
  li{
    @media(max-width:992px){
      line-height: 1.3;
    }
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 10px;
    position: relative;
    margin-left: 40px;
    color:#0C426D;
    &::before{
      content: url('@/assets/img/check-list.svg');
      position: absolute;
      display: inline-block;
      left: -30px;
      @media(min-width:768px){
        left: -50px;
      }
    }
    b{
      color:#000;
    }
  }
}

</style>
