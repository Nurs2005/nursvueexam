<template>
  <div>
    <input type="text" name="name" id="name" placeholder="name" v-model="user.name" /><br>
    <input type="text" name="surname" id="surname" placeholder="surname" v-model="user.surname" /><br>
    <input type="text" name="father" id="father" placeholder="father name" v-model="user.father" /><br>
    <select name="role" v-model="user.role">
      <option value="teacher">Учитель</option>
      <option value="student">Студент</option>
    </select>
    <input type="text" name="role" id="role" placeholder="role" v-model="user.role" /><br>
    <input type="date" name="birth" id="birthDate" v-model="user.birthDate" /><br>
    <button @click="userAddData(user)">Сохранить</button><br>
    <button @click="cancel()">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/types/user'

const user = ref<User>({
  name: '',
  surname: '',
  father: '',
  role: '',
  birthDate: ''
})
function userAddData(obj: object){
  const users = JSON.parse(localStorage.getItem('UsersData') as string)
  let newUser = Object.assign({ id: new Date().getTime() } as User, obj)
  users.push(newUser)
  localStorage.setItem('UsersData', JSON.stringify(users))
  location.replace(`http://127.0.0.1:5173/users/${newUser.id}`)
}
function cancel(){
  location.replace('http://127.0.0.1:5173/users')
}
</script>

<style scoped>
  .user-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  input[type='text'],
  input[type='date'],
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
