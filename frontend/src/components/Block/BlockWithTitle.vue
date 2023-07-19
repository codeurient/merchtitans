<template>
    <div class="w-1/2">
        <div class="text-4xl font-extrabold leading-tight" v-html="highlight">
        </div>
    </div>
    <slot/>
</template>

<script setup lang="ts">
import {addClassToTitle} from "../../untils/title";

export interface BlockWithTitleProps {
    title: string,
}
const { title } = defineProps<BlockWithTitleProps>()
const highlight = addClassToTitle(title)
</script>

<style scoped>

</style>
