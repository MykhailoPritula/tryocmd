export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OCMD',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'description', content: 'Learn about the most common skin concerns and how to effectively treat them.'},
      {name: 'keywords', content: 'skin care, skin care products, best skin care products'},
      {name: 'copyright', content: '2022 copyright website. All rights reserved.'},
      {name: 'viewport', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'},
      {name: 'author', content: 'MaxGloba'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/all.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-tiny-slider.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    base: '/tryocmd/',
    mode: 'history'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  generate: {
    // dir: '../dist_server'
    dir: '../dist'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    target: 'static'
    // target: 'server'
  }
}
