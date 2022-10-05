# baseweb2

## Uso local
- clonar el repo
  ```bash
  git clone --single-branch --no-tags <URL_DEL_REPOSITORIO>

  ```
- actualizar en el pagkage el nombre del proyecto y reiniciar la versión
  ```bash
  "name": "nombre-del-proyecto-nuevo",
  "version": "0.1.0",

  ```
- crear el `.env` en base al `.env.example`
- instalar las dependencias 
  ```bash
  npm install
  ```
- levantar el repo
  ```bash
  npm run serve
  ```

## Para desarrollo
- crear el `.env.desarrollo` en base al `.env.desarrollo.example`
- compilar el código
  ```bash
  npm run build:dev
  ```
- montar el codigo de la carpeta `dist` en el ambiente de pruebas
- configurar las rutas en el servidor de pruebas [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

## Para producción
- crear el `.env.production` en base al `.env.production.example`
- compilar y minificar el código
  ```bash
  npm run build
  ```
- montar el codigo de la carpeta `dist` en el ambiente de producción
- configurar las rutas en el servidor de producción [guia vue router](https://router.vuejs.org/guide/essentials/history-mode.html#apache)

___

## Actualizaciones de la baseweb

1. Agregar la baseweb como repositorio remoto
    ```bash
    git remote add baseweb <URL_DEL_REPOSITORIO>
    ```

2. Configurar el repositorio remoto para no jalar los tags ni heads
    ```bash
    git config remote.baseweb.fetch '+refs/heads/*:refs/heads/*'
    git config remote.baseweb.tagopt --no-tags 
    ```

3. Traer los ultimos cambios de la baseweb
    ```bash
    git fetch baseweb --no-tags

    ```

4. Jalar los últimos cambios de la baseweb
    ```bash
    git pull baseweb main
    ```
5. Resolver los conflictos que existan en local
6. Probar en local que se levante correctamente todo

___