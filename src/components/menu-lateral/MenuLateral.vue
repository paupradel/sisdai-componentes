<template>
  <menu class="menu-lateral-contenedor">
    <div
      class="menu-mov"
      @click="abrirMenu = !abrirMenu"
      :class="{ abierto: abrirMenu }"
    >
      <button class="boton-icono boton-menu">
        <span
          v-if="abrirMenu"
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
      :class="{ abierto: abrirMenu }"
    >
      <div class="menu-max-height">
        <slot name="contenido-menu-lateral">
          <router-link to="#routerlink"> router link prueba </router-link>
          <a href="#anchore"> anchore link prueba </a>
          <a
            href="##"
            rel="noopener"
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
const abrirMenu = ref(false)
</script>
