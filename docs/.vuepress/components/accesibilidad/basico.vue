<script setup>
import MenuAccesibilidad from './../../../../src/components/accesibilidad/MenuAccesibilidad.vue'
</script>

<template>
  <div class="contenerdor-panttalla-simulada">
    <MenuAccesibilidad />
  </div>
</template>

<style scoped>
.contenerdor-panttalla-simulada {
  position: relative;
  border-right: solid gray 10px;
  border-bottom: solid #000 1px;
  height: 350px;
  width: 400px;
  overflow-y: hidden;
}

.contenerdor-panttalla-simulada .contenedor-a11y {
  position: absolute;
}
</style>
