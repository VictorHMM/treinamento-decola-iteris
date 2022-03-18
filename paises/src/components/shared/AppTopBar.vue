<template>
<v-container>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="../../assets/map.png"
      scroll-target="#scrolling-techniques-2"
    >

      <v-btn icon>
        <v-icon color="black">mdi-magnify</v-icon>
      </v-btn>

      <v-app-bar-title id="title">Your country</v-app-bar-title>

      <v-spacer></v-spacer>
    <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            color="black"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
    
        <v-list>
            <span class="ml-3">Sort by:</span>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Name</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Capital</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>Population</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
      
    }),
}
</script>

<style scoped>
#title {
    color: black;
    
}
</style>