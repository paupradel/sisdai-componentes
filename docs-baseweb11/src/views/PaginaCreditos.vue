<template>
  <div class="contenedor tmp-contendor-chico m-y-10">
    
    <h1>Créditos</h1>

    <div class="flex flex-wrap">
      <div class="columna-8">
        <p class="titulo-lista">Créditos Instituciones</p>
        <ul class="lista-logo">
          <li v-for="institucion in instituciones" :key="institucion.id">
            <a v-if="institucion.url" :href=institucion.url target="_blak" ref="noopener" >
              <div class="logo">
                <img :src="institucion.logo" :alt="institucion.nombre" >
              </div>
              <div class="nombre">{{institucion.nombre}}</div>
            </a>
            <div v-else class="elemento">
              <div class="logo">
                <img :src="institucion.logo" :alt="institucion.nombre" >
              </div>
              <div class="nombre">{{institucion.nombre}}</div>
            </div>
          </li>
        </ul>
     </div>
      <div class="columna-8">
        <p class="titulo-lista">Créditos Investigadores</p>
        <ul class="lista-avatar">
          <li v-for="persona in personas" :key="persona.id">
            <router-link :to="{ name: 'Créditos / Investigador', params: { id: `${persona.id}` } }">
              <div class="avatar">
                <img :src="persona.foto" :alt="persona.nombre" />
              </div>
              <div class="texto">
                <p class="texto-primario">{{persona.nombre}}</p>
                <p class="texto-secundario">{{persona.cargo}}</p>
                <p class="texto-terciario">{{persona.institucion}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import personas from '@/assets/data/creditos-personas-ejemplo.json';
import instituciones from '@/assets/data/creditos-instituciones-ejemplo.json';

export default {
  name: "PaginaCreditos",
  data(){
    return {
      personas: personas,
      instituciones: instituciones
    }
  }
}
</script>

<style>
.tmp-contendor-chico {
  max-width: 1024px;
}
</style>