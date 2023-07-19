<template>
    <div>
        <div class="w-full">
            <slot/>
        </div>
        <div class="flex justify-between text-base text-[#646876] mt-6">
            <div>{{ date }}</div>
            <div class="underline">{{ author }}</div>
        </div>
        <div class="flex gap-4 text-sm mt-2">
            <a :class="item.style" :href="item.url" target="_blank" v-for="item in categories">{{ item.name }}</a>
        </div>
        <div class="mt-4 text-white font-bold text-3xl">{{ title }}</div>
        <div class="mt-4 leading-7">{{ description.substring(0, 250) }}... <a
                :href="url" class="text-[#F4B913]">Read more</a></div>
    </div>
</template>

<script setup lang="ts">

export interface CategoryItem {
    name: string,
    style: string,
    url: string
}

export interface BlogItemProps {
    date: string,
    author: string,
    categories: CategoryItem[],
    title: string,
    description: string
    url: string
}

const {categories, date, description, title, author, url} = defineProps<BlogItemProps>()

</script>

<style scoped>

</style>
