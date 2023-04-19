<script>
const propiedades = {
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
import { computed, ref, toRefs } from 'vue'

const props = defineProps(propiedades)
const { enlaces } = toRefs(props)

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
  max-width: 500px;
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
</style>
