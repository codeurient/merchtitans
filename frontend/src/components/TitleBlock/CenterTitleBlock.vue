<template>
    <section class="flex flex-col justify-center items-center h-[1074px] bg-contain" :style="{backgroundImage: `url(${backgroundImage})`}">
        <div class="basis-1/2">
            <div class="flex flex-col justify-center items-center mt-52">
                <breadcrumbs :breadcrumbs="breadcrumbs" v-if="breadcrumbs" class="text-base mb-14 text-white"/>
                <div class="text-[140px] font-extrabold text-white max-w-[1000px] text-center tracking-wide leading-[120%]" v-html="highlight"/>
            </div>
        </div>
        <div class="basis-1/2">
            <slot/>
        </div>
    </section>
</template>

<script setup lang="ts">
import {addClassToTitle} from "../../untils/title";
import Breadcrumbs, {Breadcrumb} from "../Breadcrumbs/Breadcrumbs.vue";

export interface LabelBlockProps {
    title: string,
    backgroundImage: string,
    breadcrumbs?: Breadcrumb[]
}

const {title, backgroundImage, breadcrumbs} = defineProps<LabelBlockProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>
</style>
