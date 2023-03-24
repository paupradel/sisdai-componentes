<template>
  <li
    :class="{ activo: activo }"
    class="colapsable-navegacion"
  >
    <button
      class="colapsable-boton-submenu nav-boton-submenu"
      @click="activo = !activo"
    >
      {{ props.titulo }}
    </button>
    <ul class="colapsable-submenu">
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
})
const activo = ref(false)
</script>
