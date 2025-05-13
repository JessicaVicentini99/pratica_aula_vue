<script>
import Pratica from '@/components/Pratica.vue'

export default {
  components: {Pratica},
  data(){
    return {
      msgPai: 'Essa é a mensagem do componente pai',
      listaCores: ['red', 'blue', 'green', 'yellow'],
    }
  }
}
</script>
<template>
  <div>
    <h1>Pagina de pratica das aulas</h1>
    <b>:)</b>
    <pratica
      :mensagemPai="msgPai"
      :numeroPai="15"
      :cores="listaCores"
    />
  </div>
</template>
<style>

</style>
