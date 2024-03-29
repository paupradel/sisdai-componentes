<script>
const propiedades = {
  /**
   * Lista de enlaces que se mostrarán en el Botón flotante abierto, cada opción debe ser un
   * objeto con los siguientes atributos:
   * - clasesCss {`String`}: Nombre de la clase css de la opción.
   * - contenido: {`String`}: Contenido en texto que se mostrará en la interfaz.
   * - enlace {`String`}: Dirección url a la que dirigirá el botón.
   * - icono {`String`}: Visible al costado izquierdo del contenido.
   */
  enlaces: {
    type: Array,
    required: true,
  },
}
</script>

<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps(propiedades)
const { enlaces } = toRefs(props)

/**
 * Indica si el Botón flotante está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const botonFlotanteEstaAbierto = ref(true)

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Botón flotante.
 */
function alternarEstado() {
  botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value
}

defineExpose({ alternarEstado })
</script>

<template>
  <div
    class="contenedor-boton-flotante"
    :class="{ abierto: botonFlotanteEstaAbierto }"
  >
    <button
      :class="`boton-flotante-alternador borde-r-redondeado-20 borde-l-redondeado-${
        botonFlotanteEstaAbierto ? '' : '2'
      }0`"
      @click="alternarEstado"
    >
      <span
        :class="`icono ${
          botonFlotanteEstaAbierto ? 'icono-restar' : 'icono-agregar'
        } icono-3`"
      />
    </button>

    <div
      class="boton-flotante-contenido borde-l-redondeado-20"
      :class="{ 'borde-l': botonFlotanteEstaAbierto }"
    >
      <a
        v-for="({ enlace, clasesCss, icono, contenido }, idx) in enlaces"
        :key="`boton-flotante-enlace-${idx}`"
        :href="enlace"
        :class="`enlace p-x-1 borde-redondeado-0 ${
          clasesCss === undefined ? '' : clasesCss
        }`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          :class="`icono ${
            icono === undefined ? 'icono-enlace-externo' : icono
          }`"
        />
        {{ contenido === undefined ? 'Enlace externo' : contenido }}
      </a>
    </div>
  </div>
</template>
