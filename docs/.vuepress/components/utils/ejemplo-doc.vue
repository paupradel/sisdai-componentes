<template>
  <div class="ejemplo">
    <div class="contenedor-ejemplo">
      <component
        class="componente"
        :is="componenteEjemplo"
      ></component>
    </div>

    <pre class="language-html"><code v-html="codigoResaltado"></code></pre>
  </div>
</template>

<script setup>
import Prism from 'prismjs'
import { onMounted, defineProps, ref, defineAsyncComponent } from 'vue'

const props = defineProps({
  ruta: {
    type: String,
    required: true,
  },
})

const codigoResaltado = ref('')
const componenteEjemplo = defineAsyncComponent(() => import('../' + props.ruta))

onMounted(async () => {
  const codigo = await import(`!!raw-loader!../${props.ruta}`)

  codigoResaltado.value = Prism.highlight(
    codigo.default,
    Prism.languages.html,
    'html'
  )
})
</script>

<style scoped>
.ejemplo {
  margin-bottom: 3rem;
}

.ejemplo > .contenedor-ejemplo {
  border: 1px dashed gray;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
