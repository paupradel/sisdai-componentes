<template>
  <div class="elementos-ejemplo">
    <h2>Elementos para ver cambios</h2>
    <p>
      Parrafo normal, <b>Negritas, </b><i>Cursiva, </i
      ><a
        class="boton boton-secundario boton-chico"
        target="_blank"
        >enlace</a
      >
    </p>

    <div class="tarjeta">
      <img
        class="fondo-imagen"
        src="http://placekitten.com/970/984"
      />
      <div class="contenido-html">
        <p class="parrafo-texto-alto">Aquí va el contenido</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat facilisis libero at tempus. Vestibulum tristique vel lectus
          vel placerat.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.contenerdor-panttalla-simulada {
  position: relative;
  border-right: solid gray 10px;
  border-bottom: solid #000 1px;
  min-height: 300px;
  width: 100%;
  overflow-y: hidden;
}

.contenerdor-panttalla-simulada .contenedor-accesibilidad {
  position: absolute;
}
</style>
