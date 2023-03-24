import MenuAccesibilidad from './MenuAccesibilidad.vue'

const plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuAccesibilidad', MenuAccesibilidad)
  },
}

export default plugin
