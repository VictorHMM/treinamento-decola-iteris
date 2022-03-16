<template>
    <div class="teste-api">
        <ul>
            <li v-for="site of sitesFavoritos" :key="site.id">
                <a :href="site.link">{{site.nome}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TesteAPI',
    data() {
        return {
            sitesFavoritos: []
        }
    },
    created() {
        fetch('https://hackthon-decola.firebaseio.com/sites-favoritos.json')
            .then(resultado => resultado.json())
            .then(json => {this.sitesFavoritos = json})
    }
}
</script>

<style scoped>

</style>