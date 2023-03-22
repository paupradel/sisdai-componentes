<template>
  <div>
    <MenuLateral>
      <template slot="contenido-menu-lateral">
        <ul>
          <li>
            <router-link to="#routerlink"> router link prueba </router-link>
          </li>
          <li>
            <a href="#anchore"> anchore link prueba </a>
          </li>
          <li>
            <ColapsableNavegacion
              class="colapsable-navegacion"
              :titulo="'este es el titulo del submenu'"
            >
              <template v-slot:listado-contenido>
                <router-link to="#">Menú del submenu 1</router-link>
                <a href="#">Menú del submenu 2</a>
              </template>
            </ColapsableNavegacion>
          </li>
        </ul>

        <a
          href="##"
          rel="noopener"
          style="display: grid"
        >
          <span class="icono-social-github titulo-eni"></span>
          <span> ir a github</span>
        </a>
      </template>
    </MenuLateral>
    <ColapsableNavegacion
      class="colapsable-navegacion"
      :titulo="'este es el titulo del submenu'"
    >
      <template v-slot:listado-contenido>
        <li>
          <a href="#">Menú del submenu 1</a>
        </li>
        <li>
          <a href="#">Menú del submenu 2</a>
        </li>
      </template>
    </ColapsableNavegacion>
  </div>
</template>
