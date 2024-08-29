import OpenLayers from 'vue3-openlayers'
// import { Layers, Map, Sources } from 'vue3-openlayers'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(OpenLayers)
  // nuxtApp.vueApp.use(Map /* , options */)
  // nuxtApp.vueApp.use(Layers /* , options */)
  // nuxtApp.vueApp.use(Sources /* , options */)
})
