import { ref, type Ref } from 'vue';

export const useFetch = <T>(url: string) => {
  const data = ref<null | Ref<T>>(null);
  const error = ref<null | Error>(null);
  const loading = ref(true);

  fetch(url)
    .then((res) => res.json() as T)
    .then((json) => {
      data.value = json;
      loading.value = false;
    })
    .catch((err) => {
      error.value = err;
      loading.value = false;
    });

  return { data, error, loading };
};
