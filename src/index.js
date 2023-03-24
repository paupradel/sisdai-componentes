import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
  },
}

export default plugin
