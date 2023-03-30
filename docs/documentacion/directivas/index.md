---
layout: LayoutDocumentacion
---


# Directivas


## Tooltips
Tooltips que funcionan para cualquier elemento html o componente de vue, agregando la directiva `v-tooltip` o `v-tooltip-info`.

Uso

**Tooltip pequeño** 

```html
<HTMLElement v-tooltip:[position] = "content | options" />
```


**Tooltip informativo** (para contenido mas largo)

```html
<HTMLElement v-tooltip-info:[position].[interactable] = "content | options" />
```


### Cosas que debes saber al usar esta directiva


- Para el posicionamiento de los tooltips se utiliza la dependencia [Popper js](https://www.npmjs.com/package/@popperjs/core), deberas instalar esta dependencia en tu proyecto para que los tooltips funcionen correctamente
- La posicion del tooltip es definida por el parametro `position` (top,left,bottom, etc.). Pero al final, la asignación de la misma, dependera de la disponibilidad de espacio en pantalla y de la posicion del scroll.

### API


#### Parametros
La posición de los parametros es la siguiente

```
v-tooltip:[position] = [content | options]

v-tooltip-info:[position].[interactable] = [content | options]
```

Donde:
- **position** Posicion del tooltip respecto al elemento

  - **Valores aceptados:** top | right | bottom | left | top-start | top-end  | right-start | right-end | bottom-start | bottom-end | left-start | left-end  
  - **Valor por default:** right

- **interactable** Indica si el tooltip tiene algun elemento para interactuar, util cuando se agregan enlaces al tooltip

  - **Valores aceptados:** Si existe es `true`, si no existe es `false`
  - **Valor por default:** `false`

- **content** El contenido del tooltip, acepta html

  - **Tipo:** `string`
  - **Valor por default:** `""`

- **options** Opciones que modifican el tooltip

  - **Tipo:** Object - `{content:string, offset:[number,number], designateToElement:string|HTMLElement}`
  - **Valor por default:** 
    - content: `''`
    - offset: `[12,0]` o `[0,12]` segun la direccion del tooltip
    - designateToElement: `undefined`

  Donde **content** es el contenido del tooltip (acepta html), **offset** es el desplazamiento que el tooltip puede tener respecto al elemento origen, siempre en valores positivos, puedes ver  [cómo funciona esto en popper js](https://popper.js.org/docs/v2/modifiers/offset/). Y **designateToElement** es el elemento origen al que se le puede asignar el tooltip, regularmente es un elemento padre del elemento al que se le aplica la directiva, si no se especifica , por default se usara  el elemento al que se le aplico la directiva




### Ejemplos

<utils-ejemplo-doc ruta="directivas/tooltip-basico.vue"/>

<utils-ejemplo-doc ruta="directivas/tooltip-en-elemento-padre.vue"/>



### Instalar Popper js
Previo a usar los tooltips en el proyecto deberas instalar Popper js

```
npm i @popperjs/core
```