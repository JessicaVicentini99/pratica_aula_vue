<script>
export default {
  name: 'Exercicio3',
  props: ['cores'],
  data() {
    return {
      corSelecionada: null
    }
  },
  methods: {
    selecionarCor(cor) {
      this.corSelecionada = cor
    }
  }
}
</script>
<template>
  <div>
    <h2 :style="{color: corSelecionada}">
      Voce selecionou a cor: {{ corSelecionada || 'Nenhuma cor selecionada' }}
    </h2>
    <ul>
      <li
        v-for="(cor, index) in cores"
        :key="index"
        @click="corSelecionada = cor"
      >
        {{index}} - {{cor}}
      </li>
    </ul>
  </div>
</template>
<style>

</style>
