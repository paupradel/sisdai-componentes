<template>
    <div class="componente-vacio">
        <b>Soy un componente </b>
        <button @click="saludo">vacio</button>
    </div>
</template>

<script setup>

function saludo() {
    alert("Hola, desde el componente vacio")
}

</script>

<style>
.componente-vacio {
    max-width: 300px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

}
</style>