import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const navegacion = {
  namespaced: false,
  state: {
    navegacion_gobierno_abierta: false,
    navegacion_principal_abierta: false,
  },
  getters: {
    estaNavegacionGobiernoAbierta(state) {
      return state.navegacion_gobierno_abierta;
    },
    estaNavegacionPrincipalAbierta(state) {
      return state.navegacion_principal_abierta;
    },
  },
  mutations: {
    abrirNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = true;
    },
    cerrarNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = false;
    },
    abrirNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = true;
    },
    cerrarNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = false;
    },
  }
}
const accesibilidad = {
  namespaced: false,
  state: {
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
  },
  getters: {
    tieneTipografiaAccesible(state) {
      return state.tipografia_accesible;
    },
    tieneVistaSimplificada(state) {
      return state.vista_simplificada;
    },
    tieneEnlacesSubrayados(state) {
      return state.enlaces_subrayados;
    }
  },
  mutations: {
    alternarTipografiaAccesible(state) {
      state.tipografia_accesible = !state.tipografia_accesible;
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada;
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados;
    },
    limpiarClasesAccesibles(state) {
      state.tipografia_accesible = false;
      state.vista_simplificada = false;
      state.enlaces_subrayados = false;
    }
  }
}

export default new Vuex.Store({
  modules: {
    navegacion,
    accesibilidad
  }
})
