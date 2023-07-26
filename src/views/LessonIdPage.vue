<template>
  <div class="lesson-page">
    <h2>{{ currentLesson.title }}</h2>
    <div class="lesson-details">
      <span class="time">{{ currentLesson.time }}</span>
      <span class="name">{{ currentLesson.name }} {{ currentLesson.surname }} {{ currentLesson.father }}</span>
    </div>
    <p>{{ currentLesson.description }}</p>

    <table class="students-table">
      <tr>
        <th>Students Name</th>
      </tr>
      <tr v-for="student in students" :key="student">
        <td>{{ student }}</td>
      </tr>
    </table>

    <router-link :to="{ name: 'LessonPage' }" class="back-link">Back to Lessons</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Lesson } from '@/types/lesson'
import TableStudents from '@/components/TableStudents.vue'

interface Props {
  id: string
}

const props = defineProps<Props>()
const currentLesson = ref<Lesson>({} as Lesson)
const students = ref<string[]>([])

onMounted(() => {
  const lessons = JSON.parse(localStorage.getItem('LessonsData') as string)
  lessons.forEach((item: any) => {
    if (item.id == props.id) currentLesson.value = item
  })
  students.value = Object.keys(currentLesson.value.students)
})
</script>

<style scoped>
  .lesson-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .lesson-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .time {
    color: #999;
  }

  .name {
    font-weight: bold;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .students-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th {
    background-color: #f2f2f2;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .back-link {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .back-link:hover {
    background-color: #0056b3;
  }
</style>
