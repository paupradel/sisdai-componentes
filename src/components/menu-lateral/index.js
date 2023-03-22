import MenuLateral from './MenuLateral.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(MenuLateral.__name, MenuLateral)
  },
}

export default plugin
