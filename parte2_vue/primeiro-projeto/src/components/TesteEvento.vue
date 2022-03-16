<template>
    <div class="teste-evento">
        <p @click="changeCase()">{{nome}}</p>
    </div>
</template>

<script>
export default {
    name: 'TesteEvento',
    data() {
        return {
            nome: 'Victor Medeiros'
        }
    },
    methods: {
        changeCase() {
            if (this.nome.localeCompare(this.nome.toUpperCase()) === 0) {
                this.nome = this.nome.toLowerCase();
            }else {
                this.nome = this.nome.toUpperCase();
            }
        }
    }
}
</script>

<style scoped>

</style>