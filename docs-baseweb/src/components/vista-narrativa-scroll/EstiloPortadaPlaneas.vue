
<template>
    <NarrativaScroll
        :ref="id_scroll"
        class="estilo-portada"
        :id_scroll="id_scroll"
        :bullets='[
                {id:"01" ,html: `<div class="cover" >
      <div class="cover-gradient">
        <h1 class="cover-title titulo-capitulo">Planeas</h1>
        <h2 class="cover-subtitle subtitulo-capitulo">
          Un capítulo del Ecosistema Nacional Informático de Energía y Cambio Climático
        </h2>
      </div>
    </div>`, imagen:"https://placekitten.com/1920/1080"},
                {id:"02" ,html: "<p>El nivel de consumo de la sociedad en la que vivimos ya no se puede mantener; generamos inmensas cantidades de desechos y, como sabemos, la Tierra tiene recursos finitos.</p>", imagen:"https://placekitten.com/1920/1082"},
                {id:"03" ,html: "<p>La relación entre energía, ambiente y sociedad es muy compleja y requiere un análisis desde distintos frentes,... </p>", imagen:"https://placekitten.com/1921/1083"},
                {id:"04" ,html: "<p>ya que atraviesa los sistemas económicos, el transporte, la alimentación, el agua y la tierra.</p>", imagen:"https://placekitten.com/1920/1084"},
                {id:"05" ,html: "<p>Además, las fuentes renovables no son 100% limpias. Por ejemplo, los paneles solares, aerogeneradores y baterías se fabrican con combustibles fósiles (gas, petróleo y carbón), dependen en gran parte de la minería y de elementos difíciles de reciclar.</p>", imagen:"https://placekitten.com/1920/1085"},
                {id:"06" ,html: "<p>Sin embargo, el impacto ambiental de los combustibles fósiles es mucho mayor. En este sentido, las energías renovables son esenciales porque en algunos casos pueden sustituirlos, además de ayudarnos a recuperar la soberanía energética del país... </p>", imagen:"https://placekitten.com/1920/1086"},
                {id:"07" ,html: "<p>… actualmente México importa gran parte de lo que consumimos. Por ejemplo durante el 2021 compramos a Estados Unidos y otros países el 59% de gasolina, 46% de diesel y 72% del gas natural.</p>", imagen:"https://placekitten.com/1920/1087"},
                {id:"08" ,html: "<p>A su vez, no debemos olvidar que millones de personas no tienen acceso a servicios energéticos básicos y al mismo tiempo, en México, el 10% más rico es responsable de la misma cantidad de emisiones que el 50% más pobre.</p>", imagen:"https://placekitten.com/1920/1088"},
                {id:"09" ,html: "<p>Tanto el sector industrial y de transporte como los estratos de mayor consumo son los principales responsables y pueden contribuir al ahorrar agua y energía, no obstante es fundamental organizarnos para impulsar políticas públicas que generen cambios estructurales.</p>", imagen:"https://placekitten.com/1920/1089"},
                {id:"10" ,html: "<p>Es urgente actuar.</p>", imagen:"https://placekitten.com/1920/1090"},
                {id:"11" ,html: "<p>Para el análisis de este reto mundial, el Conacyt pone a disposición de la ciudadanía la evidencia científica.</p>", imagen:"https://placekitten.com/1920/1091"},

              ]'
              :debug="false"

    ></NarrativaScroll>
</template>
<script>
export default {
    name: "NarrativaScrollEstiloPortada",
    props:{
        id_scroll: String
    },
    data(){
        return {

        }
    },
    mounted(){
        window.addEventListener("scroll",()=>{
            var y_bullet_1 = 1 - this.$refs[this.id_scroll].y_scrolleado/(this.$refs[this.id_scroll].scrolly.clientHeight/4);
            this.y_scrolleado_normalizado = this.$refs[this.id_scroll].y_scrolleado_normalizado;
            var bullets = document.querySelector(`#${this.id_scroll}`).querySelectorAll(".bullet");
            var alpha =1 -  this.y_scrolleado_normalizado/bullets.length
            console.log(alpha,this.y_scrolleado_normalizado/bullets.length)
            bullets[0].style.background = 'linear-gradient(transparent,rgba(0,0,0,'+y_bullet_1+'))';
            bullets[1].style.background = 'linear-gradient(rgba(0,0,0,'+y_bullet_1+'),transparent)';


        })
    }

}
</script>

<style lang="scss" >
.estilo-portada{
    article {
        div.step{
            .bullet{
                display: flex;
                margin:0;
                background-color: transparent;
            }
        }   
        div.step:nth-child(1){
            .bullet{
                margin:0;
                background-color: transparent;
            }
        }
        div.step{
            .bullet{
                height: 100%;
                p{
                    background: #000;
                    margin-top: auto;
                    margin-bottom: auto;
                }

            }
        }
    }
}

.cover {
  background: transparent;
  background-size: cover;
  background-position: center top;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;

  &.a11y-simplificada-none {
    display: none;
  }

  .cover-gradient {
    box-sizing: border-box;
    padding: 80px 24px;
    flex: 1;
    position: relative;
    z-index: 2;
    @include mediaquery('mov') {
      padding: 16px 24px;
    }

    .cover-title {
      color: var(--tipografia-color-1);
      font-weight: 500;
      max-width: 1156px;
      margin-top: 200px;
      margin-bottom: 8px;
      margin-left: auto;
      margin-right: auto;
    }
    .cover-subtitle {
      color: var(--tipografia-color-1);
      font-weight: 400;
      max-width: 500px;
      margin: 8px auto;

    }
  }
}

</style>