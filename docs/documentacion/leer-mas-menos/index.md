---
layout: LayoutDocumentacion
---

# Leer más menos

Este componente más visualiza una mínima parte del contenido y ofrece la posibilidad de
desplegarse si la persona usuaria así lo decide.

Una de las ventajas de este botón es la oportunidad de ahorrar espacio en
el diseño de la interfaz, así como apoyar la jerarquía de los contenidos.

Uso:

```html
<SisdaiLeerMasMenos alto_max="370px"></SisdaiLeerMasMenos>
```

Cuando se requiere mostrar un texto de introducción pero es muy extenso,
el componente `<SisdaiLeerMasMenos />` construirá un contenedor del ancho total con un botón para Leer Más o Leer
Menos texto

Utiliza el botón de Leer más si en el diseño se cumplen estas dos
condiciones:

- El texto es largo, es decir, cuenta con más de 100 palabras.
- El texto es meramente informativo o circunstancial y no es indispensable
  para que la persona usuaria interactúe con el sitio.

<section id="api">

## API

### Propiedades

- **alto_max**
  Alto del slot de texto-largo cuando está abierto. Por defecto usa 370px.

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

<utils-ejemplo-doc ruta="leer-mas-menos/basico.vue"/>

</section>
