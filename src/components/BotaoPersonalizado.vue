<script>
export default{
  name: 'BotaoPersonalizado',
  props: {
    texto: {
      type: String,
      required: true
    },
    corDeFundo: {
      type: String,
      required: true
    },
    corDoTexto: {
      type: String,
      required: true
    },
    largura: {
      type: String,
      default: "auto"
    },
    arredondado: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    estilos() {
      return {
        backgroundColor: this.corDeFundo,
        color: this.corDoTexto,
        width: this.largura,
        borderRadius: this.arredondado ? "10px" : "3px",
        border: "none",
        cursor: "pointer",
        padding: "10px 15px",
        margin: "10px"
      }
    }
  }
}

</script>
<template>
 <button :style="estilos">
   {{texto}}
 </button>
</template>
<style>

</style>
