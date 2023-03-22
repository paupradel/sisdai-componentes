import NarrativaScroll from '../../src/components/narrativa-scroll/NarrativaScroll.vue'
import ColapsableNavegacion from '../../src/components/colapsable-navegacion/ColapsableNavegacion.vue'
import MenuLateral from '../../src/components/menu-lateral/MenuLateral.vue'

// import './styles/index.scss';
export default ({
  Vue,
  // options, // the options for the root Vue instance
  router, // the router instance for the app
  // siteData // site metadata
}) => {
  // ...apply enhancements to the app
  // import styles
  //require('./theme/styles/index.scss'),
  require('./theme/styles/index.scss'),
    require('../../node_modules/sisdai-css/src/eni.scss')
  Vue.component('NarrativaScroll', NarrativaScroll)
  Vue.component('ColapsableNavegacion', ColapsableNavegacion)
  Vue.component('MenuLateral', MenuLateral)
}
