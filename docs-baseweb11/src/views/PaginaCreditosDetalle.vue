<template>

  <div class="contenedor ancho-lectura m-y-10">
    <div class="tmp-credito-detalle">
      <div class="img">
        <img :src="persona.foto" :alt="persona.nombre" />
      </div>
      <div class="text">
        <p class="nombre">{{persona.nombre}}</p>
        <p class="cargo">{{persona.cargo}}</p>
        <p class="institucion">{{persona.institucion}}</p>
      </div>
    </div>
    <hr/>
    <p v-for="(parrafo, index) in persona.semblanza" :key="`parrafo-${index}`">
      {{parrafo}}
    </p>
    <router-link to="/creditos">Regresar</router-link>
  </div>

</template>

<script>
import personas from '@/assets/data/creditos-personas-ejemplo.json';

export default {
  name: "PaginaCreditosDetalle",
  data(){
    return {
      persona: {},
    }
  },
  mounted() {
    this.persona = personas.filter(d => d.id == this.$route.params.id)[0];
  }
}
</script>

<style lang="scss">
.tmp-credito-detalle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .img {
    flex: 1 0 120px;
    width: 120px;
    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
  }
  .text {
    flex: 1 1 100%;
    font-size: 16px;
    margin: 0 0 0 16px;
    * {
      margin: 8px 0;
      line-height: 1em;
    }
  }
  .nombre {
    font-size: 22px;
    font-weight: 500;
  }
  .institucion {
    color: var(--tipografia-color-2);
  }
}
</style>
