<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Countries</h2>
        <CountriesList :countries="sortCountries"/>
    </v-container>
</template>

<script>
import CountriesList from '../components/CountriesList.vue';
export default {
    name: 'SortedPopulation',
    components: {
        CountriesList,
    },
    data: () => {
        return {
            countriesArray: []
        }
    },
    created() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((json) => {this.countriesArray = json})
    },
    computed: {
        sortCountries() {
            const sortedCountriesArray = this.countriesArray.slice(0)
            .sort((a, b) => a.population > b.population ? -1 : 1);
            return sortedCountriesArray;
        }
    }
}
</script>

<style scoped>
.text-h5 {
    color: #fff;
}
</style>