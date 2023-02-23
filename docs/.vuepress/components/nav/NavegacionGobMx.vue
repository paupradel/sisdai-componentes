<template>
  <nav class="navegacion navegacion-gobmx">
    <div class="nav-contenedor-identidad">
      <a
        href="https://www.gob.mx/"
        class="nav-hiperviculo-logo"
        target="_blank"
        rel="noopener"
      >
        <img
          width="128"
          height="38"
          class="nav-logo"
          src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
          alt="Gobierno de México."
        />
      </a>
      <button
        @click="toggleGob"
        class="nav-boton-menu"
        :class="{ abierto: true }"
      >
        <span class="nav-icono-menu"></span>
      </button>
    </div>
    <div
      class="nav-menu-contedor"
      :class="{ abierto: true }"
    >
      <div class="nav-menu-principal">
        <ul class="nav-menu">
          <li>
            <a
              href="https://mivacuna.salud.gob.mx/index.php"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Registro para vacunación</a
            >
          </li>
          <li>
            <a
              href="https://coronavirus.gob.mx/"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Información sobre COVID-19</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/tramites"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Trámites</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/gobierno"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Gobierno</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/busqueda"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              ><span class="icono-buscar"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showGob = ref(null)
const showMenu = ref(null)
const showSubmenu1 = ref(null)

showGob.value, showMenu.value, (showSubmenu1.value = false)

function toggleGob() {
  showMenu.value = false
  showGob.value = !showGob.value
}
function toggleMenu() {
  showGob.value = false
  showSubmenu1.value = false
  showMenu.value = !showMenu.value
}
function toggleReticula() {
  showSubmenu1.value = !showSubmenu1.value
}
</script>
