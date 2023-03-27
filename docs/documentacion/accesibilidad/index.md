---
layout: LayoutDocumentacion
---

# Accesibilidad

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet eius fuga facilis fugit, nobis totam molestiae accusantium corrupti consequatur recusandae! Ducimus excepturi sequi quis amet, eius cupiditate blanditiis minus.

Uso:

```html
<script setup>
  import MenuAccesibilidad from 'sisdai-componentes/accesibilidad'
</script>

<template>
  <MenuAccesibilidad />
</template>
```

## API

### Propiedades

- **opciones**
  Lista de opciones que se tendrá el Menú de accesibilidad, cada opción debe ser un objeto con los siguientes atributos:
  ```js
  {
    accion: <String> 'Nombre de la acción al dar click en la opción.',
    icono: <String> 'Visible a un costado del titulo.',
    titulo: <String> 'Visible en la lista del menú abierto.',
  }
  ```

  - Tipo: `Array`
  - Valor predeterminado: 
  ```js
  [ {
    accion: 'alternarTipografiaAccesible',
    icono: 'icono-cambio-tipografia',
    titulo: 'Tipografia accesible',
  },
  {
    accion: 'alternarVistaSimplificada',
    icono: 'icono-vista-simplificada',
    titulo: 'Vista simplificada',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    icono: 'icono-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'limpiarClasesAccesibles',
    icono: 'icono-restablecer',
    titulo: 'Restablecer',
  } ]
  ```
  - Requerido: no

### Metodos

- **alternarMenuAccesibilidadAbierto**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Menú de accesibilidad.

### Eventos

- **alSeleccionarOpcion**

### Slots

Este componente no permite contenido con slots

### Store

## Ejemplos

Usando las opciones por default

<accesibilidad-basico />

