<script setup>
import chuckNorris from "@/assets/chucknorris.png";
import SearchField from "@/components/SearchField.vue";
import SearchButtons from "@/components/SearchButtons.vue";
import DarkMode from "@/components/DarkMode.vue";
</script>

<template>
  <DarkMode />
  <div class="flex flex-col items-center justify-center h-screen dark:bg-black">
    <div class="mb-6">
      <img
        :src="chuckNorris"
        alt="Chuck Norris Logo"
        class="object-cover h-48 hover:animate-pulse"
      />
    </div>
    <SearchField />
    <SearchButtons />
    <div class="mt-6">
      <div class="text-sm dark:text-white">
        Chuck Norris offered in:
        <span class="ml-2 text-blue-700">all languages</span>
      </div>
    </div>
  </div>
</template>
