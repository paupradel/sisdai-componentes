import MenuLateral from './MenuLateral.vue'

const plugin = {
  install: function (Vue) {
    Vue.component('MenuLateral', MenuLateral)
  },
}

export default plugin
