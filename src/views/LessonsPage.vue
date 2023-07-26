<template>
    <div>
        <h1>Lessons Page</h1>
        <button @click="toMain()">Home Page</button>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
function toMain(){
    location.replace('http://127.0.0.1:5173')
}
</script>

<style scoped>
</style>