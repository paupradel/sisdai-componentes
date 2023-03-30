import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  NavegacionPrincipal,
  NavegacionGobMx,
  PiePaginaGobMx,
  PiePaginaConacyt,
} from './components'

import { tooltips } from './directivas'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(NavegacionPrincipal)
    Vue.use(NavegacionGobMx)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
    Vue.use(tooltips)
  },
}

export default plugin
