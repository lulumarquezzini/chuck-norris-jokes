<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  if(localStorage.getItem('dark') == 'true'){
    document.body.classList.add('dark')
  }
});
</script>

<template>
  <RouterView />
</template>
