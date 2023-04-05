---
layout: LayoutDocumentacion
sectionName: Documentación
---

# Documentación


Para el uso de la presente biblioteca  se recomienda el uso de Vue 2.7 y el soporte para [Composition Api](https://vuejs.org/api/composition-api-setup.html) en su proyecto.

## Instalación
El paquete de instalacion de npm se instala de la siguiente manera:

```bash
npm install github:salsa-community/sisdai-componentes#develop
```

**Instalacion de estilos**

Ya que el estilo de los componentes esta ligado a las reglas de Sisdai-css. Lo siguiente es dar de alta los estilos de Sisdai-css en el archivo de inicializacion del proyecto

Si su proyecto tiene configurado el preprocesador `sass` o `scss` 

```js
//generalmente es el archivo src/main.js
import "sisdai-css/src/eni.scss"
```

O si su proyecto solo acepta css plano:

```html
<link href="https://cdn.jsdelivr.net/gh/conacyt-dai/dadsig-css/dist/eni.min.css" rel="stylesheet">
```

Adicionalmente  debera agregarse las fuentes e iconos en el encabezado del documento HTML base de su proyecto:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">

<link href="https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css" rel="stylesheet">
```

**Uso de los componentes**

Una vez instalada la biblioteca y los estilos hay varias maneras de empezar a usar los componentes en su proyecto:


**Opción 1**

En el archivo de inicialización del proyecto de vue se podra dar de alta de manera global el componente que desees utilizar

Esta es la opcion recomendada, asi se asegura que el proyecto solo este dando de alta lo que este ocupando.

```js
//generalmente es el arhivo src/main.js
import {NavegacionPrincipal} from 'sisdai-componentes/src/componentes'

Vue.use(NavegacionPrincipal)
```

**Opción 2**

En el componente o vista `.vue` en donde desees ocupar el componente, podras darlos de alta de manera local.

En Composition API:
```html
<script setup> 
import NavegacionGobMx from 'sisdai-componentes/src/componentes/navegacion-gob-mx/NavegacionGobMx.vue'
<script>

<template>
  <NavegacionGobMx/>
</template>
```

En Options API:
```html
<template>
  <NavegacionGobMx/>
</template>

<script>
import NavegacionGobMx from 'sisdai-componentes/src/componentes/navegacion-gob-mx/NavegacionGobMx.vue'

export default {
  components:{
    NavegacionGobMx
  }
}
<script>



```

**Opción 3**

Tambien es posible dar de alta de manera global todos los componentes y directivas de la biblioteca. 

```js
//generalmente es el arhivo src/main.js
import SisdaiComponentes from 'sisdai-componentes'

Vue.use(SisdaiComponentes)
```

Aunque esta forma es la mas  limpia en el codigo (porque se ahorra dar de alta cada componente), solo es  recomendable si se tiene claro que se estan usando todos los componentes y directivas de la biblioteca en su proyecto. Hacerlo de esta manera requiere tener en cuenta los prerequisitos que algunos componentes o directivas pueden tener para su funcionamiento, por ejemplo, el uso de las directivas [Globo de informacion](/documentacion/directivas/) requiere la instalacion de [Popper js](https://www.npmjs.com/package/@popperjs/core) para que pueda funcionar correctamente.


#### Instalar a partir del paquete de distibucion

Dependiendo de las configuraciones de su proyecto , la forma en que su proyecto interprete javascript y/o la gestion de las dependencias de su proyecto. En algunos casos sera necesario instalar el paquete desde la carpeta de distribucion "dist". 

Esta carpeta contiene los paquetes en dos formatos: CommonJs y UMD (Universal Module Definition), siendo el ultimo el que  casi siempre  es mas compatible con cualquier proyecto de javascript.

Ejemplos:

```js
//en CommonJs
const  SisdaiComponentes = require ('sisdai-componentes/dist/sisdai-componentes.common.js')
//en UMD (Universal Module Definition)
import SisdaiComponentes from 'sisdai-componentes/dist/sisdai-componentes.umd.js'
```

```html
<script src="sisdai-componentes/dist/sisdai-componentes.umd.min.js"></script>
```

Tenga en cuenta que usar la biblioteca de esta manera es similar a usarla de la manera en que se explica en la "Opcion 3" de la seccion anterior, y seguramente sera necesario instalar prerequisitos como, por ejemplo, en el caso de las directivas [Globo de informacion](/documentacion/directivas/).