---
layout: LayoutDocumentacion
---

# Accesibilidad

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet eius fuga facilis fugit, nobis totam molestiae accusantium corrupti consequatur recusandae! Ducimus excepturi sequi quis amet, eius cupiditate blanditiis minus.

El componente cuenta con tres opciones de accesibilidad predeterminadas:

- Tipografia accesible
- Vista simplificada
- Enlaces subrayados

Uso:

```html
<MenuAccesibilidad></MenuAccesibilidad>
```

## API

### Propiedades

- **agregarOpciones**
  Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto con los siguientes atributos:

  ```js
  {
    accion: <String> 'Nombre de la acción al dar click en la opción.',
    claseCss: <String> 'Nombre de la clase css de la opción.',
    icono: <String> 'Visible a un costado del titulo.',
    titulo: <String> 'Visible en la lista del menú abierto.',
  }
  ```

  - Tipo: `Array`
  - Valor predeterminado: `[]`
  - Requerido: no

### Metodos

- **alternarMenuAccesibilidadAbierto**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Menú de accesibilidad.

### Eventos

- **@alSeleccionarOpcion**
  Se ejecuta al dar click en una opción del munú de accesibilidad.

  Parametros:

  - `String`: Objeto que contiene los atributos de la opción seleccionada al dar click.

- **@restablecer**
  Se ejecuta cuanso se ha dado click en el botón "Restablecer".

### Slots

Este componente no permite contenido con slots

### Store

Este componente cuenta con un modulo de store en estructura de vuex con variables y mutaciones para cada una de las opciones predeterminadas:

- Tipografia accesible
  - Variable: `tipografia_accesible` (de tipo bolleano en `false` por defecto).
  - Mutación: `alternarTipografiaAccesible`.
- Vista simplificada
  - Variable: `vista_simplificada` (de tipo bolleano en `false` por defecto).
  - Mutación: `alternarVistaSimplificada`.
- Enlaces subrayados
  - Variable: `enlaces_subrayados` (de tipo bolleano en `false` por defecto).
  - Mutación: `alternarEnlacesSubrayados`.

Además de una mutación extra que restablece los valores de todas las variables:

- `limpiarClasesAccesibles`:
  Cambia el valor de todas las variables de accesibilidad a `false`.

Uso en `store/index.js`:

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import storeAccesibilidad from 'sisdai-componentes/src/stores/accesibilidad'

export default new Vuex.Store({
  modules: {
    storeAccesibilidad,
  },
  ...
})
```

## Ejemplos

#### Opciones por default

<utils-ejemplo-doc ruta="menu-accesibilidad/basico.vue"/>

#### Agregando opciones de accesibilidad

<utils-ejemplo-doc ruta="menu-accesibilidad/agregando-opciones.vue"/>

#### Conectando componente con store
