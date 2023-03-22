import {
  NarrativaScroll,
  ComponenteVacio,
  NavegacionPrincipal,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(NavegacionPrincipal)
  },
}

export default plugin
