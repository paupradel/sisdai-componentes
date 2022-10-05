<template>
    <a target="_self" v-bind:href="url" class="herramienta-tarjeta">
      <div class="contenedor-imagen">
          <img alt="" v-bind:src=imagen>
      </div>
      <div class="tarjeta-texto" :style="cssProps">
        <p class="titulo-seccion texto-color-3 m-l-2"> {{ titulo }}</p>
        <p class="notas m-l-2"> {{ descripcion }}</p>
      </div>
   </a>
</template>

<script>
export default {
  name: "HerramientaTarjeta",
  props: {
    titulo: {
      type: String,
      default: "Título de tarjeta",
    },
    descripcion: {
      type: String,
      default: "Descripción de tarjeta",
    },
    url: {
      type: String,
      default: "blank",
    },
    imagen: {
      type: String,
      default: "https://placekitten.com/1920/1080",
    },
    color_fondo: {
      type: String,
      default: "#fff"
    },
    color_fondo_transicion: {
      type: String,
      default: "#dddddd"
    },
  },
  computed: {
    cssProps() {
      return {
        '--color-fondo': this.color_fondo,
        '--color-fondo-transicion': this.color_fondo_transicion,
        '--alto-imagen' : this.alto_imagen
      }
    }
  }

}
</script>

<style lang="scss">
$altura_card: 240px;
a.herramienta-tarjeta{
  text-decoration: none;
  .tarjeta-texto {
    background-color: var(--color-fondo);
    border: 2px solid transparent;
    transition: all .3s ease-in-out;

  }
  &:hover {
    .tarjeta-texto {
      background-color: var(--color-fondo-transicion);
    }
  }
  .contenedor-imagen {
    height: 240px;

    img {
      height: $altura_card;
      box-sizing: border-box;
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
    }
  }
}
</style>