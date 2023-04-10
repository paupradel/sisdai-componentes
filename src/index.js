import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  MenuAccesibilidad,
  BotonFlotante,
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
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(MenuAccesibilidad)
    Vue.use(BotonFlotante)
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
