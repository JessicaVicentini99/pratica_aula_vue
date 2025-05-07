<script>
import BotaoPersonalizado from "@/components/BotaoPersonalizado.vue";

export default{
  components: {
    BotaoPersonalizado
  }
}

</script>
<template>
  <h1>Pratica Botao</h1>
  <botao-personalizado
    texto="Confirmar"
    cor-de-fundo="#4dd523"
    cor-do-texto="white"
    largura="120px"
    :arredondado="true"
  />
  <botao-personalizado
    texto="Cancelar"
    cor-de-fundo="red"
    cor-do-texto="white"
  />
</template>
<style>

</style>
