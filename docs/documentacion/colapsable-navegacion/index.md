---
layout: LayoutDocumentacion
---

# Colapsable de navegacion

<colapsable-navegacion-basico/>

Este componente consiste en un elemento `<li class="colapsable-navegacion"></li>` que contiene en su interior un botón y una lista no ordenada `<ul></ul>` que usualmente contendrá enlaces `<a></a>` en sus elementos de lista `<li></li>`,

Su funcionalidad consiste en que al dar click al botón se pude agregar una clase `.activo` al elemnto `li.colapsable-navegacion`, lo cual hará que la lista no ordenada sea vuelva visible. Los estilos de las clases mencionadas anteriormente provienen de la biblioteca de estilos [sisdai-css](https://github.com/salsa-community/sisdai-css), por lo cual es una dependencia de este componente.

Los elementos de lista se especifican mediante `slots`.

## API

Este componente admite propiedades y slots.

### Propiedades

A continuación se enlistan las propiedades que admite el componente

#### Obligatorios

- `titulo`: (_String_) Corresponde al texto que deberá tener el botón del colapsable. Por _default_ tiene el valor 'Titulo de colapsable', sin embargo su valor se debe especificar siempre que se use.

#### Opcionales

- `activo`: (_Boolean_) Corresponde al estado del componente. Por _default_ es `false` y corresponde al componente colapsado. Si se elige `true` el componente se mostrará desplegado

### Slots

- `'listado-contenido'`: Este es el único slot que contiene el componente, en él se deben indicar los elemtos de lista `<li></li>` que contendrá el elemento. Por _default_ tiene el siguiente `html` dentro del slot

```html
<li>
  <a href="#"> Elemento desplegado</a>
</li>
```

## Ejemplos

**_Default_**

Así se renderiza el componente sin especificar `:titulo` ni slot

<ColapsableNavegacion/>

y se expresa únicamente como

```html
<ColapsableNavegacion/>
```

**Titulo y slot**

Así se renderiza cuando especificamos un `:titulo` y su slot

<colapsable-navegacion-basico/>

y se expresa obtiene de la siguiente forma

```html
<ColapsableNavegacion
  :titulo="'Este es el título del colapsable'"
>
  <template v-slot:listado-contenido>
    <li>
      <a
        href="#"
        class="nav-hipervinculo"
        >Opción 1 desplegable</a
      >
    </li>
    <li>
      <a
        href="#"
        class="nav-hipervinculo"
        >Opción 2 desplegable</a
      >
    </li>
  </template>
</ColapsableNavegacion>
```

**Observación:** Este componente `<ColapsableNavegacion/>` tiene un estilo definido para el componente `<MenuLateral/>`. Puedes consultar la sección de dicho componente para ver como pueden convivir