export default {
  namespaced: true,
  state: {
    // menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
  },
  mutations: {
    alternarTipografiaAccesible(state) {
      state.tipografia_accesible = !state.tipografia_accesible
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados
    },
    limpiarClasesAccesibles(state) {
      state.tipografia_accesible = false
      state.vista_simplificada = false
      state.enlaces_subrayados = false
    },
  },
}
