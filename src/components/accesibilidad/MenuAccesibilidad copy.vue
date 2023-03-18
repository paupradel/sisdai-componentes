<template>
  <div
    class="contenedor-accesibilidad"
    :class="{ show: true }"
  >
    <button
      aria-labelledby="a11y-titulo"
      data-target="menu-accesibilidad"
      class="icono-a11y"
      :class="{ abierto: esteMenuAccesibilidadAbierto }"
      @click="alternarMenuAccesibilidad"
    >
      <span class="icono-accesibilidad icono-5"></span>
    </button>
    <menu
      id="menu-accesibilidad"
      :class="{ abierto: esteMenuAccesibilidadAbierto }"
      @click="alternarMenuAccesibilidad"
    >
      <p class="titulo-accesibilidad">Herramientas de accesibilidad</p>
      <button
        class="boton-accesibilidad"
        @click="alternarTipografiaAccesible"
      >
        <span class="icono-cambio-tipografia icono-4"></span>
        <span>Tipografia accesible</span>
      </button>
      <button
        class="boton-accesibilidad"
        @click="alternarVistaSimplificada"
      >
        <span class="icono-vista-simplificada icono-4"></span>
        <span>Vista simplificada</span>
      </button>
      <button
        class="boton-accesibilidad"
        @click="alternarEnlacesSubrayados"
      >
        <span class="icono-enlace-subrayado icono-4"></span>
        <span>Enlaces subrayados</span>
      </button>
      <button
        class="boton-accesibilidad"
        @click="limpiarClasesAccesibles"
      >
        <span class="icono-restablecer icono-4"></span>
        <span>Restablecer</span>
      </button>
    </menu>
  </div>
</template>

<script>
export default {
  name: 'MenuAccesibilidad',
  computed: {
    esteMenuAccesibilidadAbierto() {
      return this.$store.getters.esteMenuAccesibilidadAbierto
    },
  },
  methods: {
    alternarMenuAccesibilidad() {
      this.$store.commit('alternarMenuAccesibilidad')
    },
    alternarTipografiaAccesible() {
      this.$store.commit('alternarTipografiaAccesible')
    },
    alternarVistaSimplificada() {
      this.$store.commit('alternarVistaSimplificada')
    },
    alternarEnlacesSubrayados() {
      this.$store.commit('alternarEnlacesSubrayados')
    },
    limpiarClasesAccesibles() {
      this.$store.commit('limpiarClasesAccesibles')
    },
  },
}
</script>

<style lang="scss" scoped>
.a11y-simplificada
  button:not(.hipervinculo-gobmx):not(.hipervinculo-conacyt):not(
    .nav-boton
  ):not(.nav-boton-icon):not(.nav-boton-menu):not(.nav-boton-submenu):not(
    .nav-boton-regresar
  ) {
  color: var(--tipografia-color);
}
.a11y-simplificada
  button:focus:not(.hipervinculo-gobmx):not(.hipervinculo-conacyt):not(
    .nav-boton
  ):not(.nav-boton-icon):not(.nav-boton-menu):not(.nav-boton-submenu):not(
    .nav-boton-regresar
  ) {
  color: var(--tipografia-color);
  box-shadow: 0 0 0 2px transparent;
}
.a11y-simplificada
  button:hover:not(.hipervinculo-gobmx):not(.hipervinculo-conacyt):not(
    .nav-boton
  ):not(.nav-boton-icon):not(.nav-boton-menu):not(.nav-boton-submenu):not(
    .nav-boton-regresar
  ) {
  color: var(--tipografia-color);
  box-shadow: 0 0 0 2px transparent;
}
.contenedor-accesibilidad {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
  margin: 0;
  display: none;
  &.show {
    display: block;
  }
  .icono-a11y {
    background: transparent;
    border-radius: 50%;
    border: none;
    display: block;
    height: 40px;
    width: 40px;
    padding: 0;
    margin: 24px !important;
    @include mediaquery('mov') {
      margin: 16px;
    }
    &.abierto {
      margin: -20px !important;
    }
    &:hover,
    &:focus {
      box-shadow: 0 0 0 5px rgba(29, 116, 230, 0.25);
    }
    .icono-accesibilidad {
      background-color: #fff;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: #1d74e6;
    }
  }
  #menu-accesibilidad {
    background: #f6f6f6;
    box-shadow: 1px 1px 2px 0 var(--sombra);
    margin: 0;
    padding: 0;
    overflow: hidden;
    max-height: 0;
    width: 0;
    transition: width 0.27s ease-in, max-height 0.2s ease-in 0.1s;
    &.abierto {
      padding: 8px 0;
      width: 200px;
      max-height: 270px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    .titulo-accesibilidad {
      text-align: left;
      font-size: 1rem;
      font-weight: 600;
      padding: 8px 16px;
      margin: 0;
    }
    .boton-accesibilidad {
      background: transparent;
      border: none;
      display: flex;
      gap: 8px;
      width: 100%;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: left;
      padding: 8px 16px;
      &:hover,
      &:focus {
        background: #dddddd;
      }
      .icono-4 {
        padding: 0;
      }
    }
  }
}
</style>
