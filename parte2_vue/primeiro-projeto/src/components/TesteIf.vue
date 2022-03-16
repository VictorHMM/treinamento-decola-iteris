<template>
    <div class="teste-if">
        <h1 v-if="podeVer">Teste condicional</h1>
    </div>
</template>

<script>
export default {
    name: 'TesteIf',
    data() {
        return {
            podeVer: true
        }
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Times New Roman', Times, serif;
    color: bisque;
}
</style>