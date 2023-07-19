<template>
    <div class="flex">
        <ul class="flex flex-col w-1/2">
            <li class="text-xs text-[#6D7280]">{{ title }}</li>
            <li v-for="(item, index) in items.splice(0, 2)" :key="index" class="py-2">
                <a :href="item.url" class="text-base text-[#C3BED7]">{{ item.label }}</a>
            </li>
        </ul>
        <ul class="flex flex-col w-1/2" v-for="(item, indexUl) in chunkArray(items)" :key="indexUl">
            <li v-for="(el, indexLi) in item" :key="indexLi" class="py-2">
                <a :href="el.url" class="text-base text-[#C3BED7]">{{ el.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import {chunkArray} from "../../untils/array";

export interface FooterListItem {
    label: string,
    url: string
}

export interface FooterListProps {
    title: string,
    items: FooterListItem[]
}

const {title, items} = defineProps<FooterListProps>()

</script>

<style scoped>

</style>
