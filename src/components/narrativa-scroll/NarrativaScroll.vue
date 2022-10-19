<template>
  <section class="contenedor narrativa-scroll" :id="id_scroll">
    <div class="fondo-narrativa">
      <div  
        v-for="(bullet, i) in bullets" 
        :key="i" 
        :class="`contenedor-fondo fondo-${i}`" 
        >
          <picture  >
            <source :srcset="bullet.imagen" media="(min-width: 769px)">
            <img :srcset="bullet.imagen" alt="">
          </picture>
      </div>
    </div>
    <article>
      <div  
        v-for="(bullet, i) in bullets" 
        :key="i" 
        :class="`step step-${i}`" 
        :data-step="i" 
        >
        <div class="bullet" v-html="bullet.html"></div>
      </div>
    </article>
  </section>
  
</template>

<script>
import scrollama from 'scrollama';

export default {
  name: 'NarrativaScroll',
  props: {
    id_scroll:{
      default:() =>  "scrolly-portada",
      type: String
    },
    bullets:{
      default:()=> [
        {id:"01" ,html: "<p>bullet 1</p>", imagen:"https://placekitten.com/1920/1080"},
        {id:"02" ,html: "<p>bullet 2</p>", imagen:"https://placekitten.com/1920/1082"},
      ],
      type: Array
    },
    debug:{
      type: Boolean,
      default: () => false
    } 
  },
  data(){
    return {
      y_scrolleado: null,
      y_scrolleado_normalizado: null,
    }
  },
  mounted(){
    this.inizializandoScrollama();

  },
  methods: {
    inizializandoScrollama() {
      this.scrolly = document.querySelector('#' + this.id_scroll);
      this.fondo_portada = this.scrolly.querySelector('div.fondo-narrativa');
      this.step = this.scrolly.querySelector('article').querySelectorAll('.step');

      this.scroller = scrollama()
      this.scroller.setup({
          step: `#${this.id_scroll} .step`,
          offset: 0.50,
          debug: this.debug
        })
        .onStepEnter(this.cambiandoPaso);

      this.reescalandoPantalla();

      window.addEventListener("resize", this.reescalandoPantalla);
      window.addEventListener("scroll",this.calculandoDistanciaScrolleada)


    },
    reescalandoPantalla() {
      this.scroller.resize();
    },
    cambiandoPaso(response) {
      this.paso = response.index;
      this.step.forEach((d, i) => i === response.index ? d.classList.add("activo") : d.classList.remove("activo"))
      this.fondo_portada.querySelectorAll(`.contenedor-fondo`).forEach(d => d.style.opacity = 0)
      console.log(this.fondo_portada)
      for(var i = 0 ; i < this.bullets.length; i++){
        if(this.paso === i){
          this.fondo_portada.querySelector(`.contenedor-fondo.fondo-${this.paso}`).style.opacity = 1

          //d3.select("div#fondo-narrativa").transition().duration(200).style("background-color","#8a8a8a")
        }
      }
    },
    calculandoDistanciaScrolleada(){
      var posicion_y_scrolly = this.scrolly.offsetTop;
      
      if(posicion_y_scrolly < window.pageYOffset){
        this.y_scrolleado = window.pageYOffset - posicion_y_scrolly;
        this.y_scrolleado_normalizado = this.y_scrolleado / this.scrolly.clientHeight;
      }
      
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.narrativa-scroll {
  position: relative;
  div.fondo-narrativa{
    position: -webkit-sticky;
    position: sticky;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
    height: 100vh;
    top: 0;
    width: 100%;
    left: 0;
    //display: flex;
    div.contenedor-fondo{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      opacity: 0;
      transition: all .5s;
      display: flex;
      overflow: hidden;
      &:nth-child(1){
        opacity: 1;

      }

      img{
          position: absolute;
          width:100%;
          max-width: 100%;
          height: 100%;
          left: 0;
          object-fit: cover;
          object-position: center;
        }
    }
  }
  article {
    top:-100vh;
    padding:0;
    color:#fff;
    @media (max-width: 768px) {
      top: -100vh;
      padding: 0;
    }
    position: relative;
    padding: 0;
    margin: 0 auto;
    div.step{
      height:100vh;
      position:relative;
      display: block;
      .bullet{
        display: flex;
        color:#fff;
        position:relative;
        padding:0 32px;
        @media (min-width: 768px) {
          margin-right: auto;
          margin-left:auto;
          //max-width: 31em;
        }
      }

      
    }
  }

}
</style>
