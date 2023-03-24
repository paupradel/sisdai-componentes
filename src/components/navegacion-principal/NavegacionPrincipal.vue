<template>
  <nav class="navegacion navegacion-conacyt navegacion-pegada">
    <div class="nav-contenedor-identidad">
      <slot name="identidad">
        <a
          href="https://conacyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
            width="130"
            height="38"
            src="https://cdn.conacyt.mx/sisdai-archivos/conacyt-azul.svg"
            alt="Conacyt."
          />
        </a>
      </slot>
      <button
        @click="alternarMenu"
        class="nav-boton-menu"
        :class="{ abierto: navegacionPrincipalAbierta }"
      >
        <span class="nav-icono-menu"></span>
      </button>
      <div
        class="nav-informacion"
        v-html="navInformacion"
      ></div>
    </div>
    <div
      class="nav-menu-contedor"
      :class="{ abierto: navegacionPrincipalAbierta }"
    >
      <div class="nav-menu-principal">
        <slot>
          <ul class="nav-menu">
            <li>
              <a
                class="nav-hipervinculo"
                href="#"
                >Inicio</a
              >
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="#"
                >Acerca de</a
              >
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  navInformacion: {
    default: '',
    type: String,
  },
})

const navegacionPrincipalAbierta = ref(false)

function alternarMenu() {
  //TODO: asegurarse de que otras navegaciones se cierren antes de abrir esta
  navegacionPrincipalAbierta.value = !navegacionPrincipalAbierta.value
}
</script>
