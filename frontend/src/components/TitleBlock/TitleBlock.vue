<template>
    <section class="h-[920px] bg-black">
        <div class="flex justify-center items-center h-[920px] bg-contain bg-no-repeat bg-center"
             :style="{backgroundImage: `url(${backgroundImage})`}">
            <div class="basis-3/5">
                <div class="text-3xl font-extrabold text-white max-w-[600px] xl:text-6xl lg:text-5xl md:text-4xl" v-html="highlight"/>
                <div class="mt-2 text-2xl text-white xl:max-w-[60%]">
                    {{ description }}
                </div>
                <slot name="button"/>
            </div>
            <slot name="footer"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import {addClassToTitle} from "../../untils/title";

export interface LabelBlockProps {
    title: string,
    description: string,
    backgroundImage: string
}

const {title, description, backgroundImage} = defineProps<LabelBlockProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>
</style>
