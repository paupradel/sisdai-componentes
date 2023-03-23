<template>
  <NavegacionPrincipal>
    <ul class="nav-menu">
      <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/"
          exact
          >Inicio</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/documentacion/"
          >Documentación</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/ejemplos/"
          >Ejemplos</RouterLink
        >
      </li>
      <li>
        <a
          class="nav-hipervinculo"
          href="https://github.com/salsa-community/"
          >GitHub</a
        >
      </li>
    </ul>
  </NavegacionPrincipal>
</template>

<script setup></script>
