<script lang="ts">
import Exercicio3 from "@/components/Exercicio3.vue"
export default {
  name: "Exercicio3View",
  components: {
    Exercicio3
  },
  data() {
    return {
      listaDeCores: ['Red', 'Blue', 'Green', 'Yellow']
    }
  }
}
</script>
<template>
  <div>
    <h1>Exercicio 3</h1>
    <h2>Escolha sua cor favorita</h2>
    <exercicio3 :cores="listaDeCores"/>
  </div>
</template>

<style scoped>

</style>
