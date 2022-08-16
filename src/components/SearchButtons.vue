<script setup>
import { input } from "@/services/input.js";
import { useRouter } from "vue-router";
import { translation } from "@/services/translation.js"

const router = useRouter();

function pushWithQuery(event) {
  if (!input.input) {
    return;
  }
  router.push({
    name: "results",
    query: {
      input: input.input,
      lucky: event.target.id != "searchButton" ?? false,
    },
  });
}
</script>

<template>
  <div class="flex gap-x-6 mt-4">
    <button
      id="searchButton"
      @click="pushWithQuery"
      class="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50"
    >
      {{translation('Search')}}
    </button>
    <button
      id="luckyButton"
      @click="pushWithQuery"
      class="px-3 py-2 text-base font-light cursor-pointer hover:shadow bg-gray-50"
    >
      {{translation("I'm Feeling Lucky") }}
    </button>
  </div>
</template>
