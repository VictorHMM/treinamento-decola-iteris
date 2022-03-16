<template>
  <div id="app">
    <TesteContador/>
  </div>
</template>

<script>
import TesteContador from './components/TesteContador.vue'

export default {
  name: 'App',
  components: {
    TesteContador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
