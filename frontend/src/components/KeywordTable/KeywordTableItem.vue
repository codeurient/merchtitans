<template>
    <div class="flex mx-4 pb-2">
        <div class="basis-3/5 pl-4">
            <p class="text-[#111215] border-r border-r-[#989FBF]">{{ tag }}</p>
        </div>
        <div class="basis-2/5 pl-4">
            <p class="text-[#111215]">{{ occurrences }} times</p>
        </div>
    </div>
</template>

<script setup lang="ts">

export interface KeywordTableItemProps {
    tag: string,
    occurrences: number
}

const {tag, occurrences} = defineProps<KeywordTableItemProps>()

</script>

<style scoped>

</style>
