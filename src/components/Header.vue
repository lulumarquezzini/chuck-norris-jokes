<script setup>
import SearchField from "@/components/SearchField.vue";
import chuckNorris from "@/assets/chucknorris.png";
</script>

<template>
  <header className="sticky top-0 bg-white">
    <div className="flex flex-col lg:flex-row w-full p-6 items-center">
      <router-link to="/" className="mb-4 lg:mb-0">
        <img :src="chuckNorris" class="h-16 object-cover" />
      </router-link>
      <SearchField />
    </div>
  </header>
</template>
