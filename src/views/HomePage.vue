<template>
  <div class="container">
    <h1>Home page</h1>
    <ul class="navigation">
      <li>
        <router-link :to="{ name: 'UserPage' }">Users</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'LessonPage' }">Lessons</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(11, 12, 12);
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

ul.navigation {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 15px;
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.2s ease;
  border-bottom: 2px solid transparent;
}

a:hover {
  color: lightblue;
  border-bottom: 2px solid lightblue;
}

/* Adding some animation to the navigation */
.navigation li {
  animation: fadeInUp 0.5s ease both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
