import {
  NarrativaScroll,
  ColapsableNavegacion,
  MenuLateral,
  MenuAccesibilidad,
  NavegacionPrincipal,
  IndiceDeContenido,
  NavegacionGobMx,
  PiePaginaGobMx,
  PiePaginaConacyt,
  InfoDeDespliegue,
} from './componentes'

import { GlobosInformacion } from './directivas'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(MenuAccesibilidad)
    Vue.use(NavegacionPrincipal)
    Vue.use(IndiceDeContenido)
    Vue.use(NavegacionGobMx)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
    Vue.use(GlobosInformacion)
    Vue.use(InfoDeDespliegue)
  },
}

export default plugin
