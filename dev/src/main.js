import { createApp } from 'vue';
import App from './App.vue';
import Cleave from 'cleave-lite';
import { router } from './router'
import { setWasm, setCDN, getHighlighter } from 'shiki'
import Control from './Control.vue'
import Controls from './Controls.vue'
import ComponentTitle from './ComponentTitle.vue'
import { Token } from '@itsy/token'
import 'uno.css'

setWasm('/shiki/dist/onig.wasm')
setCDN('/shiki/')

const highlighter = await getHighlighter({ theme: 'vitesse-light', langs: ['js', 'vue-html'] })

createApp(App)
  .provide('Cleave', Cleave)
  .provide('highlighter', highlighter)
  .component('token', Token)
  .component('demo-control', Control)
  .component('demo-controls', Controls)
  .component('component-title', ComponentTitle)
  .use(router)
  .mount('#app');
