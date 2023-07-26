<template>
  <div class="user">
    <div class="usercard">
      <router-link :to="{ name: 'LessonId', params: { id: props.lessonId } }">
        <h3>{{ props.title }}</h3>
      </router-link>
      <h4>{{ props.name }} {{ props.surname }} {{ props.father }}</h4>
      <p>{{ props.time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  surname: string
  father: string
  title: string
  time: string
  lessonId: number
}
const props = defineProps<Props>()
</script>

<style scoped>
  .usercard {
    width: 200px;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    color: #333;
    font-family: Arial, sans-serif;
    transition: box-shadow 0.3s ease;
    text-decoration: none;
  }

  .usercard:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
  }

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #777;
  }
</style>
