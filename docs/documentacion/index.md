---
layout: LayoutDocumentacion
sectionName: Documentación
---

# Documentación

## Cómo empezar

### Instalación

```bash
npm install github:salsa-community/sisdai-componentes
```

Ya que el estilo de los componentes esta ligado a las reglas de Sisdai-css. Lo siguiente es dar de alta los estilos de Sisdai-css en el archivo de inicializacion del proyecto

Si tu proyecto tiene configurado el preprocesador `sass` o `scss` 

```js
//generalmente es el archivo src/main.js
import "sisdai-css/src/eni.scss"
```

Si tu proyecto solo acepta css plano:

```js
//Esta es una tarea pendiente, preguntar al equipo si esta de acuerdo en 
//dar esto desde sisdai-css
```

Una vez instalada la biblioteca hay varias maneras de empezar a usar los componentes en tu proyecto:


**Opcion 1**

En el archivo de inicialización del proyecto de vue se podra dar de alta de manera global el componente que desees utilizar

Esta es la opcion recomendada, asi se asegura que el proyecto solo este dando de alta lo que este ocupando.

```js
//generalmente es el arhivo src/main.js
import {NavegacionPrincipal} from 'sisdai-componentes'

Vue.use(NavegacionPrincipal)
```

**Opcion 2**

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

**Opcion 3**

Tambien es posible dar de alta de manera global todos los componentes y directivas de la biblioteca. 

```js
//generalmente es el arhivo src/main.js
import SisdaiComponentes from 'sisdai-componentes'

Vue.use(SisdaiComponentes)
```

Aunque esta forma es mas  limpia en el codigo (porque se ahorra dar de alta cada componente), solo es  recomendable si se tiene total claro que se estan usando todos los componentes y directivas de la biblioteca en su proyecto. Hacerlo de esta manera requiere tener en cuenta los prerequisitos que algunos componentes o directivas pueden tener para su funcionamiento, por ejemplo, el uso de las directivas [Globo de informacion](/documentacion/directivas/) requiere la instalacion de [Popper js](https://www.npmjs.com/package/@popperjs/core) para que pueda funcionar correctamente.

