<template>
  <div class="flex">
    <div class="columna-4 columna-1-mov menu-fondo">
      <slot name="menu"></slot>
    </div>
    <div class="columna-12 columna-7-mov">
      <slot name="vista"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuLateralComposicionFija',
}
</script>

<style lang="scss">

.menu-fondo {
  background: transparent;
  @include mediaquery('esc') {
    background: var(--menu-lateral-fondo, #ddf);
  }
}
</style>
