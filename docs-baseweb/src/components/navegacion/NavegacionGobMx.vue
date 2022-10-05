<template>
  <nav class="navegacion navegacion-gobmx">
    <div class="nav-contenedor-identidad">
      <a href="https://www.gob.mx/" class="nav-hiperviculo-logo" target="_blank" rel="noopener">
        <img width="128" height="38" class="nav-logo" src="@/assets/img/gobmx.svg" alt="Gobierno de México.">
      </a>
      <button @click="toggleMenu" class="nav-boton-menu" :class="{ 'abierto': estaNavegacionGobiernoAbierta }">
        <span class="nav-icono-menu"></span>
      </button>
    </div>
    <div class="nav-menu-contedor" :class="{ 'abierto': estaNavegacionGobiernoAbierta }">
      <div class="nav-menu-principal">
        <ul class="nav-menu">
          <li><a href="https://mivacuna.salud.gob.mx/index.php" class="nav-hipervinculo" target="_blank" rel="noopener">Registro para vacunación</a></li>
          <li><a href="https://coronavirus.gob.mx/" class="nav-hipervinculo" target="_blank" rel="noopener">Información sobre COVID-19</a></li>
          <li><a href="https://www.gob.mx/tramites" class="nav-hipervinculo" target="_blank" rel="noopener">Trámites</a></li>
          <li><a href="https://www.gob.mx/gobierno" class="nav-hipervinculo" target="_blank" rel="noopener">Gobierno</a></li>
          <li><a href="https://www.gob.mx/busqueda" class="nav-hipervinculo" target="_blank" rel="noopener"><span class="icono-buscar"></span> </a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavegacionGobMx',
    computed: {
      estaNavegacionGobiernoAbierta() {
        return this.$store.getters.estaNavegacionGobiernoAbierta;
      },
    },
    methods: {
      toggleMenu() {
        if (this.$store.getters.estaNavegacionGobiernoAbierta) {
          this.$store.commit('cerrarNavegacionGobierno');
        } else {
          if (this.$store.getters.estaNavegacionPrincipalAbierta) {
            this.$store.commit('cerrarNavegacionPrincipal');
          }
          this.$store.commit('abrirNavegacionGobierno');
        }
      },
    },
  };
</script>
