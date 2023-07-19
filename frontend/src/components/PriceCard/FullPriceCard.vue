<template>
    <div class="w-2/5 bg-white rounded-2xl px-16 py-8 pricing-card">
        <div class="flex justify-center gap-12 py-5 border-b border-b-[#7e75a5]/25">
            <div class="flex text-6xl color-[#111827]">
                <div class="text-3xl font-thin my-3">$</div>
                <div class="basis-1/2">{{ dollar }}</div>
                <div class="text-2xl my-4 font-bold">{{ cent }}</div>
            </div>
            <div class="text-2xl my-4 color-[#111827] font-semibold">
                {{ title }}
            </div>
        </div>
        <div class="flex gap-28">
            <ul class="my-6 text-base gap-2 text-[#7E75A5] pricing-card-ul" v-for="(item, indexUl) in arrayToArrays(features, 2)" :key="indexUl">
                <li class="my-4" v-for="(el, indexLi) in item" :key="indexLi">{{ el }}</li>
            </ul>
        </div>
        <div class="flex justify-center">
            <button class="w-2/5 py-6 bg-rich-yellow text-xl font-bold rounded-xl border-none cursor-none text-[#111827]">
                Learn More
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {arrayToArrays} from "../../untils/array";

export interface FullPriceCardProps {
    cent: number,
    dollar: number,
    title: string,
    features: string[]
}

const {dollar, cent, title, features} = defineProps<FullPriceCardProps>()
</script>

<style scoped>
.pricing-card {
    box-shadow: 0 62px 68px rgba(118, 122, 163, 0.24);
    border-radius: 17px;
}

.pricing-card-ul {
    list-style: url('../../assets/images/yellow-check.png');
}
</style>
