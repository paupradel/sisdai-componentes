<template>
  <div
    class="indice-de-contenido"
    v-if="elementos.length != 0"
  >
    <p class="titulo">{{ titulo_indice }}</p>
    <nav>
      <a
        v-for="(elemento, indice) in elementos"
        :href="elemento.ref"
        :key="indice"
        class="seccion"
        :class="{ activo: seccion_visible == elemento.ref }"
      >
        {{ elemento.nombre }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'IndiceDeContenido',
  props: {
    titulo_indice: {
      type: String,
      default: () => 'Contenidos',
    },
    elementos: {
      type: [],
      required: true,
    },
  },
  data() {
    return {
      seccion_visible: '',
    }
  },
  mounted() {
    if (this.elementos.length > 0) {
      this.seccion_visible = this.elementos[0].ref
    }

    window.addEventListener('scroll', this.cambioPosicion)
  },
  methods: {
    cambioPosicion() {
      this.elementos.forEach(d => {
        d.seccion = document.querySelector(d.ref)
        d.y_min = d.seccion.offsetTop
        d.y_max = d.seccion.offsetTop + d.seccion.offsetHeight
      })
      let posicion_scroll_y = window.pageYOffset + 100

      this.elementos.map(d => {
        if (d.y_min <= posicion_scroll_y && posicion_scroll_y < d.y_max) {
          this.seccion_visible = d.ref
        }
      })
    },
  },
}
</script>

<style lang="scss">
.indice-de-contenido {
  .titulo {
    font-size: 18px;
    font-weight: 500;
  }
  a.seccion {
    display: block;
    text-decoration: none;
    padding: 10px 0 10px 22px;
    border-left: solid 2px #a9a8a9;
    border-radius: 0;
    background: transparent;
    color: var(--tipografia-color-3, #333);
    &.activo {
      color: var(--menu-lateral-accion, #00f);
      border-left: solid 4px var(--menu-lateral-accion, #00f);
    }
    @media (hover: hover) {
      &:hover {
        color: var(--menu-lateral-accion, #00f);
      }
    }
    &.router-link-exact-active {
      background: #f6f6f6;
      box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
      color: var(--menu-lateral-accion, #00f);
    }
  }
}
</style>
