<template>
  <menu id="menu-accesibilidad">
    <button class="boton-accesibilidad" @click="alternarTipografiaAccesible">Tipografia accesible</button>
    <button class="boton-accesibilidad" @click="alternarVistaSimplificada">Vista simplificada</button>
    <button class="boton-accesibilidad" @click="alternarEnlacesSubrayados">Enlaces subrayados</button>
    <button class="boton-accesibilidad" @click="limpiarClasesAccesibles">Limpiar clases accesibles</button>
  </menu>
</template>

<script>
  export default {
    name: 'MenuAccesibilidad',
    methods: {
      alternarTipografiaAccesible() {
        this.$store.commit('alternarTipografiaAccesible');
      },
      alternarVistaSimplificada() {
        this.$store.commit('alternarVistaSimplificada');
      },
      alternarEnlacesSubrayados() {
        this.$store.commit('alternarEnlacesSubrayados');
      },
      limpiarClasesAccesibles() {
        this.$store.commit('limpiarClasesAccesibles');
      }
    }
  };
</script>

<style lang="scss" scoped>
  #menu-accesibilidad {
    background: #eee;
    border-radius: map-get($espaciado,'1');
    margin: 0;
    padding: map-get($espaciado,'1');
    position: fixed;
    right: map-get($espaciado,'1');
    bottom: map-get($espaciado,'1');
    z-index: 100;
  }
  .boton-accesibilidad {
    background: #0000;
    border: none;
    border-radius: map-get($espaciado,'1');
    text-align: left;
    display: block;
    width: 100%;
    font-size: .75rem;
    padding: map-get($espaciado,'2');
    &:hover,
    &:focus {
      background: #0001;
    }
  }
</style>
