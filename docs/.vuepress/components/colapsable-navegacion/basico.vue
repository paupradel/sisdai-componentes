<template>
  <div>
    <ColapsableNavegacion
      class="colapsable-navegacion"
      :titulo="'este es el titulo del submenu'"
    >
      <template v-slot:listado-contenido>
        <li>
          <a
            href="#"
            class="nav-hipervinculo"
            >Menú del submenu 1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="nav-hipervinculo"
            >Menú del submenu 2</a
          >
        </li>
      </template>
    </ColapsableNavegacion>
  </div>
</template>
