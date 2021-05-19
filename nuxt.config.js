import colors from 'vuetify/es5/util/colors';

const is_production = process.env.NODE_ENV === 'production';

const repoName = 'kanata-button';
const hostName = 'https://vbup-osc.github.io';
const siteUrl = `${hostName}/${repoName}/`;

export default {
  mode: 'universal',
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'かなたんボタン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '天音かなたの音声ボタン 天音彼方语音按钮 Voice button of Amane Kanata'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'かなたんボタン,Kanata BUTTON,彼方碳按钮,hololive,Amane Kanata,天音かなた,かなた,かなたん,彼方,彼方碳,天哥,音妹,汤达人,语音按钮,ボイスボタン'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'かなたんボタン' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: 'かなたんボタン' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '新生かなたんボタンサイトへようこそ！かなたんの総合ファンページを目指しますー'
      },
      { hid: 'og:image', property: 'og:image', content: `/${repoName}/img/og_common.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Cyame' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: `/${repoName}/favicon.ico` }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@plugins/i18n' },
    { src: '@plugins/eventBus.js', mode: 'client' },
    { src: '@plugins/analytics.js', mode: 'client' }
  ],
  router: {
    middleware: 'ui_config',
    base: is_production ? `/${repoName}/` : '/'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [['@nuxtjs/vuetify', { treeShake: is_production }]],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', '@nuxtjs/markdownit', '@nuxtjs/sitemap'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // 主题基础颜色
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.lightBlue.base,
          secondary: colors.grey.darken2,
          accent: colors.lightBlue.base,
          error: colors.deepOrange.base,
          warning: colors.orange.base,
          info: colors.blueGrey.base,
          success: colors.teal.base
        },
        dark: {
          primary: colors.lightBlue.darken3,
          secondary: colors.grey.darken4,
          accent: colors.lightBlue.darken3,
          error: colors.deepOrange.accent4,
          warning: colors.amber.base,
          info: colors.teal.lighten1,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      font: null,
      icons: 'mdiSvg'
    }
  },
  pwa: {
    manifest: {
      start_url: '/?standalone=true'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://cdn.jsdelivr.net/gh/vbup-osc/kanata-button@master/static/voices/*'
        }
      ]
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: false,
    use: ['markdown-it-div', 'markdown-it-attrs'],
    injected: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: hostName,
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      },
      {
        url: '/links',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: new Date()
      },
      {
        url: '/about',
        changefreq: 'weekly',
        priority: 0.5,
        lastmod: new Date()
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    optimizeCSS: is_production,
    extractCSS: is_production
  }
};
