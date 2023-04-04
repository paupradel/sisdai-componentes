import {
  NavegacionGobMx,
  NavegacionPrincipal,
  PiePaginaGobMx,
  PiePaginaConacyt,
  ColapsableNavegacion,
  MenuLateral,
  IndiceDeContenido,
  InfoDeDespliegue,
  MenuAccesibilidad,
  NarrativaScroll,
} from './componentes'

import { GlobosInformacion } from './directivas'

const plugin = {
  install: function (Vue) {
    //UI base
    Vue.use(NavegacionGobMx)
    Vue.use(NavegacionPrincipal)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(IndiceDeContenido)
    Vue.use(InfoDeDespliegue)
    //accesibilidad
    Vue.use(MenuAccesibilidad)
    //auxiliares
    Vue.use(GlobosInformacion)
    //otros
    Vue.use(NarrativaScroll)
  },
}

export {
  NavegacionGobMx,
  NavegacionPrincipal,
  PiePaginaGobMx,
  PiePaginaConacyt,
  ColapsableNavegacion,
  MenuLateral,
  IndiceDeContenido,
  InfoDeDespliegue,
  MenuAccesibilidad,
  GlobosInformacion,
  NarrativaScroll,
}

export default plugin
