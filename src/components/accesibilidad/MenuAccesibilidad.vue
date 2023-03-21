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
const estaMenuAccesibilidadAbierto = ref(false)

var control, tiempo
function sumarTiempo() {
  tiempo++
}
function controlarCronometro() {
  tiempo = 0
  if (estaMenuAccesibilidadAbierto.value) {
    control = setInterval(sumarTiempo, 1)
  } else {
    clearInterval(control)
  }
}

function mensaje(elemento) {
  return `tiempo: ${tiempo}\nw: ${elemento.offsetWidth}\nh: ${elemento.offsetHeight}`
}

/**
 *
 */
function alternarMenuAccesibilidadAbierto() {
  estaMenuAccesibilidadAbierto.value = !estaMenuAccesibilidadAbierto.value
  controlarCronometro()
}

/**
 *
 */
function ejecutarAccionOpcion(accion) {
  console.log(accion)
  estaMenuAccesibilidadAbierto.value = false
}

defineExpose({ alternarMenuAccesibilidadAbierto })

const menu = ref(null)

onMounted(() => {
  if (menu.value !== null) {
    // console.log(menu.value)
    new ResizeObserver(() => {
      console.log(mensaje(menu.value))
    }).observe(menu.value)
  }
})
</script>

<template>
  <div
    class="contenedor-a11y"
    :class="{ abierto: estaMenuAccesibilidadAbierto }"
    ref="menu"
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

<style scoped>
.contenedor-a11y {
  position: fixed;
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
  margin-right: 0;
}

.menu-a11y.opcion:hover,
.menu-a11y.opcion:focus {
  background: #dddddd;
}

.menu-a11y.opcion .icono-4 {
  padding: 0;
}

/* T R A N S I C I O N E S */
.contenedor-a11y {
  --a11y-transicion: 2000ms;
  --a11y-ancho: 200;
  --a11y-relacion-tiempo: calc(var(--a11y-transicion) / var(--a11y-ancho));
  bottom: 24px;
  right: 24px;
  transition-property: bottom, right;
  transition-duration: calc(var(--a11y-relacion-tiempo) * 32),
    calc(var(--a11y-relacion-tiempo) * 32);
  transition-timing-function: linear, linear;
  transition-delay: calc(var(--a11y-relacion-tiempo) * 128),
    calc(var(--a11y-relacion-tiempo) * 128);
}
.contenedor-a11y.abierto {
  bottom: 8px;
  right: 8px;
  transition-delay: calc(var(--a11y-relacion-tiempo) * 40),
    calc(var(--a11y-relacion-tiempo) * 40);
}

.contenedor-a11y > .menu-a11y {
  z-index: 5; /*  */
  max-height: 0px;
  width: 0px;
  margin-top: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  /** transition: width 2.7s ease-in, max-height 2s ease-in 0.1s; **/
  transition-property: width, max-height, margin-right, margin-bottom;
  transition-duration: var(--a11y-transicion), var(--a11y-transicion),
    calc(var(--a11y-relacion-tiempo) * 40),
    calc(var(--a11y-relacion-tiempo) * 40);
  transition-timing-function: linear, linear, linear, linear;
  transition-delay: 0s, 0s, calc(var(--a11y-relacion-tiempo) * 160),
    calc(var(--a11y-relacion-tiempo) * 160);
}

.contenedor-a11y.abierto > .menu-a11y {
  width: calc(var(--a11y-ancho) * 1px);
  max-height: 270px;
  margin-right: 0;
  margin-bottom: 0;
  transition-delay: 0s, 0s, 0s, 0s;
}

.contenedor-a11y > .boton-a11y {
  display: none; /*  */
  /* margin-top: 0 !important;
  margin-right: 24px !important;
  margin-bottom: 24px !important;
  margin-left: 0 !important; */
}

.contenedor-a11y.abierto > .boton-a11y {
  /* margin: -20px !important; */
  /* margin-bottom: -16px !important; */
  display: none;
}
</style>
