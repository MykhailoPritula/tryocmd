<template>
  <div class="container">
    <div class="text">
      <h2>Inviting You to Join the<br>2-WEEKS CHALLENGE</h2>
      <p class="text-top">After carefully developing our OCMD Rejuvenation Complex Cream
        for over 2.5 years,
        using top technology and relying on the most
        advanced researches in the field,
        We are so proud of this product that we offer you the chance to try out a
        limited edition two-week sample.
      </p>
      <p class="text-bottom">Two weeks is all the time Thousands of Our
        Customers Needed to Start Seeing Visible Change!
        Will You Be Our Next Success Case-Study?
      </p>
      <div class="icons">
        <div class="icon" v-for="icon in icons">
          <img :src="icon.img">
          <h3>{{ icon.title }}</h3>
          <span>{{ icon.subtitle }}</span>
        </div>
      </div>
      <div class="text-title">OCMD Rejuvenation<br> Complex Cream</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      icons: [
        {
          img: require('@/assets/img/eco-friendly.svg'),
          title: `ECO FRIENDLY`,
          subtitle: `Quality Natural Ingredients`
        },
        {
          img: require('@/assets/img/dermatologist.svg'),
          title: `DERMATOLOGISTS RECOMMENDED`
        },
        {
          img: require('@/assets/img/cruetly-free.svg'),
          title: `CRUELTY FREE`,
          subtitle: `Tested on real women, not animals`
        },
        {
          img: require('@/assets/img/skin-type.svg'),
          title: `FITS ALL SKIN TYPE`
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.text{
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  br{
    @media(max-width:767px){
      display: none;
    }
  }
  h2{
    font-size: 23px;
    font-weight: 700;
    line-height: 1.2;
    color: #0C426D;
    margin-bottom: 20px;
    @media(min-width:768px){
      font-size: 40px;
      margin-bottom: 40px;
    }
  }
  span{
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 40px;
    font-weight: 400;
    @media(min-width:768px){
      font-size: 40px;
    }
  }
  &-top{
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #0C426D;
    margin-bottom: 20px;
    @media(min-width:768px){
      margin-bottom: 50px;
      font-size: 20px;
    }
  }
  &-bottom{
    font-weight: bold;
    font-size: 23px;
    line-height: 1.2;
    color: #0C426D;
    margin-bottom: 30px;
    @media(min-width:768px){
      font-size: 30px;
      margin-bottom: 70px;
    }
  }
  .icons{
    display: flex;
    margin: 0 auto 100px auto;
    @media(max-width:991px){
      flex-wrap: wrap;
      margin: 0 auto 20px auto;
    }
    .icon{
      flex: 1 100%;
      text-align: center;
      color: #0C426D;
      font-weight: 700;
      line-height: 1.2;
      &:not(:last-child){
        margin-bottom: 20px;
        border-right: none;
      }
      @media(min-width:992px){
        flex: 1 25%;
        &:not(:last-child){
          margin-bottom: 0;
          border-right: 1px solid #E1EAF2;
        }
      }
    }
    img{
      margin-bottom: 20px;
      @media(min-width:768px){
        margin-bottom: 40px;
      }
    }
    h3{
      font-size: 20px;
    }
    span{
      font-size: 16px;
    }
  }
  &-title{
    font-weight: bold;
    font-size: 23px;
    line-height: 46px;
    color: #0C426D;
    margin-bottom: 40px;
    @media(min-width:768px){
      font-size: 40px;
    }
  }
}
</style>
