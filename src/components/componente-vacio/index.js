import ComponenteVacio from './ComponenteVacio.vue'

const plugin = {
    install: function (Vue) {
        Vue.component("ComponenteVacio", ComponenteVacio)
    }
}


export default plugin
