<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <ul>
    <template v-if="!users">
      <p>Loading...</p>
    </template>
    <template v-else-if="error">
      <p>{{ error.message }}</p>
    </template>
    <template v-else>
      <li v-for="({ id, name, email }, index) in users" :key="index">
        <p>識別碼：{{ id }}</p>
        <p>姓名：{{ name }}</p>
        <p>信箱：{{ email }}</p>
      </li>
    </template>
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
}

const { data: users, error } = useFetch<User[]>(
  'https://jsonplaceholder.typicode.com/users',
);
</script>

<style></style>
