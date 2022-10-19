<template>
  <nav class="navegacion navegacion-conacyt navegacion-pegada">
    <div class="nav-contenedor-identidad">
      <a href="https://conacyt.mx/" class="nav-hiperviculo-logo">
        <img class="nav-logo" width="130" height="38" src="@/assets/img/conacyt-azul.svg" alt="Conacyt.">
      </a>
      <button @click="toggleMenu" class="nav-boton-menu" :class="{ 'abierto': estaNavegacionPrincipalAbierta }">
        <span class="nav-icono-menu"></span>
      </button>
      <div class="nav-informacion">
        Sección: <b>{{ $route.name }}</b>
      </div>
    </div>
    <div class="nav-menu-contedor" :class="{ 'abierto': estaNavegacionPrincipalAbierta }">
      <div class="nav-menu-principal">
        <ul class="nav-menu">
          <li><router-link class="nav-hipervinculo" to="/">Inicio</router-link></li>
          <li><router-link class="nav-hipervinculo" to="/narrativa-scroll">NarrativaScroll</router-link></li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavegacionGobMx',
    computed: {
      estaNavegacionPrincipalAbierta() {
        return this.$store.getters.estaNavegacionPrincipalAbierta;
      },
    },
    methods: {
      toggleMenu() {
        if (this.$store.getters.estaNavegacionPrincipalAbierta) {
          this.$store.commit('cerrarNavegacionPrincipal');
        } else {
          if (this.$store.getters.estaNavegacionGobiernoAbierta) {
            this.$store.commit('cerrarNavegacionGobierno');
          }
          this.$store.commit('abrirNavegacionPrincipal');
        }
      },
    },
  };
</script>
