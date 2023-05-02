<template>
  <menu class="menu-lateral-contenedor">
    <div
      class="menu-mov"
      @click="menu_abierto = !menu_abierto"
      :class="{ abierto: menu_abierto }"
    >
      <button class="boton-icono boton-menu">
        <span
          v-if="menu_abierto"
          class="icono-angulo-doble-izquierda"
        ></span>
        <span
          v-else
          class="icono-angulo-doble-derecha"
        ></span>
      </button>
    </div>
    <div
      class="menu-colapsable"
      :class="{ abierto: menu_abierto }"
    >
      <div class="menu-max-height">
        <slot name="contenido-menu-lateral">
          <router-link
            to="#routerlink"
            exact
          >
            router link prueba
          </router-link>
          <a href="#anchore"> anchore link prueba </a>
          <a
            href="https://github.com/salsa-community/sisdai-componentes"
            rel="noopener"
            target="_blank"
          >
            <span class="icono-social-github"></span>
            ejemplo github
          </a>
        </slot>
      </div>
    </div>
  </menu>
</template>

<script setup>
import { ref } from 'vue'
const menu_abierto = ref(false)
</script>
