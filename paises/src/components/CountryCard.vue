<template>
  <v-card class="mx-auto" max-width="290">
    <v-img
      :src="countryObj.flags.png"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      class="white--text align-end"
      height="200px"
    >
      <v-card-title v-text="countryObj.name.common"></v-card-title>
    </v-img>
    <v-card-subtitle>
      <span>{{ countryObj.subregion }} </span>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Capital:
          <span v-for="city in countryObj.capital" :key="city"
            >{{ city }}
          </span>
          <br />
          Population: <span>{{ countryObj.population }} </span>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "CountryCard",
  data: () => ({
    show: false,
  }),
  props: {
    countryObj: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
