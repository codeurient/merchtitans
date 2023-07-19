<template>
    <div class="text-white text-3xl font-bold">Newest Articles</div>
    <hr class="mt-2 border-[#5D6483]"/>
    <ul class="ml-5 mt-2 list-disc font-normal">
        <li class="mt-2" v-for="item in items"><a :href="item.url">{{ item.title }}</a></li>
    </ul>
</template>

<script setup lang="ts">
export interface BlogListItem {
    title: string,
    url: string
}
export interface BlogListProps {
    title: string,
    items: BlogListItem[]
}

const {title, items} = defineProps<BlogListProps>()
</script>

<style scoped>

</style>
