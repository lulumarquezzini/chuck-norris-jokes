<script setup>
import IconAll from "@/components/icons/IconAll.vue";
import IconAnimal from "@/components/icons/IconAnimal.vue";
import IconCelebrity from "@/components/icons/IconCelebrity.vue";
import IconDev from "@/components/icons/IconDev.vue";
import IconExplicit from "@/components/icons/IconExplicit.vue";
import IconFashion from "@/components/icons/IconFashion.vue";
import IconFood from "@/components/icons/IconFood.vue";
import IconHistory from "@/components/icons/IconHistory.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
import IconMovie from "@/components/icons/IconMovie.vue";
import IconMusic from "@/components/icons/IconMusic.vue";
import IconPolitical from "@/components/icons/IconPolitical.vue";
import IconReligion from "@/components/icons/IconReligion.vue";
import IconScience from "@/components/icons/IconScience.vue";
import IconSports from "@/components/icons/IconSports.vue";
import IconTravel from "@/components/icons/IconTravel.vue";
import MenuOptions from "@/components/MenuOptions.vue";
const props = defineProps(["selected"]);
</script>
<template>
  <div
    className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base md:justify-start lg:space-x-36  boarer-b font-OpenSans"
  >
    <div className="grid grid-cols-8 w-full md:flex md:space-x-6">
      <MenuOptions
        :selected="props.selected"
        category="all"
        @setCategory="$emit('setCategory', 'all')"
      >
        <IconAll />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="animal"
        @setCategory="$emit('setCategory', 'animal')"
      >
        <IconAnimal />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="celebrity"
        @setCategory="$emit('setCategory', 'celebrity')"
      >
        <IconCelebrity />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="dev"
        @setCategory="$emit('setCategory', 'dev')"
      >
        <IconDev />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="explicit"
        @setCategory="$emit('setCategory', 'explicit')"
      >
        <IconExplicit />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="fashion"
        @setCategory="$emit('setCategory', 'fashion')"
      >
        <IconFashion />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="food"
        @setCategory="$emit('setCategory', 'food')"
      >
        <IconFood />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="history"
        @setCategory="$emit('setCategory', 'history')"
      >
        <IconHistory />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="money"
        @setCategory="$emit('setCategory', 'money')"
      >
        <IconMoney />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="movie"
        @setCategory="$emit('setCategory', 'movie')"
      >
        <IconMovie />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="music"
        @setCategory="$emit('setCategory', 'music')"
      >
        <IconMusic />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="political"
        @setCategory="$emit('setCategory', 'political')"
      >
        <IconPolitical />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="religion"
        @setCategory="$emit('setCategory', 'religion')"
      >
        <IconReligion />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="science"
        @setCategory="$emit('setCategory', 'science')"
      >
        <IconScience />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="sports"
        @setCategory="$emit('setCategory', 'sports')"
      >
        <IconSports />
      </MenuOptions>
      <MenuOptions
        :selected="props.selected"
        category="travel"
        @setCategory="$emit('setCategory', 'travel')"
      >
        <IconTravel />
      </MenuOptions>
    </div>
  </div>
</template>
