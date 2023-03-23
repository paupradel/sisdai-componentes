import { NarrativaScroll, ComponenteVacio, NavegacionGobMx } from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(NavegacionGobMx)
  },
}

export default plugin
