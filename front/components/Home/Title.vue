<template>
  <section class="title">
    <div class="container">
      <div class="top">
        <div v-if="!mob" class="image">
          <img src="@/assets/img/title-img.svg">
        </div>
        <div class="text">
          <p class="text-first">Tired Of "Miracle Creams" That Promise To Be  <br> The Secret
            <span>"Fountain Of Youth"</span> Yet End Up <br> Being a Complete Waste?
          </p>
          <div v-if="mob" class="image image-mob">
            <img src="@/assets/img/title-img.svg">
          </div>
          <p class="text-second">Continue Reading to Find Why 100,000+ Women Say OCMD™ <br> Products are the Only Ones that Work.
          </p>
          <div class="icons">
            <div>
              <img src="@/assets/img/icon-risk_free.svg">
              <span>Risk-FREE<br> no autobills</span>
            </div>
            <div>
              <img src="@/assets/img/icon-autoships.svg">
              <span>No Strings Attached<br> no autoships</span>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <img src="@/assets/img/attention.svg">
        <p class="text">A Hint – it has to do with years of research and using 30+ clinically-proven natural-<br>based ingredients. Keep Reading…</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      mob: false
    }
  },
  methods:{
    checkMob(){
      if(window.innerWidth >= 992){
        this.mob = false
      } else {
        this.mob = true
      }
    }
  },
  mounted(){
    this.checkMob()
    window.onresize = () => this.checkMob()
  }
}
</script>

<style lang="scss" scoped>
.title {
  z-index: 2;
  position: relative;
  @media(min-width: 768px) {
    margin-top: -240px;
  }
  .container {
    background: #fff;
    border-radius: 10px;
    padding:  15px 15px 0;
    @media(min-width: 1200px) {
      padding: 45px 45px 0;
    }
  }
  br{
    @media(min-width:992px){
      display: none;
    }
  }
  .top{
    display: flex;
    margin-bottom: 40px;
    .icons{
      margin-bottom: 20px;
      @media(min-width:992px){
        margin-bottom: 60px;
      }
    }
    @media(max-width:991px){
      flex-direction: column;
      align-items: center;
    }
  }
  .image{
    flex: 1 30%;
  }
  .image-mob{
    text-align: center;
    margin-bottom: 60px;
  }
  .text{
    flex: 1 70%;
    padding-left: 0;
    @media(min-width:576px){
      padding-left: 30px;
    }
    &-first{
      font-weight: 700;
      font-size: 23px;
      line-height: 1.2;
      color: #0C426D;
      margin-bottom: 40px;
      @media(min-width:768px){
        font-size: 30px;
      }
      span{
        color: #F97B43;
      }
    }
    &-second{
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
      color: #0C426D;
      margin-bottom: 30px;
    }
    .icons{
      display: flex;
      justify-content: space-between;
      @media(max-width:767px){
        flex-direction: column;
        align-items: center;
      }
      div{
        display: flex;
        width: 100%;
        align-items: center;
        margin-right: 0;
        &:first-child{
          border-right: none;
          margin-bottom: 10px;
          border-bottom: 1px solid #E1EAF2;
          padding-bottom: 10px;
        }
        @media(min-width:768px){
          &:first-child{
            margin-right: 80px;
            border-right: 1px solid #E1EAF2;
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: none;
          }
        }
        @media(min-width:1200px){
          &:first-child{
            margin-right: 100px;
          }
        }
      }
      span{
        margin-left: 20px;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.2;
        color: #0C426D;
        padding-right: 30px;
        &:first-child{
          padding-left: 20px;
        }
        @media(min-width:768px){
          font-size: 20px;
        }
      }
    }
  }
  .comment{
    background: #F9F5F4;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media(max-width:576px){
      flex-direction: column;
    }
    @media(min-width:768px){
      padding: 30px;
    }
    img{
      margin-bottom: 20px;
      @media(min-width:576px){
        margin-bottom: 0;
      }
    }
    .text{
      font-weight: 700;
      font-size: 23px;
      line-height: 33px;
      color: #0C426D;
    }
  }
}
</style>
