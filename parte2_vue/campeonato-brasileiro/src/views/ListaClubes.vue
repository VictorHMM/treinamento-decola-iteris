<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Tabela de classificação</h2>
    <TabelaClubes :clubes="clubesOrdenados"/>
  </v-container>
</template>

<script>
import TabelaClubes from '../components/TabelaClubes.vue'
export default {
  name: 'ListaClubes',
  components: {
    Tabela
  },
  data() {
    return {
      listaClubes: [],
    };
  },
  created() {
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
      .then(response => response.json())
      .then((json) => {
        this.listaClubes = json;
      });
  },

  computed: {
    clubesOrdenados() {
      const listaComputada = this.listaClubes.slice(0).sort((a, b) => a.pontos > b.pontos ? -1 : 1);
      return listaComputada;
    }
  }


};
</script>

<style scoped></style>
