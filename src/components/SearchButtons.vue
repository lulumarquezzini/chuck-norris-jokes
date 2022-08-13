<script setup>
import { input } from "@/services/input.js";
import { useRouter } from "vue-router";

const router = useRouter();

function pushWithQuery(event) {
  if (!input.input) {
    return;
  }
  router.push({
    name: "results",
    query: {
      input: input.input,
      lucky: event.target.innerText != "Search" ?? false,
    },
  });
}
</script>

<template>
  <div class="flex gap-x-6 mt-4">
    <button
      @click="pushWithQuery"
      class="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50"
    >
      Search
    </button>
    <button
      @click="pushWithQuery"
      class="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50"
    >
      I'm Feeling Lucky
    </button>
  </div>
</template>
