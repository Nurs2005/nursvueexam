<template>
  <div class="users-page">
    <h1>Users Page</h1>
    <ul class="nav-links">
      <li>
        <router-link :to="{ name: 'HomePage' }" class="nav-link">Главная</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .users-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  .nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .nav-link:hover {
    background-color: #0056b3;
  }

  .router-view-content {
    margin-top: 30px;
  }
</style>
