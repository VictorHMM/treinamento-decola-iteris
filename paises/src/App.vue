<template>
  <v-app id="main">
    <AppTopBar/>
      <v-main>
       <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'


export default {
  name: 'App',

  components: {
    AppTopBar,

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
