<script setup>
import { ref } from 'vue'

const nombre_modal_5 = ref(null)

function abreModal() {
  nombre_modal_5.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal
      class="modal-5"
      ref="nombre_modal_5"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado>
        <div class="carrusel-encabezado">
          <div class="carrusel-indice">
            <span>2 de 3</span>
          </div>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-cuerpo">
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
          </div>
          <div class="imagen-info">
            <p class="nombre-imagen m-0">
              Grupos de suelos de erosión eólica de acuerdo a WB
            </p>
            <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <button class="boton-primario boton-chico">
          Descargar
          <span class="icono-archivo-descargar"></span>
        </button>
      </template>
    </SisdaiModal>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="abreModal()"
    >
      Modal Pantalla Completa 2
    </button>
  </div>
</template>
