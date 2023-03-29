<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const nuevaOpcion = {
  accion: 'alternarCursivaDestacada',
  claseCss: 'a11y-cursiva-destacada',
  icono: 'icono-estrella',
  titulo: 'Cursiva destacada',
}

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
    class="contenerdor-panttalla-simulada agregando-opcion"
    :class="clasesAccesibles"
  >
    <SisdaiMenuAccesibilidad
      :agregarOpciones="[nuevaOpcion]"
      @alSeleccionarOpcion="agregarClases"
      @restablecer="clasesAccesibles = []"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>

<style>
.contenerdor-panttalla-simulada.agregando-opcion
  .contenedor-accesibilidad.abierto
  .menu-accesibilidad {
  max-height: 320px;
}

.contenerdor-panttalla-simulada.agregando-opcion.a11y-cursiva-destacada i {
  background-color: tomato;
}
</style>
