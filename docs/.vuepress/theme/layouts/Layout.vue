<script setup>
import { computed } from 'vue'
import store from './../../store'

const clasesAccesibles = computed(() => ({
  'a11y-tipografia': store.state.accesibilidad.tipografia_accesible,
  'a11y-simplificada': store.state.accesibilidad.vista_simplificada,
  'a11y-hipervinculos': store.state.accesibilidad.enlaces_subrayados,
}))

function mutarAccesibilidad({ accion }) {
  store.commit(`accesibilidad/${accion}`)
}
</script>

<template>
  <div
    class="theme-container"
    :class="clasesAccesibles"
  >
    <SisdaiNavegacionGobMx />

    <nav-navegacion-principal />

    <main
      role="main"
      class="contenedor m-y-maximo"
    >
      <Content />
    </main>

    <SisdaiMenuAccesibilidad
      @alSeleccionarOpcion="mutarAccesibilidad"
      @restablecer="store.commit('accesibilidad/limpiarClasesAccesibles')"
    />
  </div>
</template>
