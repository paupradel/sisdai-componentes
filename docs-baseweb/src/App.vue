<template>
  <div :class="a11yClass">
    <NavegacionGobMx />
    <NavegacionPrincipal />
    <MenuAccesibilidad /> 
    <router-view/>
    <PiePaginaConacyt />
    <PiePaginaGobMx />
  </div>
</template>

<script>
import NavegacionGobMx from '@/components/navegacion/NavegacionGobMx.vue'
import NavegacionPrincipal from '@/components/navegacion/NavegacionPrincipal.vue'
import PiePaginaGobMx from './components/piepagina/PiePaginaGobMx.vue'
import PiePaginaConacyt from './components/piepagina/PiePaginaConacyt.vue'
import MenuAccesibilidad from './components/accesibilidad/MenuAccesibilidad.vue'

export default {
  components: {
    NavegacionGobMx,
    NavegacionPrincipal,
    PiePaginaGobMx,
    PiePaginaConacyt,
    MenuAccesibilidad
  },
  computed: {
    a11yClass() {
      return {
        'a11y-tipografia': this.$store.getters.tieneTipografiaAccesible,
        'a11y-simplificada': this.$store.getters.tieneVistaSimplificada,
        'a11y-hipervinculos': this.$store.getters.tieneEnlacesSubrayados,
      };
    }
  }
}
</script>

<style lang="scss">
  @import 'node_modules/dadsig-css/src/eni.scss';
</style>
