<script setup>
import Header from "@/components/Header.vue";
import { input } from "@/services/input.js";
import { api } from "@/services/api.js";
import { reactive, onMounted, watch, computed, ref } from "vue";
import { useRoute } from "vue-router";
import CategoryOptions from "@/components/CategoryOptions.vue";

const route = useRoute();

const list = reactive({
  result: [],
  total: 0,
  categories: [],
  found: true,
  loading: false,
  category: "all",
  numberShown: 10,
});

const filteredList = computed(() => {
  if (list.category == "all") {
    list.total = list.result.length;
    list.found = list.total > 0 ?? false;
    return list.result;
  }
  const filtered = list.result.filter(
    (card) => !card.categories.indexOf(list.category)
  );
  list.total = filtered.length;
  list.found = list.total > 0 ?? false;
  return filtered;
});

watch(
  () => route.query.input,
  async (newParam) => {
    if (newParam) {
      await fetchResults();
    }
  }
);

onMounted(() => {
  input.input = route.query.input;

  fetchResults();
});

async function fetchResults() {
  try {
    list.loading = true;
    list.found = true;
    await api.get(`/search?query=${input.input}`).then((response) => {
      list.result =
        route.query.lucky == "true"
          ? response.data.result.slice(0, 1)
          : response.data.result;
      list.total = response.data.total;
      list.found = response.data.total ?? false;
      list.loading = false;
    });
  } catch (e) {
    console.error(e);
    list.found = false;
    list.loading = false;
  }
}
</script>

<template>
  <div class="">
    <Header />
    <div className="mx-auto w-full px-3 sm:pl-[5%] lg:pl-44 font-OpenSans">
      <CategoryOptions
        :selected="list.category"
        :lucky="route.query.lucky"
        @setCategory="(category) => (list.numberShown = 10, list.category = category)"
      />
      <p v-if="list.found" className="text-gray-500 text-md mb-5 mt-3">
        {{
          route.query.lucky == "true"
            ? "Your lucky result is: "
            : "About " + list.total + " results"
        }}
      </p>
      <div
        v-for="item in filteredList.slice(0, list.numberShown)"
        :key="item"
        className="max-w-3xl mb-8 font-sans shadow-lg rounded overflow-hidden list"
      >
        <p className="line-clamp-2 text-gray-900 font-OpenSans px-6 py-4">
          {{ item.value }}
        </p>
        <div class="px-6 pt-4 pb-2">
          <span
            v-if="!item.categories.length"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            no category
          </span>
          <template v-for="category in item.categories" :key="category">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ category }}
            </span>
          </template>
        </div>
      </div>
      <button v-if="list.found && list.total > list.numberShown" @click="list.numberShown += 10" class="bg-gray-300 w-full mb-4 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l max-w-3xl">
        Show More
      </button>
      <div
        v-if="list.loading"
        class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2"
      >
        <div
          class="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-64 w-64"
        ></div>
      </div>
      <div
        v-if="!list.found"
        class="px-20 py-20 max-w-3xl mb-8 font-sans overflow-hidden bg-white rounded-md"
      >
        <div class="flex flex-col items-center">
          <h6
            class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
          >
            <span class="text-red-500">Oops!</span> Joke not found
          </h6>

          <p class="mb-8 text-center text-gray-500 md:text-lg">
            That's because there are no Chuck Norris Jokes, only Chuck Norris
            Facts.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
