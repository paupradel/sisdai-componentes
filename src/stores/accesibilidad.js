export default {
  namespaced: true,
  state: {
    menu_accesibilidad_abierto: false,
    tipografia_atkinson: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
  },
  mutations: {
    alternarTipografiaAtkinson(state) {
      state.tipografia_atkinson = !state.tipografia_atkinson
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados
    },
    limpiarClasesAccesibles(state) {
      state.tipografia_atkinson = false
      state.vista_simplificada = false
      state.enlaces_subrayados = false
    },
  },
}
