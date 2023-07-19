<template>
    <button :class="`font-bold text-lg py-3 px-6 text-rich-yellow border-rich-yellow border rounded-xl ${innerClass ? innerClass : ''}`">
        <slot/>
    </button>
</template>

<script setup lang="ts">
export interface VOutlineButtonProps {
    innerClass?: string
}

const {innerClass} = defineProps<VOutlineButtonProps>()
</script>

<style scoped>
</style>
