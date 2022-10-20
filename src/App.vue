<template>
  <button @click.prevent="increment(1)">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = (num: number) => {
  count.value += num;
};
</script>

<style></style>
