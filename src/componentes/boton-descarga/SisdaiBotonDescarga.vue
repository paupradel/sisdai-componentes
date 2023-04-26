<script>
const propiedades = {
  urlDescarga: {
    type: String,
    default: 'archivo',
  },
  titulo: {
    type: String,
    default: 'Archivo de descarga',
  },
  descripcion: {
    type: String,
    default:
      'Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati.',
  },
}
</script>

<script setup>
import { toRefs } from 'vue'
import store from '../../stores/accesibilidad'

const props = defineProps(propiedades)

const { urlDescarga, titulo, descripcion } = toRefs(props)
</script>

<template>
  <div class="contenedor-boton-descarga">
    <a
      class="boton-descarga"
      :class="{
        'text-none-decoration': !store.state.vista_simplificada,
      }"
      :href="urlDescarga"
      :download="`${urlDescarga}.zip`"
    >
      <p class="titulo">{{ titulo }}</p>
      <div class="descripcion">
        <p class="texto">{{ descripcion }}</p>
        <span class="icono-archivo-descargar"></span>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.contenedor-boton-descarga .boton-descarga {
  &.text-none-decoration {
    text-decoration: none;
  }
}
</style>
