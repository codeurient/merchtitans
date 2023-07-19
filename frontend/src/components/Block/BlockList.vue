<template>
    <div>
        <div class="text-4xl font-extrabold" v-html="highlight">
        </div>
        <div class="mt-6 flex gap-8">
            <div class="basis-1/2" v-for="(item, indexUl) in arrayToArrays(items, 2)" :key="indexUl">
                <ul class="text-light-purple text-base merch-titans-list">
                    <li class="mt-3" v-for="(el, indexLi) in item" :key="indexLi" v-html="el"/>
                </ul>
            </div>
        </div>
    </div>
    <slot/>
</template>

<script setup lang="ts">
import {arrayToArrays} from "../../untils/array";
import {addClassToTitle} from "../../untils/title";

export interface BlockListProps {
    title: string,
    items: string[]
}

const { title, items } = defineProps<BlockListProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>
.merch-titans-list {
    list-style: url('../../assets/images/galka.png');
}
</style>
