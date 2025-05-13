<script>
export default {
  name: 'Pratica',
  props: {
    mensagemPai: String,
    numeroPai: Number,
    cores: Array
  },
  data() {
    return {
      msg: 'Hello World',
      numero: 123,
      contador: 0,
      items: [1, 2, 3],
      items_objetos: [
        {id: 1, name: 'Joao'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Jose'}
      ]
    }
  },

  methods: {
    incrementarContador() {
      this.contador++
    }
  }
}
</script>
<template>
  <div>
    {{cores}}
    <h3>Este é um componente</h3>
    <h2>{{ msg }}</h2>
    <br>
    <h2>O contador é: {{ contador }}</h2>
    <button @click="incrementarContador">
      Incrementar Codntador
    </button>

    <h1>{{ mensagemPai }}</h1>

    <h1>{{ numeroPai }}</h1>

    <h2>{{ items }}</h2>

    <div v-for="item in items" :key="item">
      <h2>Numero: {{ item }}</h2>
    </div>

    {{ items_objetos }}

    <div v-for="item in items_objetos" :key="item.id">
      ID: {{item.id}} - Nome: {{item.name}}
    </div>

    <div v-for="(item, posicao) in items_objetos" :key="item.id">
      Indice: {{posicao}} - ID: {{item.id}} - Nome: {{item.name}}
    </div>
  </div>
</template>
<style>

</style>
