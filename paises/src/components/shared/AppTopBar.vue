<template>
  <v-container>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="../../assets/map.png"
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon
        color="black"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-app-bar-title id="title">Your country</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="grey--text text--accent-4"
        >
          <router-link to="/" class="link">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sortedByCapital" class="link">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-city-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sort by capital</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sortedByPopulation" class="link">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sort by population</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
#title {
  color: black;
}
.link {
  text-decoration: none;
}
</style>
