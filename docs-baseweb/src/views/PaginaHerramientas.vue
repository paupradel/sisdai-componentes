<template>
  <menu-lateral-composicion-fija>
    <template v-slot:menu>
      <menu-lateral :elementos="elementos"></menu-lateral>
    </template>
    <template v-slot:vista>
      <div class="contenedor">
        <div class="flex">
          <div class="columna-16 m-y-10">
            <h1>Herramientas (temporal)</h1>
            <p>Esto lo queremos hacer biblioteca externa en algun momento de la vida.</p>
          </div>
          <div class="columna-8">
            <HerramientaTarjeta />
          </div>
          <div class="columna-8">
            <HerramientaTarjeta />
          </div>
        </div>
      </div>
    </template>
  </menu-lateral-composicion-fija>
</template>

<script>
import HerramientaTarjeta from "@/components/herramientas/HerramientaTarjeta";
import MenuLateral from "@/components/herramientas/MenuLateral";
import MenuLateralComposicionFija from "@/components/herramientas/MenuLateralComposicionFija";

export default {
  components: {
    HerramientaTarjeta,
    MenuLateral,
    MenuLateralComposicionFija
  },
  data() {
    return {
      elementos: {
        'routerlinks': [
          {
            id: 'intro',
            titulo: 'Introduccion',
            url: '/intro',
            clase: 'menu-routerlink router-link-exact-active',
            icono: ''
          },
          {
            id: 'visdona',
            titulo: 'Donas',
            url: '/donas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'vis',
            titulo: 'Otra vis',
            url: '/vis',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'lineas',
            titulo: 'Lineas',
            url: '/lineas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'barras',
            titulo: 'Barras',
            url: '/barras',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'cajas',
            titulo: 'Cajas y bigotes',
            url: '/cajas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'area',
            titulo: 'Area',
            url: '/area',
            clase: 'menu-routerlink',
            icono: ''
          }
        ],
        'links': [
          {
            id: 'github',
            titulo: 'Ir a Github',
            url: 'https://github.com/salsa-community/dadsig-graficas',
            clase: 'menu-github',
            icono: 'icono-social-github',
            target: '_blank'
          }
        ]
      },
    }
  }
}
</script>

<style lang="scss">
:root {
  --menu-lateral-fondo: #DED5FF;
  --submenu-lateral-fondo: #D0CCFF;
  --menu-lateral-accion: #0101FC;
}
.menu-routerlink {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  text-decoration: none;
  @media (hover: hover){
    &:hover {
      background: var(--submenu-lateral-fondo);
      color: var(--menu-lateral-accion, #00f);
    }
  }
  &.router-link-exact-active {
    background: #F6F6F6;
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