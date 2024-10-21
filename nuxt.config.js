import colors from 'vuetify/es5/util/colors'
import { resolve } from 'path';
// This helps to globally configure your project.
export default {
  // By default ssr is true if we set in cli when installation
  // ssr:false, // to turn off ssr, we did it because we were having problems with fetching inside server components
  alias: {
    'images': resolve(__dirname, './assets/images') // now we can import
    // images like <img src="images/<file-name>.{png|jpg|...}" />
  },
  dev: process.env.NODE_ENV !== 'production', // if environment is not 
  // prod then dev is true
  env: {
    baseUrl: process.env.BASE_URL // get base url from env
  },
  generate: {
    dir: 'build', // when building app using yarn generate 
    // the folder which will get generated will be build instead of dist
    subFolders: false // html file will be generated in the root of build
  },
  loading: {
    color: '#FFF000'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxtjs-2-course',
    title: 'nuxtjs-2-course',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css' // we can import directly here
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/myPlugin.js' // we can add plugins here
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/myModule.js' // I called my module here which I created.
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // router: { // we want to use a middleware for our router so define here.
  //   middleware: 'auth' // app based middleware
  // },
  // dir: {
  //   pages: 'views' // now router will look into views directory instead
  //   // of pages to get the pages available for the app
  // },
  // pageTransition: 'page', // we can change page transition from here
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) { // ctx parameter is very imp element to nuxt
      // it gives full access to whole framework and we can 
      // call elements from far away, etc...

    }
  }
}
