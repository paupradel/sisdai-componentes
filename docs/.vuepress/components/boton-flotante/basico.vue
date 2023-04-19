<template>
  <div class="contenerdor-panttalla-simulada">
    <BotonFlotante
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

.boton-flotante-contenido .icono-resaltado .icono {
  position: relative;
  animation: animacionResaltada 2s ease-in-out infinite;
}

.contenerdor-panttalla-simulada .contenedor-boton-flotante {
  position: absolute;
}

.contenerdor-panttalla-simulada {
  position: relative;
  min-height: 80px;
  width: 100%;
}
</style>
