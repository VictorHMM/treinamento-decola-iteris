<template>
  <v-app>
    <AppTopBar/>
      <v-main>
        <CountriesView/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
import CountriesView from './views/CountriesView.vue'

export default {
  name: 'App',

  components: {
    AppTopBar,
    CountriesView,
  },

  data: () => ({
    //
  }),
};
</script>
