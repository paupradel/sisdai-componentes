<script setup>
import { onMounted, ref } from 'vue'

/**
 *
 */
const opciones = [
  {
    titulo: 'Tipografia accesible',
    icono: 'icono-cambio-tipografia',
    accion: 'alternarTipografiaAccesible',
  },
  {
    titulo: 'Vista simplificada',
    icono: 'icono-vista-simplificada',
    accion: 'alternarVistaSimplificada',
  },
  {
    titulo: 'Enlaces subrayados',
    icono: 'icono-enlace-subrayado',
    accion: 'alternarEnlacesSubrayados',
  },
  {
    titulo: 'Restablecer',
    icono: 'icono-restablecer',
    accion: 'limpiarClasesAccesibles',
  },
]

/**
 *
 */
const esteMenuAccesibilidadAbierto = ref(true)

/**
 *
 */
function alternarMenuAccesibilidad() {
  esteMenuAccesibilidadAbierto.value = !esteMenuAccesibilidadAbierto.value
}

/**
 *
 */
function ejecutarAccionOpcion(accion) {
  console.log(accion)
  esteMenuAccesibilidadAbierto.value = false
}

const menu = ref(null)

onMounted(() => {
  if (menu.value !== null) {
    new ResizeObserver(() => {
      console.log(menu.value.offsetWidth, menu.value.offsetHeight)
    }).observe(menu.value)
  }
})
</script>

<template>
  <div
    class="contenedor-a11y"
    :class="{ abierto: esteMenuAccesibilidadAbierto }"
  >
    <button
      class="boton-a11y"
      @click="alternarMenuAccesibilidad"
    >
      <span class="boton-a11y icono-accesibilidad icono-5" />
    </button>
    <menu
      class="menu-a11y"
      ref="menu"
    >
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

<style scoped>
.contenedor-a11y {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
  margin: 0;
}

.contenedor-a11y > .boton-a11y {
  background: transparent;
  border-radius: 50%;
  border: none;
  display: block;
  height: 40px;
  width: 40px;
  padding: 0;
}

.contenedor-a11y > .boton-a11y:hover,
.contenedor-a11y > .boton-a11y:focus {
  box-shadow: 0 0 0 5px rgba(29, 116, 230, 0.25);
}

.boton-a11y.icono-accesibilidad {
  background-color: #fff;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #1d74e6;
  padding-left: 0;
}

.contenedor-a11y > .menu-a11y {
  background: #f6f6f6;
  box-shadow: 1px 1px 2px 0 var(--sombra);
  padding: 0;
  overflow: hidden;
}

.menu-a11y.titulo {
  text-align: left;
  font-weight: 600;
  padding: 8px 16px;
  margin: 0;
}

.menu-a11y.opcion {
  background: transparent;
  border: none;
  display: flex;
  gap: 8px;
  width: 100%;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: left;
  padding: 8px 16px;
}

.menu-a11y.opcion:hover,
.menu-a11y.opcion:focus {
  background: #dddddd;
}

.menu-a11y.opcion .icono-4 {
  padding: 0;
}

/* T R A N S I C I O N E S */

.contenedor-a11y > .boton-a11y {
  margin-top: 0 !important;
  margin-right: 24px !important;
  margin-bottom: 24px !important;
  margin-left: 0 !important;
}

.contenedor-a11y > .menu-a11y {
  margin-top: 24px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 24px;
  max-height: 0;
  width: 0;
  /* transition: width 2.7s ease-in, max-height 2s ease-in 0.1s; */
  transition-property: width, max-height;
  transition-duration: 2s, 2s;
  transition-timing-function: ease-in, ease-in;
  transition-delay: 0s, 0s;
}

.contenedor-a11y.abierto > .boton-a11y {
  /* margin: -20px !important; */

  /* margin-bottom: -40px !important; */
}

.contenedor-a11y.abierto > .menu-a11y {
  /* padding: 8px 0; */
  width: 200px;
  max-height: 270px;
  /* margin-right: 8px; */
  /* margin-bottom: 8px; */
  margin-right: 0;
  margin-bottom: 0;
  transition-delay: 0s, 0s;
}
</style>
