<template>
  <div class="page page-one" >
    <PartialsTop />
    <HomeTitle />
    <HomeComments />
    <HomeLimit  v-if="loaded" />
    <HomeChallenge v-if="loaded" />
    <!-- <HomeGallery v-if="loaded" /> -->
    <HomeProducts v-if="loaded" id="products" />
    <HomeQuality v-if="loaded" />
    <HomeInformation v-if="loaded" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      loaded: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.loaded = true
    }, 1000)
  }
}
</script>

<style lang="scss">
.page{
  font-family: Montserrat;
}
</style>
