<script>
const propiedades = {
  /**
   * Lista de opciones que se tendrá el Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  opciones: {
    type: Array,
    default: () => opcionesDefault,
  },
}

const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {String} accion Nombre de la acción seleccionada al dar click en la opción.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',
}
</script>

<script setup>
import opcionesDefault from './opcionesDefault'
import { ref, toRefs } from 'vue'

const props = defineProps(propiedades)
const { opciones } = toRefs(props)
const emits = defineEmits(Object.values(eventos))

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const menuAccesibilidadEstaAbierto = ref(false)

/**
 * Desencadena el emit 'alSeleccionarOpcion' al mismo tiempo que cierra el menú.
 * @param {String} Acción que ejecuta la opción.
 */
function ejecutarAccionOpcion(accion) {
  emits(eventos.alSeleccionarOpcion, accion)
  menuAccesibilidadEstaAbierto.value = false
}

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarMenuAccesibilidadAbierto() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

defineExpose({ alternarMenuAccesibilidadAbierto })
</script>

<template>
  <div
    class="contenedor-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
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
        @click="ejecutarAccionOpcion(opcion)"
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
