<template>
  <div>
    <MenuLateral>
      <template slot="contenido-menu-lateral">
        <ul>
          <li>
            <router-link to="#api"> API</router-link>
          </li>
          <li>
            <router-link to="#slots"> Slots</router-link>
          </li>
          <ColapsableNavegacion :titulo="'<ColapsableNavegacion> :D'">
            <template v-slot:listado-contenido>
              <li><router-link to="#ejemplos"> Ejemplos </router-link></li>
              <li><a href="#menu-lateral"> El mero inicio </a></li>
            </template>
          </ColapsableNavegacion>
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
  </div>
</template>
