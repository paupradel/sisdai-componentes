export default {
  namespaced: true,
  state: {
    // menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
    cambio_tipografia: false,
    tamanio_fuente: 16,
  },
  getters: {
    clasesAccesibles: state => ({
      'a11y-tipografia': state.tipografia_accesible,
      'a11y-simplificada': state.vista_simplificada,
      'a11y-hipervinculos': state.enlaces_subrayados,
      'a11y-tamanio': state.cambio_tipografia,
    }),
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
    incrementarTamanioTipografia(state) {
      state.cambio_tipografia = true
      if (state.tamanio_fuente > 47) {
        state.tamanio_fuente = 48
      } else {
        state.tamanio_fuente++
      }
      let tamanio_arriba = `${state.tamanio_fuente}px`
      document.documentElement.style.setProperty(
        '--tipografia-tamanio',
        tamanio_arriba
      )
    },
    reducirTamanioTipografia(state) {
      state.cambio_tipografia = true
      if (state.tamanio_fuente < 2) {
        state.tamanio_fuente = 1
      } else {
        state.tamanio_fuente--
      }
      let tamanio_abajo = `${state.tamanio_fuente}px`
      document.documentElement.style.setProperty(
        '--tipografia-tamanio',
        tamanio_abajo
      )
    },
    restablecer(state) {
      state.tipografia_accesible = false
      state.vista_simplificada = false
      state.enlaces_subrayados = false
      state.cambio_tipografia = false
      document.documentElement.style.setProperty('--tipografia-tamanio', '16')
    },
  },
}
