<script setup>
import { ref } from 'vue'
import MenuAccesibilidad from './../../../../src/components/accesibilidad/MenuAccesibilidad.vue'

const menuAccesibilidad = ref(null)
</script>

<template>
  <div class="contenerdor-panttalla-simulada">
    <div class="elementos-ejemplo">
      <button @click="menuAccesibilidad.alternarMenuAccesibilidadAbierto()">
        abrir/cerrar
      </button>
    </div>

    <MenuAccesibilidad ref="menuAccesibilidad" />
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
