import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // head: {
    //   title: 'katsuo3130',
    //   charset: 'utf-8',
    //   viewport: 'width=device-width, initial-scale=1',
    //   meta: [
    //     { hid: 'description', name: 'description', content: '' },
    //     { name: 'format-detection', content: 'telephone=no' },
    //   ],
    //   link: [
    //     // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    //     {
    //       rel: "stylesheet",
    //       href: "https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap",
    //       crossorigin: "",
    //     },
    //   ],
    // },
  },
  build: {
    transpile: ['vuetify'],
  },
  // css: [
  //   '@/assets/css/common.css',
  // ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true }
})
