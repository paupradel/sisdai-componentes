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
  <div class="boton-flotante">
    <button
      class="boton-flotante-alternar"
      @click="alternarBotonFlotante"
    >
      <span
        class="icono icono-3"
        :class="icono"
      />
    </button>
    <div class="boton-flotante-contenido">
      <slot />
    </div>
  </div>
</template>

<style>
.boton-flotante {
  position: fixed;
  z-index: 3;
  margin: 0;
}

.boton-flotante .boton-flotante-alternar {
  background: transparent;
  border-radius: 50%;
  border: none;
  display: block;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0 0 -16px !important;
}

.boton-flotante .boton-flotante-alternar .icono {
  background-color: #fff;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #1d74e6;
}

.boton-flotante .boton-flotante-contenido {
  width: 0;
  padding: 0;
  overflow: hidden;
}
</style>
