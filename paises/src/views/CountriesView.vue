<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Countries</h2>
        <CountriesList :countries="sortCountries"/>
    </v-container>
</template>

<script>
import CountriesList from '../components/CountriesList.vue';
export default {
    name: 'CountriesListView',
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
            .sort((a, b) => a.name.common.localeCompare(b.name.common));
            return sortedCountriesArray;
        }
    }
}
</script>

<style scoped>

</style>