<template>
  <div>
    <div class="nav__users">

      <li>
        <router-link :to="{ name: 'UserAdd' }">Users</router-link>
      </li>
    </div>
    <user-card
      v-for="user in users"
      :key="user.id"
      :user-id="user.id"
      :name="user.name"
      :surname="user.surname"
      :father="user.father"
      :role="user.role"
    ></user-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserCard from '@/components/UserCard.vue'
const data = [
  
]
onMounted(() => {
    if(!localStorage.getItem('UsersData')){
        localStorage.setItem('UsersData', JSON.stringify(data))
    }
})
const users = ref(JSON.parse(localStorage.getItem('UsersData') as string))

</script>

<style scoped>
.nav__users {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px;
}
</style>
