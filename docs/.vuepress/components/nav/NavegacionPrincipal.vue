<template>
  <nav class="navegacion navegacion-conacyt navegacion-pegada">
    <div class="nav-contenedor-identidad">
      <a
        href="#"
        class="nav-hiperviculo-logo"
      >
        <img
          class="nav-logo invertir"
          width="130"
          height="38"
          src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg"
          alt="Conacyt."
        />
      </a>
      <button
        @click="toggleMenu"
        class="nav-boton-menu"
        :class="{ abierto: showMenu }"
      >
        <span class="nav-icono-menu"></span>
      </button>
      <div class="nav-informacion">
        Sección: <b>{{ $route.name }}</b>
      </div>
    </div>
    <div
      class="nav-menu-contedor"
      :class="{ abierto: showMenu, 'submenu-abierto': showSubmenu1 }"
    >
      <div class="nav-menu-principal">
        <ul class="nav-menu">
          <li>
            <RouterLink
              class="nav-hipervinculo"
              to="/"
              exact
              >Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="nav-hipervinculo"
              to="/documentacion/"
              >Documentación</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="nav-hipervinculo"
              to="/ejemplos/"
              >Ejemplos</RouterLink
            >
          </li>
          <li>
            <a
              class="nav-hipervinculo"
              href="https://github.com/salsa-community/"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(null)
const showSubmenu1 = ref(null)

showMenu.value, (showSubmenu1.value = false)

function toggleMenu() {
  showSubmenu1.value = false
  showMenu.value = !showMenu.value
}
</script>
