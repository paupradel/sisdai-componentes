<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const clasesAccesibles = ref([])

function eliminarClase(claseCss) {
  clasesAccesibles.value = clasesAccesibles.value.filter(
    clase => clase !== claseCss
  )
}

function agregarClases({ accion, claseCss }) {
  if (!clasesAccesibles.value.includes(claseCss)) {
    clasesAccesibles.value.push(claseCss)
  } else {
    eliminarClase(claseCss)
  }
}
</script>

<template>
  <div
    class="contenerdor-panttalla-simulada"
    :class="clasesAccesibles"
  >
    <SisdaiMenuAccesibilidad
      @alSeleccionarOpcion="agregarClases"
      @restablecer="clasesAccesibles = []"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>
