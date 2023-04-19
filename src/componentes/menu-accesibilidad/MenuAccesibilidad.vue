<script>
const propiedades = {
  /**
   * Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  agregarOpciones: {
    type: Array,
    default: () => [],
  },
}

const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',

  /**
   * Se ejecuta cuanso se ha dado click en el botón "Restablecer".
   */
  restablecer: 'restablecer',
}
</script>

<script setup>
import { computed, ref, toRefs } from 'vue'
import opcionesDefault from './opcionesDefault'

const props = defineProps(propiedades)
const emits = defineEmits(Object.values(eventos))
const { agregarOpciones } = toRefs(props)

/**
 * Opciones que se mostrarán en el menú de accesibilidad.
 */
const opciones = computed(() => [...opcionesDefault, ...agregarOpciones.value])

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const menuAccesibilidadEstaAbierto = ref(false)

/**
 * Desencadena el emit 'alSeleccionarOpcion' al mismo tiempo que cierra el menú.
 * @param {Object} Opcion seleccionada.
 */
function seleccionarOpcion(opcion) {
  emits(eventos.alSeleccionarOpcion, opcion)
  menuAccesibilidadEstaAbierto.value = false
}

/**
 * Desencadena el emit 'restablecer' al mismo tiempo que cierra el menú.
 */
function restablecer() {
  emits(eventos.restablecer)
  menuAccesibilidadEstaAbierto.value = false
}

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarEstado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

defineExpose({ alternarEstado })

/**
 * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
 * opción de restablecer y el titulo del menú.
 */
const alturaMenuAbierto = computed(
  () => `${(opciones.value.length + 1) * 50 + 60}px`
)
</script>

<template>
  <div
    class="contenedor-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
  >
    <button
      class="icono-boton-accesibilidad"
      @click="alternarEstado"
    >
      <span class="icono-accesibilidad icono-5" />
    </button>

    <menu class="menu-accesibilidad">
      <h6 class="titulo">Herramientas de accesibilidad</h6>

      <button
        class="opcion-accesibilidad"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
        @click="seleccionarOpcion(opcion)"
      >
        <span
          class="icono-4"
          :class="opcion.icono"
        />
        {{ opcion.titulo }}
      </button>

      <button
        class="opcion-accesibilidad"
        @click="restablecer"
      >
        <span class="icono-4 icono-restablecer" />
        Restablecer
      </button>
    </menu>
  </div>
</template>

<style>
.contenedor-accesibilidad.abierto .menu-accesibilidad {
  max-height: v-bind('alturaMenuAbierto') !important;
}
</style>
