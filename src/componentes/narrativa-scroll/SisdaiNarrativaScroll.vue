<template>
  <section
    class="contenedor narrativa-scroll"
    :id="id_scroll"
  >
    <div
      :style="{ opacity: depurador ? 1 : 0, top: altura_sensor * 100 + 'vh' }"
      class="depurador"
    ></div>
    <div class="contenedor-portada">
      <img
        v-for="(bullet, i) in bullets"
        :key="i"
        :class="`portada fondo-${i}`"
        :srcset="bullet.imagen"
        alt=""
        :style="{ opacity: seccion_visible == i ? 1 : 0 }"
      />
    </div>
    <article>
      <div
        v-for="(bullet, i) in bullets"
        :key="i"
        :class="`bullet`"
        :data-step="i"
        v-html="bullet.html"
      ></div>
    </article>
  </section>
</template>

<script setup>
import { onUnmounted, onMounted, ref } from 'vue'
const lista_elementos = ref([])
const seccion_visible = ref(0)
const props = defineProps({
  id_scroll: { type: String, default: 'id-de-narrativa-scroll' },
  bullets: {
    default: () => [
      {
        html: `<div class="contenedor-portada">
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <div class="contenedor ancho-lectura p-1">
                <h1 class="texto-centrado texto-color-1">
                  Sistema de Diseño y Accesibilidad para la Investigación
                </h1>
              </div>
            </div>
          </div>
        </div>`,
        imagen: 'https://placekitten.com/1920/1080',
      },
      {
        html: '<p>bullet 1</p>',
        imagen: 'https://placekitten.com/1920/1082',
      },
      {
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1042',
      },
    ],
    type: Array,
  },
  depurador: { type: Boolean, default: false },
  altura_sensor: {
    type: Number,
    default: 0.5,
  },
  degradado_inicial: {
    default: true,
    type: Boolean,
  },
})

/**
 * Esta funcion selecciona todos los ementos a, extrae de los href
 * el último elemento al separar por el caracter '#', es decir
 * los id
 */

const obtenerElementos = () => {
  lista_elementos.value = [
    ...document.querySelectorAll(
      `section#${props.id_scroll}.narrativa-scroll article div.bullet`
    ),
  ]
}
/**
 * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
 * la sección activa
 */

function scroleando() {
  const posicion_sensor = document
    .querySelector(`section#${props.id_scroll}.narrativa-scroll div.depurador`)
    .getBoundingClientRect().top

  // Checando elementos activos
  let posicion_actual
  lista_elementos.value.forEach((el, i) => {
    if (
      el.getBoundingClientRect().top < posicion_sensor &&
      posicion_sensor < el.getBoundingClientRect().bottom
    ) {
      posicion_actual = i
    } else if (
      posicion_sensor < lista_elementos.value[0].getBoundingClientRect().top
    ) {
      posicion_actual = 0
    } else if (
      posicion_sensor >=
      lista_elementos.value.slice(-1)[0].getBoundingClientRect().bottom
    ) {
      posicion_actual = lista_elementos.value.length - 1
    }
  })
  if (props.degradado_inicial) {
    let posicion_normalizada =
      (posicion_sensor -
        lista_elementos.value[0].getBoundingClientRect().bottom) /
      lista_elementos.value[0].getBoundingClientRect().height
    lista_elementos.value[0].querySelector(
      '.degradado-negro-abajo'
    ).style.background =
      'linear-gradient(transparent,rgba(0,0,0,' + -posicion_normalizada + '))'
    lista_elementos.value[1].style.background =
      'linear-gradient(rgba(0,0,0,' + -posicion_normalizada + '),transparent)'
  }

  if (posicion_actual !== seccion_visible.value) {
    seccion_visible.value = posicion_actual
  }
}

onMounted(() => {
  obtenerElementos()
  window.addEventListener('scroll', scroleando)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scroleando)
})
</script>

<style>
section.narrativa-scroll .depurador {
  position: sticky;
  width: 100%;
  border-top: solid 2px crimson;
  z-index: 10;
  height: 2px;
}
section.narrativa-scroll div.contenedor-portada {
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  top: 0;
}
section.narrativa-scroll article {
  position: relative;
  top: -100vh;
}
section.narrativa-scroll article .bullet {
  height: 100vh;
  position: relative;
  display: flex;
}
</style>
