<template>
    <div class="text-[#2B2350] text-xl font-medium">{{ title }}</div>
    <ul class="list-none mt-8 text-[#797687] leading-8">
        <li class="my-2" v-for="(item, index) in items" :key="index">
            <a :href="item.url">{{ item.label }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
export interface LightFooterItem {
    url: string,
    label: string
}

export interface LightFooterListProps {
    title: string
    items: LightFooterItem[]
}

const {title, items} = defineProps<LightFooterListProps>()

</script>

<style scoped>

</style>
