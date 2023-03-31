<script setup>
import { computed, ref } from 'vue'

const botonFlotanteEstaAbierto = ref(true)

function alternarBotonFlotante() {
  botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value
}

const icono = computed(() => ({
  'icono-restar': botonFlotanteEstaAbierto.value,
  'icono-agregar': !botonFlotanteEstaAbierto.value,
}))
</script>

<template>
  <div>
    <button @click="alternarBotonFlotante">
      <span
        class="icono-3"
        :class="icono"
      />
    </button>
    <div>contenido slot</div>
  </div>
</template>
