<template>
    <div :class="`flex ${reverse ? 'flex-row-reverse' : ''}`">
        <div class="basis-1/2">
            <div :class="`${classTextColor} font-bold text-5xl ml-10 max-w-[500px]`">{{ title }}</div>
            <div class="bg-[#2e2e36]/80 rounded-3xl py-8 pl-10 pr-6 mt-10">
                <div class="text-white font-bold text-2xl pr-10 max-w-[400px]">{{ subtitle }}</div>
                <div class="text-[#C3BED7] text-base font-normal mt-6">
                    {{ description }}
                </div>
            </div>
        </div>
        <div class="basis-1/2">
            <img :class="`${reverse ? '' : 'ml-10'}`" :src="image" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

export interface AboutUsLeftBlockProps {
    title: string,
    subtitle: string,
    description: string,
    image: string,
    classTextColor: string
    reverse?: boolean
}

const {reverse, image, subtitle, classTextColor, title, description} = defineProps<AboutUsLeftBlockProps>()
</script>

<style scoped>

</style>
