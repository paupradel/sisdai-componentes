<template>
  <div class="theme-container">
    <nav-NavegacionGobMx></nav-NavegacionGobMx>

    <nav-NavegacionPrincipal></nav-NavegacionPrincipal>

    <nav-MenuLateralComposicionFija>
      <template v-slot:menu>
        <nav-MenuLateral :elementos="elementos"></nav-MenuLateral>
      </template>
      <template v-slot:vista>
        <div class="contenedor ancho-lectura m-y-5">
          <Content />
        </div>
      </template>
    </nav-MenuLateralComposicionFija>
  </div>
</template>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<script setup>
import { ref } from 'vue'

const elementos = {
  routerlinks: [
    {
      id: 'intro',
      titulo: 'Introducción',
      url: '/documentacion/',
      clase: 'menu-routerlink ',
      icono: '',
    },
    {
      id: 'seccion_2',
      titulo: 'NarrativaScroll',
      url: '/documentacion/narrativa_scroll',
      clase: 'menu-routerlink',
      icono: '',
    },
    {
      id: 'seccion_3',
      titulo: 'Accesibilidad',
      url: '/documentacion/accesibilidad',
      clase: 'menu-routerlink',
      icono: '',
    },
  ],
  links: [
    {
      id: 'github',
      titulo: 'Ir a Github',
      url: 'https://github.com/salsa-community/sisdai-componentes',
      clase: 'menu-github',
      icono: 'icono-social-github',
      target: '_blank',
    },
  ],
}
</script>
