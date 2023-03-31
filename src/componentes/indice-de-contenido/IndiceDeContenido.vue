<template>
  <div class="indice-de-contenido">
    <p class="titulo-indice">{{ titulo }}</p>
    <nav>
      <div class="contenedor-indice-de-contenido">
        <slot name="contenido-indice-de-contenido">
          <router-link to="#routerlink"> router link prueba </router-link>
          <a href="#anchore"> anchore link prueba </a>
        </slot>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onUnmounted, onMounted, ref, watch } from 'vue'
const lista_elementos = ref([])
const seccion_visible = ref()
const props = defineProps({
  titulo: { type: String, default: 'Contenido' },
  altura: { type: Number, default: 50 },
})

/**
 * Esta funcion selecciona todos los ementos a, extrae de los href
 * el último elemento al separar por el caracter '#', es decir
 * los id
 */

function obtenerRutas() {
  lista_elementos.value = [
    ...document.querySelectorAll('div.indice-de-contenido a'),
  ].map(d => {
    return { id: d.href.split('#').slice(-1).pop() }
  })
}

/**
 * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
 * la sección activa
 */
function scroleando() {
  lista_elementos.value.forEach(d => {
    if (document.getElementById(d.id)) {
      d.elemento = document.getElementById(d.id)
      d.y_min = d.elemento.offsetTop
      d.y_max = d.elemento.offsetTop + d.elemento.offsetHeight
    } else {
      console.warn(
        'Los href que introdujiste en el slot "contenido-indice-de-contenido" no hacen referencia a ningún id de esta vista'
      )
    }
  })
  let posicion_scroll_y = window.pageYOffset + 100

  lista_elementos.value.map(d => {
    if (
      d.y_min + props.altura <= posicion_scroll_y &&
      posicion_scroll_y < d.y_max + props.altura
    ) {
      seccion_visible.value = d.id
    }
  })
}

/**
 * Caracteristicas del autoscroll suave al clickear un link
 */

function autoScrollSuave() {
  document.querySelectorAll(' div.indice-de-contenido a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      seccion_visible.value = anchor.href.split('#').slice(-1).pop()
      e.preventDefault()

      window.scrollTo({
        top:
          document.querySelector('#' + seccion_visible.value).offsetTop -
          props.altura,
        behavior: 'smooth',
      })
    })
  })
}
watch(seccion_visible, () => {
  document.querySelectorAll('div.indice-de-contenido a').forEach(d => {
    if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
      d.classList.add('link-activo')
    } else {
      d.classList.remove('link-activo')
      d.classList.remove('router-link-exact-active')
    }
  })
})

onMounted(() => {
  obtenerRutas()
  autoScrollSuave()
  window.addEventListener('scroll', scroleando)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scroleando)
})
</script>
