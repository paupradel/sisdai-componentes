---
layout: LayoutDocumentacion
---

# MenuAccesibilidad

El menú de accesibilidad permite ejecutar a las funciones que agregan reglas de accesibilidad al sitio web. Consulte la [sección de accesibilidad del Sisdai](https://sisdai.conacyt.mx/accesibilidad/introduccion) para más información.

El componente cuenta con tres opciones de accesibilidad predeterminadas:

- Tipografía accesible
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
  Se ejecuta al dar click en una opción del menú de accesibilidad.

  Parametros:

  - `String`: Objeto que contiene los atributos de la opción seleccionada al dar click.

- **@restablecer**
  Se ejecuta cuanso se ha dado click en el botón "Restablecer".

### Slots

Este componente no permite contenido con slots

### Store

Este componente cuenta con un modulo de store en estructura de [Vuex](https://vuex.vuejs.org/) con variables y mutaciones para cada una de las opciones predeterminadas:

- Tipografía accesible
  - Variable: `tipografia_accesible` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarTipografiaAccesible`.
- Vista simplificada
  - Variable: `vista_simplificada` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarVistaSimplificada`.
- Enlaces subrayados
  - Variable: `enlaces_subrayados` (de tipo boleano en `false` por defecto).
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

Para que se apliquen las reglas de accesibilidad definidas por la biblioteca sisdai-css, es necesario agregar las clases a11y en el contenedor de las vistas. Para proyectos con [Vue](https://vuejs.org/) se sugiere hacerlo en el archivo `src/App.vue` de la siguiente manera:

<utils-ejemplo-doc ruta="menu-accesibilidad/basico.vue"/>

#### Agregando opciones de accesibilidad

Junto con el uso de la propiedad `agregarOpciones` para añadir reglas de accesibilidad, también es necesario declarar las reglas css de los elementos html que se deseen afectar:

<utils-ejemplo-doc ruta="menu-accesibilidad/agregando-opciones.vue"/>

#### Conectar con store

Guardar el estado de las variables de accesibilidad en el store, permite que interactúen con la reactividad de componentes complejos que estén a un nivel profundo en la organización del proyecto.

Por ejemplo, si en una visualización se requiere que la vista muestre una configuración definida cuando se active la "Vista simplificada", se puede acceder al estado de esa variable importando el modulo de accesibilidad del store.

Para conectar el menú de accesibilidad con el store [Vuex](https://vuex.vuejs.org/), se puede usar la siguiente configuración:

```html
<script setup>
import { computed } from 'vue'
import store from '@/store/index.js'

const clasesAccesibles = computed(() => ({
  'a11y-tipografia': store.state.sisdaiAccesibilidad.tipografia_accesible,
  'a11y-simplificada': store.state.sisdaiAccesibilidad.vista_simplificada,
  'a11y-hipervinculos': store.state.sisdaiAccesibilidad.enlaces_subrayados,
}))

function mutarAccesibilidad({ accion }) {
  store.commit(`sisdaiAccesibilidad/${accion}`)
}

function limpiarClasesAccesibles() {
  store.commit('sisdaiAccesibilidad/limpiarClasesAccesibles')
}
</script>

<template>
  <div
    class="contenerdor-panttalla"
    :class="clasesAccesibles"
  >
    <SisdaiMenuAccesibilidad
      @alSeleccionarOpcion="mutarAccesibilidad"
      @restablecer="limpiarClasesAccesibles"
    />
    ...
  </div>
</template>
```
