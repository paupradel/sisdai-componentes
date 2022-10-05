import {
  NarrativaScroll,
} from './components';

export default function plugin(Vue) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;
  Vue.use(NarrativaScroll);
}

export {
  plugin as install,
  NarrativaScroll,
};
