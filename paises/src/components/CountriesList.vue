<template>
    <v-container fluid>
        <v-col
          v-for="country in countries"
          :key="country.name.common"
          cols="12"
        >
          <CountryCard :countryObj="country"/>
        </v-col>
  </v-container>
</template>

<script>
import CountryCard from './CountryCard.vue'
export default {
  name: 'CountriesList',
  components: {
      CountryCard
  },
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