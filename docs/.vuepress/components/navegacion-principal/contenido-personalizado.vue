<script setup>
import { ref } from 'vue'

const submenuEstaAbierto = ref(false)
</script>
<template>
  <div class="contenedor">
    <SisdaiNavegacionPrincipal>
      <!--Definiendo el logo del sitio-->
      <template #identidad>
        <a
          href="https://gema.conacyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
            style="width: 232px; height: 38px"
            src="https://cdn.conacyt.mx/sisdai-archivos/to-examples/logo-conacyt-gema.svg"
            alt="gema."
          />
        </a>
      </template>
      <!--Definiendo las secciones del sitio-->
      <ul class="nav-menu">
        <li>
          <a
            class="nav-hipervinculo"
            href="#"
            exact
            >Sección 1</a
          >
        </li>
        <li class="nav-contenedor-submenu">
          <button
            class="nav-boton-submenu"
            @click="submenuEstaAbierto = !submenuEstaAbierto"
          >
            Submenu
          </button>
          <ul
            class="nav-submenu"
            :class="{ abierto: submenuEstaAbierto }"
          >
            <li>
              <button
                class="nav-boton-regresar"
                @click="submenuEstaAbierto = !submenuEstaAbierto"
              >
                Submenu
              </button>
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="/ejem"
                >Subsección 1</a
              >
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="/ejem"
                >Subsección 2</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            class="nav-hipervinculo"
            href="/creditos"
            >Sección 2</a
          >
        </li>
      </ul>
    </SisdaiNavegacionPrincipal>
  </div>
</template>
