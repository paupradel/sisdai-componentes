---
layout: LayoutDocumentacion
---

# Boton de descarga

El botón de descarga más permite descargar archivos ya sea individuales o comprimidos. Se
recomienda utilizar una ruta cdn en donde contega almacenado el documento
evitando cargarlo al proyecto y mejorando la eficiencia del sitio.

Uso:

```html
<BotonDescarga
  descripcion="Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati."
  :url_descarga="`archivo.zip`"
/>
```

<section id="api">

## API

### Propiedades

- **urlDescarga**
  Señala la ruta de donde se encuentra el archivo ya sea remoto o en local.

  - Tipo: `String`
  - Requerido: sí

- **titulo**
  Muestra el título del contenedor de descarga.

  - Tipo: `String`
  - Requerido: sí

- **descripcion**
  Describe el contenido del archivo de descarga ya sea si es un archivo comprimido en formato .zip

  - Tipo: `String`
  - Requerido: sí

### Metodos

### Eventos

Este componente no dispara eventos externos

### Slots

Este componente no permite contenido con slots

</section>

<section id="ejemplos">

## Ejemplos

<utils-ejemplo-doc ruta="boton-descarga/basico.vue"/>

</section>
