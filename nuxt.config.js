export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    // script: [
    //   { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBOMQAKjVaaYfe_fSHNn3CBFcbNS651GnA&libraries=places' }
    // ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src:
          "https://unpkg.com/@google/markerclustererplus@5.1.0/dist/markerclustererplus.min.js"
      },
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBOMQAKjVaaYfe_fSHNn3CBFcbNS651GnA"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/icon.png?v2" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/scss/main.scss",
    "~/assets/scss/blocks/slider_description.scss",
    "~/assets/scss/swiper.min.css",
    "~/assets/scss/blocks/custom_swiper.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/vue-scrollmagic.js", ssr: false },
    { src: "~plugins/gloabal_components.js", ssr: false },
    { src: "~/plugins/vue-masonry.js", ssr: false },
    // { src: './plugins/router.js', ssr: false },
    { src: "~/plugins/calendar.js", ssr: false },
    { src: "~/plugins/gsap.js", ssr: false },
    { src: "~/plugins/vue-splide.client.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/device'
  ],
  /*
   ** Nuxt.js modules
   */
  components: ["~/blocks", "~/components"],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/recaptcha"
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: "YOUR SITE KEY", // Site key for requests
    version: 2, // Version
    size: "invisible" // Size: 'compact', 'normal', 'invisible' (v2)
  },
  sitemap: {
    hostname: "http://premier.onfire.work/"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // server: {
  //   port: 3001
  // },
  server: {
    // port: 8000, // default: 3000
    // port: 3020, // default: 3000
    // port: 3000, // default: 3000
    port: 8000,
    host: "0.0.0.0"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
