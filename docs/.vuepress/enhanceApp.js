import SisdaiComponentes from '../../src'
import pageComponents from '@internal/page-components'

export default ({
  Vue,
  // options, // the options for the root Vue instance
  router, // the router instance for the app
  // siteData // site metadata
}) => {
  // ...apply enhancements to the app
  // import styles
  require('./theme/styles/index.scss')
  require('../../node_modules/sisdai-css/src/eni.scss')

  Vue.use(SisdaiComponentes)

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}
