<template>
  <div class="theme-container">
    <NavegacionGobMx />

    <nav-navegacion-principal></nav-navegacion-principal>

    <div class="flex">
      <div class="columna-4 columna-1-mov menu-fondo">
        <MenuLateral>
          <template slot="contenido-menu-lateral">
            <ul>
              <li>
                <router-link to="/documentacion/info-de-despliegue">
                  InfoDeDespliegue</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/pie-pagina-conacyt">
                  PiePaginaConacyt</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/pie-pagina-gob-mx">
                  PiePaginaGobMx</router-link
                >
              </li>
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
                <router-link to="/documentacion/navegacion-principal">
                  NavegacionPrincipal</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/navegacion-gob-mx">
                  NavegacionGobMx</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/indice-de-contenido">
                  Índice de contenido</router-link
                >
              </li>
              <li>
                <router-link to="/documentacion/accesibilidad">
                  Accesibilidad
                </router-link>
              </li>
              <li>
                <router-link to="/documentacion/narrativa_scroll">
                  NarrativaScroll</router-link
                >
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
        <div class="flex">
          <div class="columna-12 contenedor ancho-fijo">
            <Content />
          </div>
          <div class="columna-4">
            <IndiceDeContenido
              class="indice-contenido-documentacion"
              :id_indice="'indice-template'"
              ref="componenteIndice"
            >
              <template slot="contenido-indice-de-contenido">
                <ul>
                  <li
                    v-for="(elemento, i) in lista_elementos"
                    :key="i"
                  >
                    <a :href="'#' + elemento.id"> {{ elemento.texto }}</a>
                  </li>
                </ul>
              </template>
            </IndiceDeContenido>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue2-helpers/vue-router'

import { ref, onMounted, watch } from 'vue'
const lista_elementos = ref([])

const route = useRoute()
const componenteIndice = ref()

onMounted(() => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})

watch(route, () => {
  let elementos = []
  setTimeout(() => actualizaContenidoIndice(), 200)
})
function actualizaContenidoIndice() {
  let elementos = []
  document.querySelectorAll('div.content__default h2').forEach(el => {
    if (el.id) {
      elementos.push({
        id: el.id,
        texto: el.innerText.replace('#', ''),
      })
    }
  })
  lista_elementos.value = elementos
  /**
   * Apuramos al componente para que su lista de elementos se actualice y
   * obtenemos las rutas
   */
  componenteIndice.value._setupState.lista_elementos.value =
    lista_elementos.value
  componenteIndice.value._setupState.seccion_visible.value = ''
  componenteIndice.value._setupState.autoScrollSuave()
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style>
.indice-contenido-documentacion {
  position: sticky;
  top: 50px;
  padding: 28px 0;
}
</style>
