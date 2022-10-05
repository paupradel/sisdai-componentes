import NarrativaScroll from './NarrativaScroll.vue';

function plugin(Vue) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  Vue.component(NarrativaScroll.name, NarrativaScroll);
}

export default plugin;
export {
  plugin as install,
  NarrativaScroll,
};
