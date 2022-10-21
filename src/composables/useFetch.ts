import { ref, type Ref } from 'vue';

export const useFetch = <T>(url: string) => {
  const data = ref<null | Ref<T>>(null);
  const error = ref<null | Error>(null);

  fetch(url)
    .then((res) => res.json() as T)
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
};
