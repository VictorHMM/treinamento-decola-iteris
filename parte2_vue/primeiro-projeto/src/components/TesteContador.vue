<template>
    <div class="teste-contador">
        <span>Contador: {{ contador }}</span>
        <div id="botoes">
            <button @click="decrementa()">-</button>
            <button @click="incrementa()">+</button>
        </div>
  </div>
</template>

<script>
export default {
    name: 'TesteContador',
    data() {
        return{
            contador: 0
        }
    },
    methods: {
        incrementa() {
            this.contador++;
        },
        decrementa() {
            this.contador--;
        }
    }

}
</script>

<style scoped>

</style>