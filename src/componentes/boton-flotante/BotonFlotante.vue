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
  <div
    class="contenedor-boton-flotante"
    :class="{ abierto: botonFlotanteEstaAbierto }"
  >
    <button
      class="boton-flotante-alternador borde-r-redondeado-20"
      :class="{
        'borde-l-redondeado-0': botonFlotanteEstaAbierto,
        'borde-l-redondeado-20': !botonFlotanteEstaAbierto,
      }"
      @click="alternarBotonFlotante"
    >
      <span
        class="icono icono-3"
        :class="icono"
      />
    </button>

    <div
      class="boton-flotante-contenido borde-l-redondeado-20"
      :class="{ 'borde-l': botonFlotanteEstaAbierto }"
    >
      <slot />
    </div>
  </div>
</template>

<style>
.contenedor-boton-flotante {
  position: fixed;
  z-index: 99;
  margin: 0;
  display: inline-flex;
  bottom: 24px;
  left: 24px;
}

.contenedor-boton-flotante .boton-flotante-alternador {
  background: black;
  border: none;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  /* display: inline-flex; */
  justify-content: center;
}

.contenedor-boton-flotante .boton-flotante-alternador .icono {
  padding: 0;
  color: #fff;
}

.contenedor-boton-flotante .boton-flotante-contenido {
  max-width: 0;
  height: 40px !important;
  padding: 0;
  overflow: hidden;
  color: #fff;
  background: black;
  border-color: #fff;
  display: inline-flex;
  align-items: center;
}

.contenedor-boton-flotante.abierto .boton-flotante-contenido {
  max-width: 200px;
}

.contenedor-boton-flotante.abierto .boton-flotante-contenido > * {
  height: 100%;
}
</style>
