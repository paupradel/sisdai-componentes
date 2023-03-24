<template>
  <div class="theme-container">
    <nav-NavegacionGobMx></nav-NavegacionGobMx>

    <nav-NavegacionPrincipal></nav-NavegacionPrincipal>

    <div class="flex">
      <div class="columna-4 columna-1-mov menu-fondo">
        <MenuLateral>
          <template slot="contenido-menu-lateral">
            <ul>
              <li>
                <router-link to="/documentacion/colapsable-navegacion">
                  Colapsable navegación</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/menu-lateral">
                  Menú lateral</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/narrativa_scroll">
                  NarrativaScroll</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/accesibilidad">
                  Accesibilidad
                </router-link>
              </li>
            </ul>
            <a
              href="https://github.com/salsa-community/sisdai-componentes"
              target="_blank"
              rel="noopener"
              style="display: grid"
            >
              <span class="icono-social-github titulo-eni"></span>
              <span> ir a github</span>
            </a>
          </template>
        </MenuLateral>
      </div>
      <div class="columna-12 columna-7-mov">
        <Content />
      </div>
    </div>
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
