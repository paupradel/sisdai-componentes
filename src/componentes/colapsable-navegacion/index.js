import ColapsableNavegacion from './ColapsableNavegacion.vue'

const plugin = {
  install: function (Vue) {
    Vue.component('ColapsableNavegacion', ColapsableNavegacion)
  },
}

export default plugin
