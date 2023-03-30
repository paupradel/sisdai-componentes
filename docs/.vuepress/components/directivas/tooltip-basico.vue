<template>
  <div>
    <!--Un tooltip basico -->
    <button v-tooltip="'soy un tooltip'">boton</button>

    <!--Un tooltip posicionado a la izquierda -->
    <button v-tooltip:left="'soy un tooltip'">boton</button>

    <!--Un tooltip informativo  posicionado arriba a la derecha -->
    <button v-tooltip-info:top-end="'soy un tooltip de informacion'">
      boton
    </button>

    <!--Un tooltip informativo  posicionado abajo, con desplazamiento personalizado (40 pixeles abajo del elemento) -->
    <button
      v-tooltip-info:bottom="{
        content: 'soy un tooltip desplazado 40 pixeles hacia abajo',
        offset: [0, 40],
      }"
    >
      boton
    </button>

    <!--Un tooltip informativo  posicionado a la izquierda, con "interactable" activado, es decir que el tooltip se queda para interactuar (y tiene elementos para ello)-->
    <button
      v-tooltip-info:left.interactable="{
        content: `soy un tooltip <a  target='_blank'href='https://conacyt.mx/'>con un enlace</a>`,
      }"
    >
      boton
    </button>
  </div>
</template>
