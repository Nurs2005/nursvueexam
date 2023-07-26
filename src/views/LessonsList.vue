<template>
  <div class="lessons-page">
    <div class="nav__lessons">
      <li>
        <router-link :to="{ name: 'LessonAdd' }" class="nav__link">Create New Lesson</router-link>
      </li>
    </div>
    <div class="lesson-cards">
      <lesson-card
        v-for="lesson in lessons"
        :key="lesson.id"
        :lesson-id="lesson.id"
        :name="lesson.name"
        :surname="lesson.surname"
        :father="lesson.father"
        :title="lesson.title"
        :time="lesson.time"
      ></lesson-card>
      <p v-if="lessons.length === 0" class="empty-lessons">No lessons found. Create a new lesson now!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LessonCard from '@/components/LessonCard.vue'

const data = []
onMounted(() => {
  if (!localStorage.getItem('LessonsData')) {
    localStorage.setItem('LessonsData', JSON.stringify(data))
  }
})
const lessons = ref(JSON.parse(localStorage.getItem('LessonsData') as string))
</script>

<style scoped>
  .lessons-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .nav__lessons {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }

  .nav__link {
    font-size: 18px;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav__link:hover {
    color: #0056b3;
  }

  .lesson-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 30px;
  }

  .lesson-card {
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .lesson-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .lesson-card p {
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .empty-lessons {
    text-align: center;
    color: #999;
    margin-top: 50px;
  }
</style>
