<template>
  <section class="information">
    <div class="container">
      <h1>How to use?</h1>
      <div class="icons">
        <div class="icon">
          <img src="@/assets/img/sun-and-moon.svg">
          <p>Use OCMD twice a day, in the morning and in the evening.</p>
        </div>
        <div class="icon">
          <p>Remove your makeup, cleanse your skin, then gently apply the
            cream on your face, neck, and decollete with an outwark and
            upward sweeping motion.
          </p>
          <img src="@/assets/img/cream.svg">
        </div>
        <div class="icon">
          <img src="@/assets/img/face.svg">
          <p>Use a generous amount on deep lines and wrinkles, avoiding the eye
            area. In order to improve blood circulation and product efficiency, we
            recommend doing a few massaging strokes from the middle of the 
            face to the outsides or a few light taps with fingertips.
          </p>
        </div>
        <div class="icon">
          <p>It is recommended to use OCMD along with a sunscreen during the day.</p>
          <img src="@/assets/img/cream2.svg">
        </div>
      </div>
      <div class="info-top">
        <div class="left"> 
          <h2>What can you expect?</h2>
          <img src="@/assets/img/question-icon.svg">
        </div>
        <div class="right">
          <p class="right-text">During the first week you might experience a tingling sensation, which means the active ingredients in our formula are doing their job. Your skin will soon begin to feel smoother and healthier. After four weeks you will notice that your wrinkles are smaller, your skin is firmer and your complexion is brighter.</p>
        </div>
      </div>
      <div class="info-bottom">
        <div class="info-img">
          <picture class="img-use">
            <source srcset="@/assets/img/skin.webp" type="image/webp">
            <img src="@/assets/img/skin.png">
          </picture>
        </div>
        <div class="info-text">
          <h2>The Science Behind</h2>
          <p>OCMD Rejuvenation Complex Cream uses a combination of 3 sizes of Hyaluronic Acid molecules and a hand picked selection of 17 active ingredients, including apple stem cells extracts, vitamin liposomes, and natural compounds like lactic acid.
          </p>
          <p>Our formula gently exfoliates the epidermis and penetrates into the lower skin levels to optimize product efficiency.
          </p>
          <p>The Shrunken Hyaluronic Acid molecules trap moisture. The Swiss Apple Stem Cells Increase skin stem cell regeneration by 80% and reduce the damage of UV sun light on skin stem cells by 46%. The vitamin liposomes nourish the skin. Other active ingredients trigger and enhance Elastin & Collagen production. The result of all this is a tighter, smoother skin and a brighter complexion.
          </p>
        </div>
      </div>
    </div>
    <div class="fulllist">
      <h2>Full Ingredients List</h2>
      <p>WATER; ISOPROPYL MYRISTATE; RICINUS COMMUNIS (CASTOR) SEED OIL; SQUALANE; CYCLOPENTASILOXANE; DIMETHICONE; CAPRYLIC/CAPRIC TRIGLYCERIDE; GLYCERIN; TOCOPHERYL ACETATE; SODIUM ACRYLATE / SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER; PHENOXYETHANOL; PANTHENOL; RETINYL PALMITATE; ISOHEXADECANE; POLYSORBATE 20; TITANIUM DIOXIDE; MATRICARIA CHAMOMILLA (GERMAN CHAMOMILE) FLOWER WATER; SODIUM BENZOATE; CALENDULA OFFICINALIS (CALENDULA) FLOWER WATER; POLYSORBATE 80; PERSEA GRATISSIMA (AVOCADO) OIL; TRITICUM VULGARE (WHEAT) GERM OIL; FRAGRANCE; SORBITAN OLEATE; MALUS DOMESTICA (APPLE) FRUIT CELL CULTURE EXTRACT; ALCOHOL; PRUNUS DULCIS (SWEET ALMOND) OIL; ETHYLHEXYLGLYCERIN; BORAGO OFFICINALIS (BORAGE) SEED OIL; SODIUM HYALURONATE; LECITHIN; XANTHAN GUM; BENZYL ALCOHOL; CITRIC ACID; ASCORBYL PALMITATE; POTASSIUM SORBATE; LINALOOK, CITRONELLOL; GERANIOL, LIMONENE.
      </p>
    </div>
    <div v-if="mob" class="btn">
      <button class="buy-now button" @click="scrollToProducts">ORDER NOW ></button>
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
    scrollToProducts(){
      const box = document.getElementById('products')
      window.scrollTo({
        top: box.offsetTop - 100,
        behavior: "smooth"
      })
    },
    checkMob(){
      if(window.innerWidth >= 768){
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
.information{
  text-align: center;
  h1{
    font-weight: 700;
    font-size: 23px;
    line-height: 1.2;
    color: #0C426D;
    margin-bottom: 35px;
    @media(min-width:768px){
      font-size: 40px;
      margin-bottom: 50px;
    }
  }
  .icons{
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    @media(min-width:1200px){
      padding: 0;
    }
  }
  .icon{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:1199px){
      &:nth-child(even){
        flex-direction: column-reverse;
      }
      flex-direction: column;
    }
    img{
      margin-bottom: 20px;
      @media(min-width:1200px){
        margin-bottom: 0;
      }
    }
    p{
      font-weight: 700;
      font-size: 18px;
      line-height: 1.2;
      color: #0C426D;
      margin-bottom: 20px;
      @media(min-width:1200px){
        margin-bottom: 0;
        padding: 60px;
        &:nth-child(even){
          margin-right: -80px;
        }
        &:nth-child(odd){
          margin-left: -50px;
        }
      }
      @media(min-width:768px){
        font-size: 20px;
      }
    }
  }
  p{
    max-width: 900px;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #0C426D;
    text-align: left;
  }
  .info-top{
    display: flex;
    margin-bottom: 25px;
    margin-top: 25px;
    color: #0C426D;
    background: #F8FDFF;
    padding: 10px;
    @media(min-width:992px){
      padding: 50px;
      margin-top: 100px;
      margin-bottom: 100px;
    }
    @media(max-width:991px){
      flex-direction: column;
    }
    .left{
      position: relative;
      flex: 1 30%;
      h2{
        font-weight: 700;
        font-size: 23px;
        line-height: 1.2;
        text-align: left;
        position: relative;
        z-index: 2;
        @media(min-width:768px){
          font-size: 40px;
        }
      }
      img{
        position: absolute;
        top: 0;
        right: 50px;
        z-index: 1;
        @media(min-width:576px){
          right: 150px;
        }
        @media(min-width:992px){
          right: 50px;
        }
      }
    }
    .right{
      flex: 1 70%;
      &-text{
        line-height: 21px;
        position: relative;
        z-index: 2;
      }
    }
  }
  .info-bottom{
    display: flex;
    margin-bottom: 30px;
    padding: 0;
    @media(min-width:992px){
      margin-bottom: 100px;
      padding: 50px;
    }
    @media(max-width:991px){
      flex-direction: column;
    }
    .info-img{
      flex: 1 40%;
      margin-bottom: 30px;
      @media(min-width:992px){
        margin-bottom: 0;
        margin-right: 30px;
      }
    }
    .info-text{
      text-align: left;
      flex: 1 60%;
      color: #0C426D;
      line-height: 1.2;
      @media(max-width:991px){
        text-align: center;
      }
      h2{
        font-weight: 700;
        font-size: 23px;
        margin-bottom: 20px;
        @media(min-width:768px){
          font-size: 40px;
          margin-bottom: 40px;
        }
      }
      p{
        font-weight: 400;
        font-size: 16px;
        @media(min-width:768px){
          font-size: 18px;
        }
        &:not(:last-child){
          margin-bottom: 10px;
        }
      }
    }
  }
  .fulllist{
    background: #F9F5F4;
    padding: 30px;
    @media(min-width:768px){
    padding: 50px;
    }
    h2{
      margin-bottom: 20px;
      color: #0C426D;
      font-size: 23px;
      font-weight: 700;
      @media(min-width:768px){
        font-size: 40px;
        margin-bottom: 40px;
      }
    }
    p{
      max-width: 100%;
      width: 100%;
      font-size: 18px;
      margin-bottom: 40px;
      color: #0c426d;
      @media(min-width:768px){
        margin-bottom: 25px;
      }
    }
  }
}
.btn{
  background: #0C426D;
  padding: 15px;
}
.buy-now{
  background: #00CB35;
  border-radius: 45px;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  max-width: 250px;
  width: 100%;
  max-height: 45px;
  height: 100%;
  margin: 23px 0px;
  padding: 10px;
  text-decoration: none;
  transition: .3s ease;
  border: none;
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
  }
  &:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }
}
</style>
