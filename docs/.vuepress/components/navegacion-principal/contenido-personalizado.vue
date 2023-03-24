<template>
  <div class="contenedor">
    <NavegacionPrincipal>
      <!--Definiendo el logo del sitio-->
      <template #identidad>
        <a
          href="https://gema.conacyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
            style="width: 232px; height: 38px"
            src="https://cdn.conacyt.mx/sisdai-archivos/to-examples/logo-conacyt-gema.svg"
            alt="gema."
          />
        </a>
      </template>
      <!--Definiendo las secciones del sitio-->
      <ul class="nav-menu">
        <li>
          <a
            class="nav-hipervinculo"
            href="#"
          >
            Seccion 1</a
          >
        </li>
        <li>
          <a
            class="nav-hipervinculo"
            href="#"
          >
            Seccion 2</a
          >
        </li>
      </ul>
    </NavegacionPrincipal>
  </div>
</template>
