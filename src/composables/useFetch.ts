import { type Ref, ref, isRef, unref, watchEffect } from 'vue';

export const useFetch = <T>(url: string | Ref<string>) => {
  const data = ref<null | Ref<T>>(null);
  const error = ref<null | Error>(null);

  const doFetch = async () => {
    data.value = null;
    error.value = null;

    try {
      data.value = await fetch(unref(url)).then((res) => res.json() as T);
    } catch (err) {
      if (err instanceof Error) error.value = err;
      else error.value = new Error(String(err));
    }
  };

  if (isRef(url)) watchEffect(doFetch);
  else doFetch();

  return { data, error };
};
