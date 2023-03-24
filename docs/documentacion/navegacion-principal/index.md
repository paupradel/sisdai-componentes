---
layout: LayoutDocumentacion
---

# Navegacion principal

Se trata del componente de barra de navegacion principal del sitio, generalmente contiene la lista de enlaces a las secciones del sitio, identidad, etc.

Uso:

```html
<NavegacionPrincipal> ...contenido </NavegacionPrincipal>
```

## API

### Propiedades

- **navInformacion**
  Para la version mobile es el contenido que se muestra debajo de la barra de navegacion, se usa generalmente para mostrar el nombre de la seccion actual del sitio.

  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no

- **fija**
  Define si esta barra de navegacion se queda fija en la parte superior al hacer scroll en la vista actual
  - Tipo: `Boolean`
  - Valor predeterminado `true`
  - Requerido: no

### Metodos

Este componente no cuenta con metodos publicos

### Eventos

Este componente no dispara eventos externos

### Slots

##### default

- Requerido: si
- Contenido predeterminado: contenido de prueba

Slot para el contenido de navegacion, son los links a las secciones disponibles en el sitio.

```html
<NavegacionPrincipal>
  <ul class="nav-menu">
    <li>
      <a
        class="nav-hipervinculo"
        href="#"
      >
        Enlace sección</a
      >
    </li>
  </ul>
</NavegacionPrincipal>
```

De acuerdo a la semantica de html y las reglas de css definidas en Sisdaicss, los links deberan estar contenidos en un [elemento lista desordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

En caso de tener un [router](https://router.vuejs.org/), el elemento `<a>` podria ser remplazado por el componente `<RouterLink>` conservando las clases de estilo necesarias.

##### identidad

- Requerido: no
- Contenido predeterminado: Logotipo de Conacyt

Slot para el contenido de identidad del sitio, donde se despliegan los logos del mismo.

Se recomienda usar las clases css de Sisdaicss

```html
<NavegacionPrincipal>
  <template #identidad>
    <a
      href="https://conacyt.mx/"
      target="_blank"
      class="nav-hiperviculo-logo"
    >
      <img
        class="nav-logo"
        width="130"
        height="38"
        src="https://cdn.conacyt.mx/sisdai-archivos/conacyt-azul.svg"
        alt="Conacyt."
      />
    </a>
  </template>
</NavegacionPrincipal>
```

## Ejemplos

Usando el contenido por default

<utils-ejemplo-doc ruta="navegacion-principal/basico.vue"/>

Agregando contenido personalizado

<utils-ejemplo-doc ruta="navegacion-principal/contenido-personalizado.vue"/>

**TODO: borrar esto y el componente!**

Ejemplo de como se ve un simple boton en el componente `utils/ejemplo-doc.vue` layout de ejemplos.

el estilo de este componente aun puede cambiar

<utils-ejemplo-doc ruta="navegacion-principal/un-boton.vue"/>
