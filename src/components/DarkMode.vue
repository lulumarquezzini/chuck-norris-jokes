<script setup>
import { ref, watchEffect } from "vue";
const darkMode = ref(document.body.classList.contains("dark"));

function applyDarkMode() {
  document.body.classList[darkMode.value ? "add" : "remove"]("dark");
  localStorage.setItem("dark", JSON.stringify(darkMode.value));
}

watchEffect(applyDarkMode);
</script>

<template>
  <header
    className="flex w-full p-5 justify-end text-sm text-gray-800 dark:bg-black"
  >
    <div className="flex space-x-4 items-center">
      <button @click="darkMode = !darkMode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 dark:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white hidden dark:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
