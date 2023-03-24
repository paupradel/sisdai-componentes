<script setup>
import { ref } from 'vue'
import MenuAccesibilidad from './../../../../src/components/accesibilidad/MenuAccesibilidad'

const menuAccesibilidad = ref(null)
</script>

<template>
  <div class="contenerdor-panttalla-simulada">
    <div class="elementos-ejemplo">
      <h1>Texto para ver el cambio de fuente</h1>

      <ul>
        <li>
          <p>Párrafo</p>
        </li>
        <li>
          <b>Negritas</b>
        </li>
        <li>
          <i>Cursiva</i>
        </li>
      </ul>

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
  /* height: 350px; */
  width: 100%;
  overflow-y: hidden;
}

.contenerdor-panttalla-simulada .contenedor-a11y {
  position: absolute;
}
</style>
