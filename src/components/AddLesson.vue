<template>
  <div>
    <input type="text" name="title" id="title" placeholder="title" v-model="lesson.title" /><br />
    <select name="teacher" id="teacher" v-model="fullname">
      <option value="None">None</option></select
    ><br />
    <input type="text" name="time" id="time" placeholder="19:00" v-model="lesson.time" /><br />
    <input
      type="text"
      name="discription"
      id="discription"
      placeholder="discription"
      v-model="lesson.discription"
    /><br />
    <form id="students">
      <checkbox-student
        v-for="student in students"
        :key="student.id"
        :id="student.id"
        :name="student.name"
      ></checkbox-student>
    </form>
    <button @click="lessonAddData(lesson)">Сохранить</button><br />
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Lesson } from '@/types/lesson'
import CheckboxStudent from '@/components/CheckboxStudent.vue'
const fullname = ref(``)
const lesson = ref<Lesson>({
  name: ``,
  surname: ``,
  father: ``,
  title: '',
  discription: '',
  time: ''
})
const teachers: any = []
const students: any = ref([])
onMounted(() => {
  const users = JSON.parse(localStorage.getItem('UsersData') as string)
  users.forEach((user: any) => {
    if (user.role == 'teacher') {
      let teacher = {
        id: user.id,
        fullName: `${user.name} ${user.surname} ${user.father}`
      }
      teachers.push(teacher)
    } else if (user.role.toLowerCase() == 'student') {
      let student = {
        id: user.id,
        name: `${user.name}`
      }
      students.value.push(student)
    }
  })
  let select = document.querySelector(`#teacher`)
  for (let teacher of teachers) {
    let option = document.createElement('option')
    option.setAttribute('value', teacher.fullName)
    option.innerHTML = `${teacher.fullName}`
    select?.appendChild(option)
  }
})
function lessonAddData(obj: any) {
  let lessons = JSON.parse(localStorage.getItem('LessonsData') as string)
  let currentName = fullname.value.split(' ')
  obj.name = currentName[0]
  obj.surname = currentName[1]
  obj.father = currentName[2]
  const form = document.querySelector('#students')
  const body = Object.fromEntries(new FormData(form as HTMLFormElement).entries())
  let newLesson = Object.assign({ id: new Date().getTime() } as Lesson, obj, {students:body})

  console.log(lessons, newLesson)
  
  lessons.push(newLesson)
  localStorage.setItem('LessonsData', JSON.stringify(lessons))
  location.replace(`http://127.0.0.1:5173/lessons/${newLesson.id}`)
}
function cancel() {
  location.replace('http://127.0.0.1:5173/lessons')
}
</script>

<style scoped>
  .lesson-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  input[type='text'],
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%226%22%20viewBox%3D%220%200%2012%206%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M11.293%202.293a1%201%200%200%200-1.414%201.414l-4%204a1%201%200%200%200%201.414%201.414L12%203.414V1a1%201%200%200%200-1-1H1a1%201%200%200%200-1%201v2.414l2.293-2.293a1%201%200%200%200-1.414-1.414l-4%204a1%201%200%200%200%200%201.414l4%204a1%201%200%200%200%201.414-1.414L1.414%206H11a1%201%200%200%200%201%20-1V2a1%201%200%200%200-.707-.949z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px 6px;
  }
  .checkbox-student {
    display: block;
    margin-bottom: 5px;
  }

  .btn-save,
  .btn-cancel {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .btn-save:hover,
  .btn-cancel:hover {
    background-color: #0056b3;
  }
</style>
