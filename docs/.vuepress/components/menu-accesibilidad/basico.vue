<script setup>
import { ref } from 'vue'
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'

const clasesAccesibles = ref([])

function agregarClases({ accion, claseCss }) {
  if (accion === 'limpiarClasesAccesibles') {
    clasesAccesibles.value = []
    return
  }

  const existeClase = clasesAccesibles.value.includes(claseCss)
  if (existeClase) {
    clasesAccesibles.value = clasesAccesibles.value.filter(
      clase => clase !== claseCss
    )
    return
  }

  clasesAccesibles.value.push(claseCss)
}
</script>

<template>
  <div
    class="contenerdor-panttalla-simulada"
    :class="clasesAccesibles"
  >
    <SisdaiMenuAccesibilidad @alSeleccionarOpcion="agregarClases" />

    <ElementosParaVerAccesibilidad />
  </div>
</template>
