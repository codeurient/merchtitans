<template>
    <div :class="`py-9 px-14 max-w-[400px] bg-white rounded-2xl shadow-[#767aa3]/25 shadow-2xl ${innerClass ? innerClass : ''}`">
        <div class="flex justify-center items-center mt-9 text-center text-[#111827] text-6xl">
            <div class="font-extralight text-4xl leading-[54px]">$</div>
            <div class="font-bold">{{ dollar }}</div>
            <div class="text-2xl mb-2 font-bold">{{ cent }}</div>
        </div>
        <div class="text-center text-lg text-[#7E75A5]" v-if="description">
            {{ description }}
        </div>
        <div class="text-2xl text-center my-7 pb-7 border-b border-b-[#7e75a5]/25 font-semibold">
            {{ title }}
        </div>
        <ul class="text-[#7E75A5] flex flex-col text-lg gap-2 mb-7 pricing-card-ul">
            <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
        </ul>
        <button class="text-[#111827] bg-[#F4B913] font-bold text-xl py-6 w-full rounded-xl">
            Learn More
        </button>
    </div>
</template>

<script setup lang="ts">
export interface PriceCardProps {
    cent: number,
    dollar: number,
    title: string,
    description?: string,
    features: string[],
    innerClass?: string,
    mode: string
}


const {dollar, innerClass, cent, description, title, features} = defineProps<PriceCardProps>()
</script>

<style scoped>

.pricing-card-ul {
    list-style: url('../../assets/images/yellow-check.png');
}

</style>
