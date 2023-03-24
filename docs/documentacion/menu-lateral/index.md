---
layout: LayoutDocumentacion
---

# Menú lateral

Este componente consiste en un elemento `menu.menu-lateral-contenedor`  que usualmente contiene enlaces de navegación. Sus estilos provienen de la biblioteca de estilos [sisdai-css](https://github.com/salsa-community/sisdai-css). En version de celular tiene un botón que muestra el contenido o lo colapsa.

<menu-lateral-basico/>

## API

Este componente sólo admite slots.

### Slots

-`'contenido-menu-lateral'`: Este es el único slot que contiene el componente. En el se pueden incluir elementos de navegación como `<a></a>` o `<router-link>  </router-link>` en el caso de que que el proyecto esté usando [Vue Router](https://router.vuejs.org/). También se pueden agregar dichos enlaces contenidos en los elementos de lista `<li>` de una lista no ordenada `<ul/>`, así como incluir el componente `<ColapsableNavegacion/>`

  Para este componente, el uso de [Vue Router](https://router.vuejs.org/) es altamente recomendado, entre otras cosas, por los estilos que asigna a los enlaces dentro de este componente.
  
  Por _default_ el contenido del slot es el siguiente:

  ```html
  <router-link to="#routerlink"> router link prueba </router-link>
  <a href="#anchore"> anchore link prueba </a>
  <a
    href="https://github.com/salsa-community/sisdai-componentes"
    rel="noopener"
    target="_blank"
  >
    <span class="icono-social-github"></span>
    ejemplo github
  </a>
  ```

## Ejemplos

**_Default_**

Así se renderiza el componente sin especificar su slot
<div>
<MenuLateral/>
</div>

y se escribe como se muestra a continuación

```html
<div>
  <ColapsableNavegacion/>
</div>
```

**Usando slot simple**

En el siguiente ejemplo usamos `router-link` y un `<a></a>` para ilustrar algunos dejemplos de enlaces dentro de esta mísma documentación. Observe como los primeros 3 modifican su estilo cuando la ruta se actualiza, mientras que el cuarto elemento solo se modifica en el estaod :active. Es esta una de las razones por las que se recomienda el uso de [Vue Router](https://router.vuejs.org/)

<menu-lateral-basico/>

la implementación luce como se muestra a continuación:

```html
<div>
  <MenuLateral>
    <template slot="contenido-menu-lateral">
      <router-link to="#api"> API</router-link>
      <router-link to="#slots"> Slots</router-link>
      <router-link to="#ejemplos"> Ejemplos </router-link>
      <a href="#menu-lateral"> El mero inicio </a>
    </template>
  </MenuLateral>
</div>
```

**Slot como lista no ordenada y colapsable**

El siguiente ejemplo contiene los mismos enlaces que el anterior, sin embargo, su estructura es un poco más ordenada pues los enlaces están dentro de los elementos de lista de una lista no ordenada. Además se integró el componente `<ColapsableNavegacion/>`, que a su vez tiene otros enlaces que se introducen mediante un slot propio.

<menu-lateral-colapsable/>

La implementación se lleva a cabo como se muestra a continuación

```html
  <div>
    <MenuLateral>
      <template slot="contenido-menu-lateral">
        <ul>
          <li>
            <router-link to="#api"> API</router-link>
          </li>
          <li>
            <router-link to="#slots"> Slots</router-link>
          </li>
          <ColapsableNavegacion :titulo="'<ColapsableNavegacion> :D'">
            <template v-slot:listado-contenido>
              <li><router-link to="#ejemplos"> Ejemplos </router-link></li>
              <li><a href="#menu-lateral"> El mero inicio </a></li>
            </template>
          </ColapsableNavegacion>
        </ul>
        <a
          href="##"
          rel="noopener"
          style="display: grid"
        >
          <span class="icono-social-github titulo-eni"></span>
          <span> ir a github</span>
        </a>
      </template>
    </MenuLateral>
  </div>

```
