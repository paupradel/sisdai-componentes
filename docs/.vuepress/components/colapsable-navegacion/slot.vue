<template>
  <SisdaiColapsableNavegacion :titulo="'Este es el título del colapsable'">
    <template v-slot:listado-contenido>
      <li>
        <a
          href="#"
          class="nav-hipervinculo"
          exact
          >Opción 1 desplegable</a
        >
      </li>
      <li>
        <a
          href="#"
          class="nav-hipervinculo"
          >Opción 2 desplegable</a
        >
      </li>
    </template>
  </SisdaiColapsableNavegacion>
</template>
