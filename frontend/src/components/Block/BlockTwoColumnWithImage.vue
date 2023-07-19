<template>
    <div class="flex items-center">
        <div class="basis-1/3">
            <div class="text-4xl font-extrabold mb-8" v-html="highlight">
            </div>
            <span class="text-light-purple text-base leading-6" v-html="description"></span>
        </div>
        <div class="basis-2/3">
              <slot name="image"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {addClassToTitle} from "../../untils/title";

export interface BlockTwoColumnWithImageProps {
    title: string,
    description: string,
}
const {title, description} = defineProps<BlockTwoColumnWithImageProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>
</style>
