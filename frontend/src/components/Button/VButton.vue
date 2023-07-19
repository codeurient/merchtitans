<template>
    <button class="font-bold text-lg px-6 py-3.5 text-dark-blue bg-rich-yellow rounded-xl w-full" :class="innerClass">
        <slot/>
    </button>
</template>

<script setup lang="ts">
export interface VButtonProps {
    innerClass?: string
}

const {innerClass} = defineProps<VButtonProps>()
</script>

<style scoped>

</style>
