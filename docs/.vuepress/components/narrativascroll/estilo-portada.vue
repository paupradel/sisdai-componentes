<template>
  <NarrativaScroll
    :ref="id_scroll"
    class="estilo-portada"
    :id_scroll="id_scroll"
    :bullets="[
      {
        id: '01',
        html: `<div class=&quot;cover&quot; >
    <div class=&quot;cover-gradient&quot;>
      <h1 class=&quot;cover-title titulo-capitulo&quot;>Título de capítulo o subcapítulo perteneciente a un ENI</h1>
      <h2 class=&quot;cover-subtitle subtitulo-capitulo&quot;>
        Un capítulo del Ecosistema Nacional Informático de PRONACE
      </h2>
    </div>
  </div>`,
        imagen: 'https://placekitten.com/1920/1080',
      },
      {
        id: '02',
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1082',
      },
      {
        id: '03',
        html: '<p>bullet 3</p>',
        imagen: 'https://placekitten.com/1921/1083',
      },
      {
        id: '04',
        html: '<p>bullet 4</p>',
        imagen: 'https://placekitten.com/1920/1074',
      },
    ]"
    :debug="false"
  ></NarrativaScroll>
</template>
<script>
export default {
  name: 'NarrativaScrollEstiloPortada',
  props: {
    id_scroll: String,
  },
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', () => {
      var y_bullet_1 =
        1 -
        this.$refs[this.id_scroll].y_scrolleado /
          (this.$refs[this.id_scroll].scrolly.clientHeight / 4)
      this.y_scrolleado_normalizado =
        this.$refs[this.id_scroll].y_scrolleado_normalizado
      var bullets = document
        .querySelector(`#${this.id_scroll}`)
        .querySelectorAll('.bullet')
      var alpha = 1 - this.y_scrolleado_normalizado / bullets.length
      console.log(alpha, this.y_scrolleado_normalizado / bullets.length)
      bullets[0].style.background =
        'linear-gradient(transparent,rgba(0,0,0,' + y_bullet_1 + '))'
      bullets[1].style.background =
        'linear-gradient(rgba(0,0,0,' + y_bullet_1 + '),transparent)'
    })
  },
}
</script>

<style lang="scss">
.estilo-portada {
  article {
    div.step {
      .bullet {
        display: flex;
        margin: 0;
        background-color: transparent;
      }
    }
    div.step:nth-child(1) {
      .bullet {
        margin: 0;
        background-color: transparent;
      }
    }
    div.step {
      .bullet {
        height: 100%;
        p {
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
