import { tooltip, tooltip_info } from './tooltips'

const plugin = {
  install: function (Vue) {
    Vue.directive(tooltip.name, tooltip)
    Vue.directive(tooltip_info.name, tooltip_info)
  },
}

export default plugin
