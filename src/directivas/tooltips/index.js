import {
  globo_informacion,
  globo_informacion_extendido,
} from './GloboInformacion'

const plugin = {
  install: function (Vue) {
    Vue.directive(globo_informacion.name, globo_informacion)
    Vue.directive(globo_informacion_extendido.name, globo_informacion_extendido)
  },
}

export default plugin
