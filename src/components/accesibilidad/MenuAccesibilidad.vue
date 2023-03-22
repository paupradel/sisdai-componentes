<script setup>
import opciones from './opcionesDefault'
import { ref } from 'vue'

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const estaMenuAccesibilidadAbierto = ref(false)

/**
 * Cambia el estado (contrario al ejecutar el evento, abierto o cerrado) del Menú de
 * accesibilidad.
 */
function alternarMenuAccesibilidadAbierto() {
  estaMenuAccesibilidadAbierto.value = !estaMenuAccesibilidadAbierto.value
}

/**
 *
 */
function ejecutarAccionOpcion(accion) {
  console.log(accion)
  estaMenuAccesibilidadAbierto.value = false
}

defineExpose({ alternarMenuAccesibilidadAbierto })
</script>

<template>
  <div
    class="contenedor-a11y"
    :class="{ abierto: estaMenuAccesibilidadAbierto }"
  >
    <button
      class="boton-a11y"
      @click="alternarMenuAccesibilidadAbierto"
    >
      <span class="boton-a11y icono-accesibilidad icono-5" />
    </button>

    <menu class="menu-a11y">
      <h6 class="menu-a11y titulo">Herramientas de accesibilidad</h6>

      <button
        class="menu-a11y opcion"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-a11y-${idx}`"
        @click="ejecutarAccionOpcion(opcion.accion)"
      >
        <span
          class="icono-4"
          :class="opcion.icono"
        />
        {{ opcion.titulo }}
      </button>
    </menu>
  </div>
</template>

<style>
@import './accesibilidad.css';
@import './transiciones.css';
</style>
