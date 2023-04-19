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
    default: () => [
      {
        contenido: 'Enlace externo',
      },
    ],
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
            icono === undefined ? 'icono-flecha-arriba-derecha' : icono
          }`"
        />
        {{ contenido }}
      </a>
    </div>
  </div>
</template>

<style>
.contenedor-boton-flotante {
  position: fixed;
  z-index: 3;
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
  justify-content: center;
}

.contenedor-boton-flotante .boton-flotante-alternador .icono {
  padding: 0;
  color: #fff;
}

.contenedor-boton-flotante .boton-flotante-contenido {
  height: 40px !important;
  padding: 0;
  overflow: hidden;
  color: #fff;
  background: black;
  border-color: #fff;
  display: inline-flex;
  align-items: center;
}

.contenedor-boton-flotante .boton-flotante-contenido a.enlace {
  height: 100%;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex !important;
  align-items: center;
}

.contenedor-boton-flotante .boton-flotante-contenido a.enlace:hover,
.contenedor-boton-flotante .boton-flotante-contenido a.enlace:focus {
  color: #fff;
}

.contenedor-boton-flotante .boton-flotante-contenido a.enlace .icono {
  padding: 0 8px 0 0;
}

@keyframes animacionResaltada {
  0% {
    opacity: 0.25;
    top: 2px;
  }
  50% {
    opacity: 1;
    top: -2px;
  }
  100% {
    opacity: 0.25;
    top: 2px;
  }
}

/* T R A N S I C I O N E S */
.contenedor-boton-flotante .boton-flotante-alternador {
  transition: border-radius 0.27s linear 0.6s !important;
}

.contenedor-boton-flotante.abierto .boton-flotante-alternador {
  transition-delay: 0s !important;
}

.contenedor-boton-flotante .boton-flotante-contenido {
  max-width: 0;
  transition: max-width 0.6s linear 0s !important;
}

.contenedor-boton-flotante.abierto .boton-flotante-contenido {
  max-width: 500px;
  transition-delay: 0.27s !important;
}
</style>
