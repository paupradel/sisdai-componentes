<script setup>
import { ref } from 'vue'

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

/**
 *
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
  margin: 0 0 -16px !important;
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
  --a11y-transicion: 300ms;
  --a11y-ancho: 200;
  --a11y-relacion-tiempo: calc(var(--a11y-transicion) / var(--a11y-ancho));
  bottom: 24px;
  right: 24px;
  transition: /* cambia 16px */ bottom
      /* dura lo que al contenedor le tome crecer 32px (16*2) */
      calc(var(--a11y-relacion-tiempo) * 32) linear
      /* al cerrar: tiene un retraso del tiempo que al contenedor le tome reducir a 64px (32*2) */
      calc(var(--a11y-relacion-tiempo) * calc(var(--a11y-ancho) - 64)),
    /* cambia 16px */ right
      /* dura lo que al contenedor le tome crecer 32px (16*2) */
      calc(var(--a11y-relacion-tiempo) * 32) linear
      /* al cerrar: tiene un retraso del tiempo que al contenedor le tome reducir a 64px (32*2) */
      calc(var(--a11y-relacion-tiempo) * calc(var(--a11y-ancho) - 64));
}

.contenedor-a11y.abierto {
  bottom: 8px;
  right: 8px;
  transition-delay: /* al abrir: inicia sin retraso */ 0s,
    /* al abrir: inicia sin retraso */ 0s;
}

.contenedor-a11y > .menu-a11y {
  max-height: 0px;
  width: 0px;
  margin: 0 16px 16px 24px;
  transition: /* cambia 200px */ width
      /* dura el tiempo completo de la transición */ var(--a11y-transicion)
      linear /* al cerrar: inicia sin retraso */ 0s,
    /* cambia el alto del contenido, sin exceder 270px */ max-height
      /* dura el tiempo completo de la transición */ var(--a11y-transicion)
      linear /* al cerrar: inicia sin retraso */ 0s,
    /* cambia 16px */ margin-right
      /* dura lo que al contenedor le tome crecer 32px (16*2) */
      calc(var(--a11y-relacion-tiempo) * 32) linear
      /* al cerrar: tiene un retraso del tiempo que al contenedor le tome reducir a 32px */
      calc(var(--a11y-relacion-tiempo) * calc(var(--a11y-ancho) - 32)),
    /* cambia 16px */ margin-bottom
      /* dura lo que al contenedor le tome crecer 32px (16*2) */
      calc(var(--a11y-relacion-tiempo) * 32) linear
      /* al cerrar: tiene un retraso del tiempo que al contenedor le tome reducir a 32px */
      calc(var(--a11y-relacion-tiempo) * calc(var(--a11y-ancho) - 32));
}

.contenedor-a11y.abierto > .menu-a11y {
  width: calc(var(--a11y-ancho) * 1px);
  max-height: 270px;
  margin-right: 0;
  margin-bottom: 0;
  transition-delay: 0s, 0s,
    /* al abrir: tiene un retraso del tiempo que al contenedor le tome crecer a 32px */
      calc(var(--a11y-relacion-tiempo) * 32),
    /* al abrir: tiene un retraso del tiempo que al contenedor le tome crecer a 32px */
      calc(var(--a11y-relacion-tiempo) * 32);
}
</style>
