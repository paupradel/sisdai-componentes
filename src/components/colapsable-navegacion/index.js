import ColapsableNavegacion from './ColapsableNavegacion.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(ColapsableNavegacion.__name, ColapsableNavegacion)
  },
}

export default plugin
