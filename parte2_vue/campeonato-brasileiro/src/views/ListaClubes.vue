<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Tabela de classificação</h2>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Clube</th>
          <th class="text-right">Pontos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(clube, index) of listaClubes" :key="clube.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="24">
              <img :src="clube.escudo" :alt="clube.nome" />
            </v-avatar>
            <span class="pl-2">{{ clube.nome }}</span>
          </td>
          <td class="text-right">{{ clube.pontos }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>

export default {
  name: 'ListaClubes',
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
