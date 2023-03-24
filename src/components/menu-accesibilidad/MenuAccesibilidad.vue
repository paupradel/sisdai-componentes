<script setup>
import opcionesDefault from './opcionesDefault'
import { ref, toRefs } from 'vue'

const props = defineProps({
  opciones: {
    type: Array,
    default: () => opcionesDefault,
  },
})

const { opciones } = toRefs(props)

/**
 *
 */
const emits = defineEmits(['alSeleccionarOpcion'])

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const estaMenuAccesibilidadAbierto = ref(false)

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarMenuAccesibilidadAbierto() {
  estaMenuAccesibilidadAbierto.value = !estaMenuAccesibilidadAbierto.value
}

/**
 *
 */
function ejecutarAccionOpcion(accion) {
  emits('alSeleccionarOpcion', accion)
  estaMenuAccesibilidadAbierto.value = false
}

defineExpose({ alternarMenuAccesibilidadAbierto })
</script>

<template>
  <div
    class="contenedor-accesibilidad"
    :class="{ abierto: estaMenuAccesibilidadAbierto }"
  >
    <button
      class="boton-accesibilidad"
      @click="alternarMenuAccesibilidadAbierto"
    >
      <span class="icono-accesibilidad icono-5" />
    </button>

    <menu class="menu-accesibilidad">
      <h6 class="titulo">Herramientas de accesibilidad</h6>

      <button
        class="opcion-accesibilidad"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
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
