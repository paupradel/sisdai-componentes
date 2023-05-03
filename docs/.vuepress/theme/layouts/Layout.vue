<script setup>
import store from './../../store'

window.location.href = './documentacion'
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

    <SisdaiPiePaginaConacyt />

    <SisdaiPiePaginaGobMx />

    <SisdaiMenuAccesibilidad :objetoStore="store" />
  </div>
</template>
