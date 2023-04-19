<script setup>
import './index.css'
</script>

<template>
  <div class="contenerdor-panttalla-simulada">
    <SisdaiBotonFlotante
      :enlaces="[
        {
          enlace: 'https://eni.conacyt.mx/',
          contenido: 'Ir a ENI',
          clasesCss: 'eni',
        },
        {
          enlace: 'https://gema.conacyt.mx/',
          contenido: 'Ir a GEMA',
          clasesCss: 'gema',
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
