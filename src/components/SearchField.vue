<script setup>
import { input } from "@/services/input.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function pushWithReplace() {
  if (!input.input) {
    return;
  }
  router.push({
    name: "results",
    query: {
      input: input.input,
      lucky: 'false'
    },
  });

  if (route.name == "results") {
    route.query.input = input.input;
  }
}
</script>

<template>
  <div
    class="flex items-center w-full lg:ml-10 border rounded-full lg:max-w-3xl hover:shadow-md"
  >
    <div class="pl-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      @keyup.enter="pushWithReplace"
      type="text"
      v-model="input.input"
      class="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
    />
    <div class="pr-5">
      <svg
        @click="input.input = ''"
        id="crossIcon"
        v-if="input.input"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
</template>
