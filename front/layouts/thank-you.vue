<template>
  <div id="app" class="tech">
    <main class="main" ref="main">
      <Nuxt/>
    </main>
    <PartialsLoader v-if="this.$store.state.loader"/>
  </div>
</template>


<style lang="scss">
.sell,
.sellingOne,
.sellingTwo,
.sellingThree,
.sellingFor,
.sellingFive,
.thankyou {
  .page-header, .footer-main {
    display: none;
  }
}

.payPalButton{
  cursor: pointer;
  background: #ffc439;
  border: none;
  height: 55px;
  line-height: 55px;
  display: block;
  width: 300px;
  max-width: 100%;
  border-radius: 30px;
  text-align: center;
  &:hover{
    background-color: #ffb300;
  }
  img{
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    height: 30px;
    pointer-events: none;
  }
}
</style>
