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
                <router-link to="/documentacion/navegacion_gob_mx">
                  NavegacionGobMx</router-link
                >
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
        <Content />
      </div>
    </div>
  </div>
</template>

<style src="prismjs/themes/prism-tomorrow.css"></style>
