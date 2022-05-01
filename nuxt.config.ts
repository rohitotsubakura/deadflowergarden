import { defineNuxtConfig } from 'nuxt3'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: ['modern-css-reset'],
    target: 'static',
    components: {
      dirs: [
      '~/components/',
    ]},
    vite:{
      server: {
        watch: {
          usePolling: true,
        },
      },
      plugins: [
        svgLoader({
      })
    ]
},
})
