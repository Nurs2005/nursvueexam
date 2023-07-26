<template>
  <div class="usercard">
    <router-link :to="{ name: 'UserId', params: { id: props.userId } }">
      <h3>{{ props.name }} {{ props.surname }} {{ props.father }}</h3>
    </router-link>
    <p>{{ props.role }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  surname: string
  father: string
  role: string
  userId: number
}
const props = defineProps<Props>()
interface Emits {
  (e: 'openUser', userId: any): void
}
const emits = defineEmits<Emits>()
</script>

<style scoped>
  .usercard {
    border: 1px solid #ccc;
    width: 250px;
    height: 120px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: #333;
    font-family: 'Arial', sans-serif;
    transition: box-shadow 0.3s ease;
  }

  .usercard:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin: 0;
  }
  .usercard a {
    text-decoration: none;
    color: inherit;
  }

  .usercard a:hover {
    color: #007BFF;
  }
</style>
