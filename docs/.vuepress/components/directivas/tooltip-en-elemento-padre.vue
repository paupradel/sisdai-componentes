<template>
  <div>
    <div
      class="elemento-padre"
      id="elementoPadre"
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa
        corrupti aut reprehenderit doloremque,
      </div>
      <button
        v-tooltip-info:[posicion]="{
          content: `<b>soy un tooltip</b> que  se posiciona a partir del #ElementoPadre`,
          designateToElement: '#elementoPadre',
        }"
      >
        Pasa el cursor aqui
      </button>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        tenetur quo et ad explicabo
      </div>
    </div>
    <p>
      Posición del tooltip:
      <select v-model="posicion">
        <option value="top">Arriba</option>
        <option value="bottom">Abajo</option>
        <option value="left">Izquierda</option>
        <option value="right">Derecha</option>
      </select>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const posicion = ref('top')
</script>

<style>
.elemento-padre {
  border: 1px solid red;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>
