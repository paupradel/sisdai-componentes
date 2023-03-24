import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  NavegacionPrincipal,
  NavegacionGobMx,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(NavegacionPrincipal)
    Vue.use(NavegacionGobMx)
  },
}

export default plugin
