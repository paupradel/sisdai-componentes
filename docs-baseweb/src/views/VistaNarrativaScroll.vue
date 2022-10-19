<template>
  <div class="contenedor ancho-lectura  m-y-10">
    <h1 class="titulo-pagina">Narrativa scroll</h1>

    <p>
      Esta sección explica el uso del componente <code class="language-javascript">NarrativaScroll</code>
      el cual cambia imágenes de fondo conforme se escrolean algunos bullets. 
      Para este componente se usó la librería Scrollama.

    </p>
    <vue-code-highlight language="html">
        <pre
          class="language-html"
          v-text="
            `<NarrativaScroll></NarrativaScroll>`
          "
        ></pre>
      </vue-code-highlight>

    <NarrativaScrollBasico
      id_scroll="ejemplo_basico"
    ></NarrativaScrollBasico>
    <section id="parametros" class="p-y-10">
      <h2 class=titulo-seccion>Parámetros</h2>
      <p>A continuación se enlistan las propiedades que admite el componente </p>
      <h3 class=titulo-subseccion>Obligatorios</h3>
      cover-title
      <ul>
        <li>
          <code class="language-javascript">id_scroll</code>
          <i>(String)</i>
          Identificador único del componente.
        </li>
        <li>
          <code class="language-javascript">bullets</code>
          <i>(Array)</i>
          Lista de objetos, en donde cada objeto contiene la información necesaria para cada <i>bullet</i> 
          asociado a su imagen. Cada objeto debe contener las claves 
          <ul>
            <li>
              <code class="language-javascript">id</code>
              <i>(String)</i>
              Identificador del bullet.
            </li>
            <li>
              <code class="language-javascript">html</code>
              <i>(String)</i>
              Texto o html que se desee insertar en el bullet
            </li>
            <li>
              <code class="language-javascript">imagen</code>
              <i>(String)</i>
              Ruta de la imágen
            </li>
          </ul>
          A continuación se muestra un ejemplo del parametro <code class="language-javascript">bullets</code>
          <vue-code-highlight language="javascript">
            <pre>
              [
                {id:"01" ,html: "<p>bullet 1</p>", imagen:"https://placekitten.com/1920/1080"},
                {id:"02" ,html: "<p>bullet 2</p>", imagen:"https://placekitten.com/1920/1081"},
              ]
            </pre>
          </vue-code-highlight>
        </li>
      </ul>
    </section>
    <section id="ejemplos">
      <NarrativaScrollEstiloPortada
      id_scroll="ejemplo_estilo_portada"
      />
      Ahora va el caso de uso de planeas
      <NarrativaScrollEstiloPortadaPlaneas
      id_scroll="ejemplo_estilo_portada_planeas"
      />
    </section>
  </div>
</template>
<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
import NarrativaScrollBasico from "@/components/vista-narrativa-scroll/Basico.vue"
import NarrativaScrollEstiloPortada from "@/components/vista-narrativa-scroll/EstiloPortada.vue"
import NarrativaScrollEstiloPortadaPlaneas from "@/components/vista-narrativa-scroll/EstiloPortadaPlaneas.vue"

export default {
  name: "VisualizacionCajasBigotes",
  components: {
    VueCodeHighlight,
    NarrativaScrollBasico,
    NarrativaScrollEstiloPortada,
    NarrativaScrollEstiloPortadaPlaneas
  },
}
  </script>
