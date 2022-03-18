<template>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="../../../public/map.png"
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>

      <v-app-bar-title id="title">Your country</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="black">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="black">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="black">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppTopBar',
}
</script>

<style scoped>
#title {
    color: black;
    
}
</style>