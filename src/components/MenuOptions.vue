<script setup>
const props = defineProps(['category', 'selected'])

</script>
<template>
    <div
    @click="$emit('setCategory', props.category)"
    class='flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-400 
    hover:border-blue-400 pb-2 cursor-pointer group'
    :class="{'text-blue-500': props.selected == props.category}"
    >   
        <slot></slot>
        <p className="hidden group-hover:inline-flex text-sm">{{ props.category[0].toUpperCase() + props.category.slice(1) }}</p>
    </div>
</template>