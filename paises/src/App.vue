<template>
  <v-app id="main">
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

<style>
#main {
    background-image: url("./assets/wallpaper.jpg");
    background-repeat: repeat;
    background-size: 100%;
    background-attachment: fixed;
}

</style>
