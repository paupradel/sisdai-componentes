<script>
const propiedades = {
  alto_max: {
    type: String,
    default: '370px',
  },
}
</script>

<script setup>
import { computed, ref, toRefs } from 'vue'
import store from '../../stores/accesibilidad'

const props = defineProps(propiedades)
const { alto_max } = toRefs(props)

const abierto = ref(false)

const max_height = ref('0px')

const computedMaxHeight = computed(() => {
  return max_height.value
})

const styleObject = computed(() => {
  if (store.state.vista_simplificada) {
    return { 'max-height': alto_max }
  }
  return { 'max-height': computedMaxHeight }
})

function alternarMaxHeight() {
  abierto.value === false
    ? (max_height.value = alto_max)
    : (max_height.value = '0px')
  abierto.value = !abierto.value
}
</script>

<template>
  <div class="contenedor-leer-mas-menos">
    <div class="texto-corto">
      <slot name="texto-corto" />
    </div>
    <div
      class="texto-largo"
      :style="styleObject"
    >
      <slot name="texto-largo" />
    </div>
    <button
      class="boton-primario boton-chico btn-leer-mas-menos"
      v-if="!store.state.vista_simplificada"
      @click="alternarMaxHeight"
    >
      {{ abierto ? 'Leer menos' : 'Leer más' }}
    </button>
  </div>
</template>

<style>
.contenedor-leer-mas-menos .texto-corto * {
  margin-bottom: 0;
}
.contenedor-leer-mas-menos .texto-largo {
  max-height: 0;
  overflow: hidden;
  transition: all 0.33s ease-in-out;
}
.contenedor-leer-mas-menos .btn-leer-mas-menos {
  margin-top: 16px;
}
</style>
