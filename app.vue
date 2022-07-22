<script setup>
import './assets/css/main.css';
// import { useQuery } from 'vue-query';

const { data } = await useAsyncQuery(['getUsers']);
// const client = useClient(); // auto-imported
// const data = ref([]);
// const user = ref([]);
// onMounted(() => {
// client.query('getUsers').then((res) => {
//   data.value = res;
// });

// const { data: userRes } = useQuery('todos', () => 'hi');
// user.value = userRes;
// });
// client.
// user.value;
// client.
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <!-- <pre>{{ user }}</pre> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>
