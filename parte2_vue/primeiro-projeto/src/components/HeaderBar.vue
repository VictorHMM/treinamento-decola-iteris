<template>
    <div class="header-bar">
        <button type="button" id="menu">
            <img id="icon" src="../assets/menu_icon.png" alt="Menu">
        </button>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar'
}
</script>

<style scoped>
.header-bar {
    width: 100%;
    height: 15%;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
}
#icon {
    width: 50px;
    height: 50px;
}
</style>