<template>
  <div class="contenerdor-panttalla-simulada">
    <InfoDeDespliegue
      :entornoProyecto="entornoProyecto"
      :versionProyecto="versionProyecto"
      :actualizacionProyecto="actualizacionProyecto"
    />

    <ElementosParaVerInfoDeDespliegue />
  </div>
</template>

<script setup>
import ElementosParaVerInfoDeDespliegue from './elementos-para-ver-info-de-despliegue.vue'
import { computed } from 'vue'

const version = require('../../../../package.json').version
const now = new Date()

const entornoProyecto = computed(() => {
  return 'development'
})

const versionProyecto = computed(() => {
  return version
})

const actualizacionProyecto = computed(() => {
  return now.toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
  })
})
</script>
