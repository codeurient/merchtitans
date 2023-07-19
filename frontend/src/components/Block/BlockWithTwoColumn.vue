<template>
    <div class="flex gap-12">
        <div class="basis-1/2">
            <div class="text-4xl font-extrabold" v-html="highlight">
            </div>
            <div class="mt-4 text-2xl font-light">
                {{subtitle}}
            </div>
        </div>
        <div class="basis-1/2">
              <span class="text-light-purple text-base leading-6" v-html="description"></span>
        </div>
    </div>
    <slot/>
</template>

<script setup lang="ts">
import {addClassToTitle} from "../../untils/title";

export interface BlockWithTwoColumnProps {
    title: string,
    subtitle: string,
    description: string,
}
const {title, subtitle, description} = defineProps<BlockWithTwoColumnProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>
</style>
