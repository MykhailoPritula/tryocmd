<template>
  <div class="slider">
    <vue-tiny-slider v-bind="tinySliderOptions">
      <div class="item">
        <picture>
          <source srcset="@/assets/img/slider/1.webp" type="image/webp">
          <img src="@/assets/img/slider/1.png">
        </picture>
      </div>
      <div class="item">
        <picture>
          <source srcset="@/assets/img/slider/2.webp" type="image/webp">
          <img src="@/assets/img/slider/2.png">
        </picture>
      </div>
      <div class="item">
        <picture>
          <source srcset="@/assets/img/slider/3.webp" type="image/webp">
          <img src="@/assets/img/slider/3.png">
        </picture>
      </div>
      <div class="item">
        <picture>
          <source srcset="@/assets/img/slider/4.webp" type="image/webp">
          <img src="@/assets/img/slider/4.png">
        </picture>
      </div>
      <div class="item">
        <picture>
          <source srcset="@/assets/img/slider/5.webp" type="image/webp">
          <img src="@/assets/img/slider/5.png">
        </picture>
      </div>
    </vue-tiny-slider>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        }
      ]
    };
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        items: 1,
        swipeAngle: 45,
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" >
.slider{
  position: relative;
  padding: 20px 0;
  margin-bottom: 30px;
  @media(min-width:768px){
    padding: 50px 30px; 
  }
  .tns{
    &-nav{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      button{
        border: 2px solid #0C426D;
        border-radius: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        padding: 0;
        background: #fff;
        margin: 0 6px;
        &.tns-nav-active{
          background: #0C426D;
        }
      }
    }
    &-controls{
      button{
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0;
        width: 15px;
        height: 30px;
        border: none;
        background-color: transparent;
        background-size: 100% 100%;
        padding: 0;
        &[data-controls="prev"]{
          left: 0;
          background-image: url('@/assets/img/slider/prev.png');
        }
        &[data-controls="next"]{
          right: 0;
          background-image: url('@/assets/img/slider/next.png');
        }
        &:disabled{
          opacity: .2;
        }
      }
    }
  }
}
</style>
