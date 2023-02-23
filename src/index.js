import NarrativaScroll from './components/narrativa-scroll/NarrativaScroll.vue'

export default function plugin(Vue) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(NarrativaScroll.__name, NarrativaScroll)
}

export { plugin as install }
