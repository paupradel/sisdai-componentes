<script setup>
import store from './../../store'
</script>

<template>
  <div
    class="theme-container"
    :class="store.getters['accesibilidad/clasesAccesibles']"
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
      @alSeleccionarOpcion="
        ({ accion }) => store.commit(`accesibilidad/${accion}`)
      "
      @restablecer="store.commit('accesibilidad/limpiarClasesAccesibles')"
    />
  </div>
</template>
