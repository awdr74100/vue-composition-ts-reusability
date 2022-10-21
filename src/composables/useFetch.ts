import { ref, type Ref } from 'vue';

export const useFetch = <T>(url: string) => {
  const data = ref<null | Ref<T>>(null);
  const error = ref<null | Error>(null);
  const loading = ref(false);

  const doFetch = async () => {
    try {
      loading.value = true;
      data.value = await fetch(url).then((res) => res.json() as T);
      loading.value = false;
    } catch (err) {
      if (err instanceof Error) error.value = err;
      else error.value = new Error(String(err));
      loading.value = false;
    }
  };

  doFetch();

  return { data, error, loading };
};
