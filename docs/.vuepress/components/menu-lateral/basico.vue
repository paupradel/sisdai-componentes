<template>
  <div>
    <SisdaiMenuLateral>
      <template slot="contenido-menu-lateral">
        <router-link
          to="#api"
          exact
        >
          API</router-link
        >
        <router-link to="#slots"> Slots</router-link>
        <router-link to="#ejemplos"> Ejemplos </router-link>
        <a href="#menu-lateral"> El mero inicio </a>
      </template>
    </SisdaiMenuLateral>
  </div>
</template>
