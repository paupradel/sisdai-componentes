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

<style lang="scss">
@import './node_modules/sisdai-css/src/_variables.scss';
.menu-lateral-contenedor {
  margin: 0;
  padding: 0;
  position: sticky;
  top: 100px;
  display: flex;
  z-index: 98;
  ul {
    padding-left: 0;
    li {
      list-style: none;
      margin: 0;
    }
  }
  .menu-mov {
    background: var(--menu-lateral-fondo, #ddf);
    border-radius: 16px;
    padding: 8px 0;
    transition: all 0.2s ease-in-out;
    z-index: 99;
    position: relative;
    &.abierto {
      border-radius: 16px 0 0 16px;
    }
    .boton-menu.boton-icono {
      :hover {
        background: transparent;
      }
      background: transparent;
      border: none;
      box-shadow: none;
      color: var(--menu-lateral-accion, #00f);
    }
  }
  .menu-colapsable {
    margin-left: -30px;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    background: var(--submenu-lateral-fondo, #ccf);
    opacity: 0;
    padding-top: map-get($espaciado, '1');
    padding-bottom: map-get($espaciado, '1');
    &.abierto {
      border-radius: 0 map-get($espaciado, '2') map-get($espaciado, '2') 0;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
      pointer-events: inherit;
      margin-left: 0;
      opacity: 1;
    }
  }
  .menu-max-height {
    overflow: auto;
    max-height: calc(100vh - 180px);
    width: 70vw;
  }
  a {
    display: block;
    border-radius: 0;
    padding: map-get($espaciado, '1')
      map-get($contenedores, 'mov', 'margen-interior');

    color: var(--navegacion-color);
    text-decoration: none;
    background: transparent;
    color: var(--tipografia-color-3, #333);
    font-weight: 400;
    text-decoration: none;
    @media (hover: hover) {
      &:hover {
        background: var(--submenu-lateral-fondo);
        color: var(--menu-lateral-accion, #00f);
      }
    }
    &.router-link-active {
      background: #f6f6f6;
      box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
      color: var(--menu-lateral-accion, #00f);
    }
    &:active,
    &:focus,
    &.link-activo {
      background: #f6f6f6;
      box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
      color: var(--menu-lateral-accion, #00f);
    }
  }
}

@media (min-width: map-get($breakpoints, 'esc')) {
  .menu-lateral-contenedor {
    background: #ded5ff;
    margin: 0;
    top: 50px;
    .menu-mov {
      display: none;
    }
    .menu-colapsable,
    .menu-colapsable.abierto {
      background: transparent;
      box-shadow: none;
      width: 100%;
      border-radius: 0;
      pointer-events: inherit;
      margin-left: 0;
      padding-top: map-get($espaciado, '5');
      padding-bottom: map-get($espaciado, '5');
      opacity: 1;
    }
    .menu-max-height {
      overflow: inherit;
      max-height: inherit;
      width: inherit;
    }
    a {
      padding: map-get($espaciado, '1')
        map-get($contenedores, 'esc', 'margen-interior');
    }
  }
}
</style>
