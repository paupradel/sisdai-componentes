<template>
  <div class="elementos-ejemplo m-x-2 p-b-8">
    <!-- <h2 class="m-t-0">Elementos para ver cambios</h2> -->

    <div class="tarjeta m-b-2">
      <img
        class="fondo-imagen"
        src="http://placekitten.com/970/984"
      />
      <div class="contenido-html">
        <p class="parrafo-texto-alto">Esta es una tarjeta de ejemplo</p>
      </div>
    </div>

    <a
      class="tarjeta-hipervinculo-externo"
      href=""
      target="_blank"
    >
      <img
        class="fondo-imagen"
        src="http://placekitten.com/970/980"
      />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo texto-color-1">
          <p class="parrafo-texto-alto m-y-0">
            Este es un ejemplo de hipervínculo externo con forma de tarjeta
          </p>
          <p>Subtitulo del hipervínculo externo</p>
        </div>
      </div>
    </a>

    <p>
      Parrafo normal, <b>Negritas, </b> <i>Cursiva,</i>
      <button class="boton-secundario boton-chico">botón</button>,
      <a
        class="boton boton-secundario boton-chico"
        target="_blank"
      >
        enlace con estilo de botón
      </a>
    </p>

    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'icono-resaltado',
        },
      ]"
    />
  </div>
</template>

<style>
.contenerdor-panttalla-simulada .contenedor-menu-accesibilidad,
.contenerdor-panttalla-simulada .contenedor-boton-flotante {
  position: absolute;
}

.contenerdor-panttalla-simulada {
  position: relative;
  border-right: solid gray 10px;
  border-bottom: solid #000 1px;
  min-height: 350px;
  width: 100%;
  overflow-y: hidden;
}
</style>
