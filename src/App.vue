<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <p v-if="loading">Loading...</p>
  <p v-if="error">{{ error }}</p>
  <ul v-if="data">
    <li v-for="(user, index) in data" :key="index">
      <p>編號：{{ user.id }}</p>
      <p>姓名：{{ user.name }}</p>
      <p>電話：{{ user.phone }}</p>
      <p>信箱：{{ user.email }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMouse } from '@/composables/useMouse';
import { useFetch } from '@/composables/useFetch';

const { x, y } = useMouse();

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const { data, error, loading } = useFetch<User[]>(
  'https://jsonplaceholder.typicode.com/users',
);
</script>

<style></style>
