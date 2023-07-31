<template>
  <div id="app" class="tech">
    <PartialsHeader/>
    <main class="main" ref="main">
      <Nuxt/>
    </main>
    <PartialsFooter v-if="loaded"/>
    <PartialsLoader v-if="this.$store.state.loader" />
    <Scripts v-if="scripts" />
  </div>
</template>

<script>
export default {
data(){
  return {
    loaded: false,
    scripts: false
  }
},
mounted(){
    if(this.$route.query.affId) localStorage.affId = this.$route.query.affId;
    if(this.$route.query.utm_source) localStorage.utm_source = this.$route.query.utm_source;
    if(this.$route.query.utm_medium) localStorage.utm_medium = this.$route.query.utm_medium;
    if(this.$route.query.utm_campaign) localStorage.utm_campaign = this.$route.query.utm_campaign;
    if(this.$route.query.utm_content) localStorage.utm_content = this.$route.query.utm_content;
    if(this.$route.query.utm_term) localStorage.utm_term = this.$route.query.utm_term;
    setTimeout(()=>{
      this.loaded = true
    }, 1000);
    setTimeout(() => {
      this.scripts = true
      }, 4000)
  }
}
</script>

<style lang="scss" scoped>
#app{
  font-family: Montserrat;
}
</style>