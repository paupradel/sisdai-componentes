import {
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaGobMx,
  SisdaiPiePaginaConacyt,
  SisdaiColapsableNavegacion,
  SisdaiMenuLateral,
  SisdaiIndiceDeContenido,
  SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  SisdaiNarrativaScroll,
  BotonFlotante,
  SisdaiModal,
} from './componentes'

import { GlobosInformacion } from './directivas'

const plugin = {
  install: function (Vue) {
    //UI base
    Vue.use(SisdaiNavegacionGobMx)
    Vue.use(SisdaiNavegacionPrincipal)
    Vue.use(SisdaiPiePaginaGobMx)
    Vue.use(SisdaiPiePaginaConacyt)
    Vue.use(SisdaiColapsableNavegacion)
    Vue.use(SisdaiMenuLateral)
    Vue.use(SisdaiIndiceDeContenido)
    Vue.use(SisdaiInfoDeDespliegue)
    //accesibilidad
    Vue.use(SisdaiMenuAccesibilidad)
    //auxiliares
    Vue.use(GlobosInformacion)
    //otros
    Vue.use(SisdaiNarrativaScroll)
    Vue.use(BotonFlotante)
    Vue.use(SisdaiModal)
  },
}

export {
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaGobMx,
  SisdaiPiePaginaConacyt,
  SisdaiColapsableNavegacion,
  SisdaiMenuLateral,
  SisdaiIndiceDeContenido,
  SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  GlobosInformacion,
  SisdaiNarrativaScroll,
  SisdaiModal,
}

export default plugin
