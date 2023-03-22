import NavegacionPrincipal from './NavegacionPrincipal.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(NavegacionPrincipal.__name, NavegacionPrincipal)
  },
}

export default plugin
