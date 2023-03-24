import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  NavegacionPrincipal,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(NavegacionPrincipal)
  },
}

export default plugin
