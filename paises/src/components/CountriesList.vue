<template>
    <v-container fluid>
        <v-col
          v-for="country in countries"
          :key="country.name.common"
          cols="12"
        >
          <v-card>
            <v-img
              :src="country.flags.png"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="country.name.common"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    countries: {
        type: Array,
        required: true
    }
  },
}
</script>

<style scoped>

</style>