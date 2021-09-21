
export default {
  mode: 'universal',
  server: {
    port: 4112,
    host: '0.0.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'База строительных и отделочных материалов "Орбита-строй" || Стройматериалы в Нижнем Новгороде',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'База строительных и отделочных материалов в Нижнем Новгороде "Орбита-строй". В ассортименте стройматериалы, отделка, инструмент, электротовары, изоляция, сантехника. Если вы ищите строительные материалы в Нижнем новгороде, то добро пожаловать к нам.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lodash',
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    ['@nuxtjs/google-analytics', {
      id: ''
    }],
    ['@nuxtjs/yandex-metrika', {
      id: '82186939',
      webvisor: true,
      clickmap:true,
      useCDN:false,
      trackLinks:true,
      accurateTrackBounce:true,
    }],

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
