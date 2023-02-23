---
layout: LayoutDocumentacion
---

# Narrativa scroll

Esta sección explica el uso del componente `NarrativaScroll` el cual cambia imágenes de fondo conforme se escrolean algunos bullets. Para este componente se usó la librería Scrollama.

```html
<NarrativaScroll></NarrativaScroll>
```

<narrativascroll-basico
  id_scroll="ejemplo_basico"
/>

## Parámetros

A continuación se enlistan las propiedades que admite el componente

### Obligatorios

- `barras`: (_String_) Identificador único del componente.
- `bullets`: (_Array_) Lista de objetos, en donde cada objeto contiene la información necesaria para cada (_bullet_) asociado a su imagen. Cada objeto debe contener las claves.

  - `id`: (_String_) Identificador del bullet
  - `html`: (_String_) Texto o html que se desee insertar en el bullet
  - `imagen`: (_String_) Ruta de la imagen

  ```json
  [
    {
      "id": "01",
      "html": "<p>bullet 1</p>",
      "imagen": "https://placekitten.com/1920/1080"
    },
    {
      "id": "02",
      "html": "<p>bullet 2</p>",
      "imagen": "https://placekitten.com/1920/1081"
    }
  ]
  ```

<narrativascroll-estilo-portada
      id_scroll="ejemplo_estilo_portada"
/>
