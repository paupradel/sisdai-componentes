<script setup>
import ElementosParaVerAccesibilidad from './../menu-accesibilidad/elementos-para-ver-accesibilidad.vue'
</script>

<template>
  <div class="contenerdor-panttalla-simulada">
    <ElementosParaVerAccesibilidad />

    <BotonFlotante>
      <a
        class="enlace enis p-x-1 borde-redondeado-0"
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="icono icono-flecha-arriba-derecha"></span>
        Ir a ENI
      </a>

      <a
        class="enlace gema p-x-1 borde-redondeado-0"
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="icono icono-flecha-arriba-derecha"></span>
        Ir a ENI
      </a>
    </BotonFlotante>
  </div>
</template>

<style>
.enlace {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex !important;
  align-items: center;
}

.enlace [class*=' icono-'] {
  padding: 0 8px 0 0;
}

.enis {
  background: #3caeac;
}

.gema {
  background: #ff5100;
}

.contenerdor-panttalla-simulada .contenedor-boton-flotante {
  position: absolute;
}

.contenerdor-panttalla-simulada {
  padding-bottom: 60px;
}
</style>
