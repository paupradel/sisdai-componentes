# sisdai-componentes

Sisdai-componentes es una biblioteca de componentes reutilizables de Vue alineada al sistema de diseño de la DAI.

El proyecto contiene una carpeta docs-baseweb que es un ambiente para ir probando y documentando el desarrollo. A continuación de describen los comandos básicos

## Instalación

Para instalar las dependencias de la biblioteca:

```
npm install
```

Para instalar las dependencias del ambiente de desarrollo:

```
npm docs:install
```

### Compilar ambiente de desarrollo en local:

Este comando levanta la baseweb para que quien desarrolle pueda hacer pruebas

```
npm run docs
```

### Compilar biblioteca para producción

```
npm run build
```

### Compilar ambiente de desarrollo para visualizar en línea

```
npm run docs:build
```



## ¿Como agregar nuevos componentes?

### Estructura

- Los nuevos componentes se agregan en la carpeta `src/componentes`.
- Cada componente se agrega en su propio directorio `src/componentes/nuevo-componente`.
- Dentro la carpeta de cada componente deberan existir todos los archivos necesarios para dar funcionalidad a ese componente.
- El archivo con extensión `.vue` y un `index.js` son necesarios 

Ejemplo de estructura

```bash
sisdai-componentes/
└── src
    └── componentes
        └── componente-nuevo    #carpeta del componente
            ├── ComponenteNuevo.vue
            └── index.js

```

### Lineamientos para archivos .vue

- Para el desarrollo se usa [Composition API](https://vuejs.org/guide/introduction.html#composition-api)
- Se evita el uso de preprocesadores de estilos, se usa css en vez de scss o sass
- En la medida de lo posible se evita la llamada de metodos al router de vue, si un componente por su funcionalidad requiere de  esta dependencia o de otra similar debera especificarlo en la documentacion de uso del componente.
- Apegarse a los estilos de codigo definidos en las configuraciones del proyecto: *eslint, prettier,editorconfig y vscode-settings*. 

### Generando el scrip install en index.js


Dentro del archivo `index.js` que acompaña al componente se agregara un codigo de instalación como el siguiente:
```js
// /src/componentes/componente-nuevo/index.js

import ComponenteNuevo from './ComponenteNuevo.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(ComponenteNuevo.__name, ComponenteNuevo)
  },
}

export default plugin
```

Para que funcione el archivo anterior debera integrarse con los archivos `src/index.js` y `src/componentes/index.js`. Cuando se agregue un nuevo componente tambien deberan de modificarse estos mismos.

```bash
sisdai-componentes/
└── src
    ├── componentes
    │   ├── componente-nuevo
    │   │   ├── ComponenteNuevo.vue
    │   │   └── index.js 		#index de componente-nuevo/
    │   └── index.js 			#index de componentes/
    └── index.js 				#index de src/


```

En el siguiente archivo se indexan todos los componentes para que sean accesibles a nivel `src/componentes`

```js
// /src/componentes.js
import ComponenteNuevo from './componente-nuevo'

export {
  ... 
  ComponenteNuevo, // agregar al final de las exportaciones
}

```

Finalmente en el siguiente archivo se agrega el nuevo componente al script global de instalacion

```js
// /src/index.js

import {
  ... 
  ComponenteNuevo, //se importa el componente
} from './components'

const plugin = {
  install: function (Vue) {
    ...
    Vue.use(ComponenteNuevo) // y se agrega el vue.use al final de este bloque
  },
}

export default plugin


```

### Uso del store en componentes

Actualmente el unico modulo que soportara el store de esta biblioteca es el de **Accesibilidad**

### Agregando el componente a la documentacion vuepress