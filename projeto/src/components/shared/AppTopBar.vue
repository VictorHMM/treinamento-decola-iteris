<template>
  <v-container>
    <v-app-bar
      app
      prominent
      color="#fcb69f"
      dark
      src="./../../../public/river.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
    <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-checks</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Your list</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>Todo list</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
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

<style scoped></style>
