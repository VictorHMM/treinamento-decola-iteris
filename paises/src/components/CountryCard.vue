<template>
    <v-card
    class="mx-auto"
    max-width="290"
  >
    <v-img
      :src="countryObj.flags.png"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      class="white--text align-end"
      height="200px"
    >
    <v-card-title v-text="countryObj.name.common"></v-card-title>
    
    </v-img>
    <v-card-subtitle>
      Capital: <span v-for="city in countryObj.capital" :key="city">{{city}} </span>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'CountryCard',
    props: {
        countryObj: {
            required: true
        }
    }
}
</script>

<style scoped>

</style>