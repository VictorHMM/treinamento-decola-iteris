<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Tabela de classificação</h2>
    <TabelaClubes :clubes="listaClubes"/>
  </v-container>
</template>

<script>
import TabelaClubes from '../components/TabelaClubes.vue'
export default {
  name: 'ListaClubes',
  components: {
    TabelaClubes
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
};
</script>

<style scoped></style>
