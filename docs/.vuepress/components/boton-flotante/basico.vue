<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'eni',
          contenido: 'Ir a ENI',
          enlace: 'https://eni.conacyt.mx/',
        },
        {
          clasesCss: 'gema',
          contenido: 'Ir a GEMA',
          enlace: 'https://gema.conacyt.mx/',
        },
      ]"
    />
  </div>
</template>

<style>
.boton-flotante-contenido .eni,
.boton-flotante-contenido .eni:hover,
.boton-flotante-contenido .eni:focus {
  background: #3caeac;
}

.boton-flotante-contenido .gema,
.boton-flotante-contenido .gema:hover,
.boton-flotante-contenido .gema:focus {
  background: #ff5100;
}
</style>
