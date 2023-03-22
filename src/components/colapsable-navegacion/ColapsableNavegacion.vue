<template>
  <li :class="{ activo: activo, 'colapsable-navegacion': clase_default }">
    <button
      class="nav-boton-submenu"
      @click="activo = !activo"
    >
      {{ props.titulo }}
    </button>
    <ul class="nav-submenu">
      <li>
        <button class="nav-boton-regresar">{{ props.titulo }}</button>
      </li>
      <slot name="listado-contenido">
        <li>
          <a href="#"> Menú del submenu</a>
        </li>
      </slot>
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  clase_default: { type: Boolean, default: true },
})
const activo = ref(false)
</script>

<style scoped>
.colapsable-navegacion {
  position: relative;
  background-color: transparent;
  list-style: none;
}
.colapsable-navegacion.activo > .nav-submenu {
  opacity: 1;
  height: 100px;
  position: relative;
}

.colapsable-navegacion > .nav-boton-submenu {
  color: #000;
  font-weight: 500;
  background: transparent;
  padding: 8px 40px;
}
.colapsable-navegacion.activo > .nav-boton-submenu,
.colapsable-navegacion:focus > .nav-boton-submenu,
.colapsable-navegacion:focus-within > .nav-boton-submenu,
.colapsable-navegacion:hover > .nav-boton-submenu {
  color: #000;
  background: transparent;
  box-shadow: none;
}

.colapsable-navegacion > .nav-submenu {
  list-style: none;
  height: 0px;
  border-radius: none;
  box-shadow: none;
  opacity: 0;
  pointer-events: inherit;
  position: relative;
  width: 100%;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}
.colapsable-navegacion > .nav-submenu > li {
  margin: 0;
}
.colapsable-navegacion > .nav-submenu > li > a {
  background: transparent;
  color: #000;
  padding: 8px 50px;
  box-shadow: none;
}

.colapsable-navegacion > .nav-submenu > li > a.router-link-exact-active,
.colapsable-navegacion > .nav-submenu > li > a.router-link-active {
  background: #fff;
  box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
}
</style>
