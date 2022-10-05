<template>
  <menu class="menu-contenedor">
    <div class="menu-mov" @click="abrirMenu = !abrirMenu" :class="{'abierto':abrirMenu}">
      <button class="boton-icono boton-menu">
        <span v-if="abrirMenu" class="icono-angulo-doble-izquierda"></span> 
        <span v-else class="icono-angulo-doble-derecha"></span> 
      </button>
    </div>
    <div class="menu-colapsable" :class="{'abierto':abrirMenu}">
      <div class="menu-max-height">
        <router-link class="menu-link" :class="routerlink.clase" :key="routerlink.id" :to="{path:routerlink.url}" v-for="routerlink in elementos.routerlinks">
          <span :class="routerlink.icono"></span>
          {{ routerlink.titulo }}
        </router-link>
        <a class="menu-link" :class="link.clase" :href="link.url" :target="link.target" rel="noopener" :key="link.id" v-for="link in elementos.links">
          <span :class="link.icono"></span>
          {{ link.titulo }}
        </a>
      </div>
    </div>
  </menu>
</template>

<script>
export default {
  name: 'MenuLateral',
  props: {
    elementos: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      abrirMenu: false,
    }
  }
}
</script>

<style lang="scss">
.menu-contenedor {
  margin: map-get($espaciado, '3') map-get($espaciado, '2');
  padding: 0;
  position: sticky;
  top: 100px;
  display: flex;
  z-index: 98;
  .menu-mov {
    background: var(--menu-lateral-fondo, #ddf);
    border-radius: map-get($espaciado, '2');
    padding: map-get($espaciado, '1') 0;
    transition: all .2s ease-in-out;
    z-index: 99;
    position: relative;
    &.abierto {
      border-radius: map-get($espaciado, '2') 0 0 map-get($espaciado, '2');
    }
    .boton-menu {
      background: transparent;
      border: none;
      box-shadow: none;
      color: var(--menu-lateral-accion, #00f);
    }
  }
  .menu-colapsable {
    margin-left: -30px;
    pointer-events: none;
    transition: all .2s ease-in-out;
    background: var(--submenu-lateral-fondo, #ccf);
    opacity: 0;
    padding-top: map-get($espaciado, '1');
    padding-bottom: map-get($espaciado, '1');
    &.abierto {
      border-radius: 0 map-get($espaciado, '2') map-get($espaciado, '2') 0;
      box-shadow: 4px 4px 8px rgba(0,0,0,.1);
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
  .menu-link {
    display: block;
    border-radius: 0;
    padding: map-get($espaciado, '1') map-get($contenedores, 'mov', 'margen-interior');
  }
}
.menu-link {
  color: var(--navegacion-color);
  text-decoration: none;
}
@include mediaquery('esc') {
  .menu-contenedor {
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
    .menu-link {
      padding: map-get($espaciado, '1') map-get($contenedores, 'esc', 'margen-interior');
    }
  }
}
</style>
