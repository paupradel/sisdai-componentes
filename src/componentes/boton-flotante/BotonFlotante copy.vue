<template>
  <div :class="{ 'a11y-simplificada-ocultar': tieneVistaSimplificada }">
    <div
      class="boton-flotante"
      :class="{ abierto: abiertoBotonFlotante }"
    >
      <button
        class="toggle-flotante"
        :class="{ abierto: !abiertoBotonFlotante }"
        @click="abiertoBotonFlotante = !abiertoBotonFlotante"
      >
        <span
          v-if="abiertoBotonFlotante"
          class="icono-restar icono-3"
        ></span>
        <span
          v-else
          class="icono-documento icono-3"
        ></span>
      </button>
      <a
        v-if="abiertoBotonFlotante"
        :href="enlace"
        target="_blank"
        rel="noopener"
        class="btn-flotante"
        :class="{ abierto: abiertoBotonFlotante }"
      >
        <span
          class="btn-icon"
          aria-hidden="true"
        >
          <span class="icono-documento icono-3 icon"></span>
        </span>
        {{ texto }} <span class="a11y-solo-lectura"> (Link externo).</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BotonFlotante',
  props: {
    texto: {
      type: String,
      default: 'Descarga',
    },
    enlace: {
      type: String,
      default: 'ejem',
    },
    ancho_btn: {
      type: String,
      default: '160px',
    },
  },
  data() {
    return {
      abiertoBotonFlotante: true,
    }
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada
    },
  },
}
</script>

<style lang="scss" scoped>
.a11y-simplificada-ocultar {
  display: none;
}
@keyframes iconBtn {
  0% {
    opacity: 0.25;
    top: 2px;
  }
  50% {
    opacity: 1;
    top: -2px;
  }
  100% {
    opacity: 0.25;
    top: 2px;
  }
}
.boton-flotante {
  width: 32px;
  height: 32px;
  border-radius: 24px;
  border: none;
  position: fixed;
  display: flex;
  align-content: center;
  left: 24px;
  bottom: 24px;
  z-index: 3;
  overflow: hidden;
  box-shadow: 4px 4px 8px 2px var(--sombra);
  transition: all 0.4s ease-in-out;
  &.abierto {
    width: v-bind(ancho_btn);
  }
  .toggle-flotante {
    background-color: #000;
    width: 32px;
    flex: 0 0 32px;
    border-radius: 24px 0 0 24px;
    border: none;
    margin: 0;
    padding: 16px 5px;
    transition: all 0.3s ease-in-out;
    &.abierto {
      background-color: #fff;
      &:hover {
        background-color: #000;
        .icono-documento {
          color: #fff;
        }
      }
      .icono-documento {
        color: #000;
      }
    }
    .icono-restar,
    .icono-documento {
      color: #fff;
      padding: 0;
    }
  }
  .btn-flotante {
    background-color: #fff;
    color: #000;
    font-size: 14px;
    width: 100%;
    border-radius: 0 24px 24px 0;
    text-decoration: none;
    display: flex;
    align-content: center;
    line-height: 32px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 8px;
    padding-right: 16px;
    transition: all 0.3s ease-in-out;
    &.abierto {
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
    .btn-icon {
      margin-top: 4px;
      margin-bottom: 4px;
      margin-right: 8px;
      .icon {
        padding: 0;
        position: relative;
        animation: iconBtn 2s ease-in-out infinite;
      }
    }
  }
}
</style>
