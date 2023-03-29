import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  NavegacionPrincipal,
  IndiceDeContenido,
  NavegacionGobMx,
  PiePaginaGobMx,
  PiePaginaConacyt,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(NavegacionPrincipal)
    Vue.use(IndiceDeContenido)
    Vue.use(NavegacionGobMx)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
  },
}

export default plugin
