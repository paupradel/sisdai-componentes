<template>
  <div class="flex">
    <div class="columna-4 columna-1-mov menu-fondo">
      <slot name="menu"></slot>
    </div>
    <div class="columna-12 columna-7-mov">
      <slot name="vista-detalle"></slot>
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
@import '../../../../node_modules/sisdai-css/src/_variables.scss';

.menu-fondo {
  background: transparent;
  @media (min-width: map-get($breakpoints, 'esc')) {
    background: var(--menu-lateral-fondo, #ddf);
  }
}
</style>

<style lang="scss">
:root {
  --menu-lateral-fondo: #ded5ff;
  --submenu-lateral-fondo: #d0ccff;
  --menu-lateral-accion: #0101fc;
}
.menu-routerlink {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      background: var(--submenu-lateral-fondo);
      color: var(--menu-lateral-accion, #00f);
    }
  }
  &.router-link-exact-active {
    background: #f6f6f6;
    box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
    color: var(--menu-lateral-accion, #00f);
  }
}
.menu-github {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  span {
    display: block;
    margin: 0 8px;
    &::before {
      font-size: 60px;
    }
  }
  &:focus,
  &:active,
  &:hover {
    color: var(--menu-lateral-accion, #00f);
    box-shadow: none;
  }
}
</style>
