<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
      :enlaces="[
        {
          contenido: 'Documento externo',
          clasesCss: 'icono-resaltado',
          icono: 'icono-documento icono-3',
        },
      ]"
    />
  </div>
</template>

<style>
.boton-flotante-contenido .icono-resaltado .icono {
  position: relative;
  animation: animacionResaltada 2s ease-in-out infinite;
}
</style>
