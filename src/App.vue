<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <ul>
    <li v-for="num in 5" :key="num">
      <button @click.prevent="id = num">編好：{{ num }}</button>
    </li>
  </ul>
  <p v-if="!error && !user">Loading...</p>
  <p v-if="error">Oops! Error encountered: {{ error.message }}</p>
  <div v-if="user">
    <p>編號：{{ user.id }}</p>
    <p>姓名：{{ user.name }}</p>
    <p>電話：{{ user.phone }}</p>
    <p>信箱：{{ user.email }}</p>
  </div>
  <input type="text" v-focus v-color="color" />
</template>

<script setup lang="ts">
import { type Directive, ref, computed } from 'vue';
import { useMouse } from '@/composables/useMouse';
import { useFetch } from '@/composables/useFetch';
import type { User } from './types';

const { x, y } = useMouse();

const id = ref(1);
const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const url = computed(() => `${baseUrl}/${id.value}`);
const { data: user, error } = useFetch<User>(url);

const vFocus: Directive<HTMLInputElement> = {
  mounted(el) {
    el.focus();
  },
};

const color = ref('red');
const vColor: Directive<HTMLElement, string> = (el, binding) => {
  el.style.color = binding.value;
};
</script>

<style></style>
