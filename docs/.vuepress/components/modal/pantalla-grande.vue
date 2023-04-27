<script setup>
import { ref } from 'vue'

const nombre_modal_4 = ref(null)

function abreModal() {
  nombre_modal_4.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal
      class="modal-4"
      ref="nombre_modal_4"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado></template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-encabezado">
            <div class="carrusel-info">
              <div class="carrusel-indice">
                <span>2 de 3</span>
              </div>
              <div>
                <p class="nombre-imagen m-0">
                  Grupos de suelos de erosión eólica de acuerdo a WB
                </p>
                <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
              </div>
            </div>
            <button class="boton-primario boton-chico">
              Descargar
              <span class="icono-archivo-descargar"></span>
            </button>
          </div>
          <div class="carrusel-cuerpo">
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-izquierdo"></span>
            </button>
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-derecho"></span>
            </button>
          </div>
        </div>
      </template>
      <template v-slot:pie></template>
    </SisdaiModal>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="abreModal()"
    >
      Modal Pantalla Completa 1
    </button>
  </div>
</template>
