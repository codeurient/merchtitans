<template>
    <div class="flex pt-4 pb-2">
        <div class="basis-3/5 border-r border-r-[#989FBF] pl-4">
            <p class="font-bold" :class="headerTitleClass">Tag</p>
        </div>
        <div class="basis-2/5 pl-4 pr-7" :class="lastColumnClass">
            <p class="font-bold" :class="headerTitleClass">Occurrences</p>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface TagTableHeaderItem {
    headerTitleClass: string,
    lastColumnClass: string
}

const {headerTitleClass, lastColumnClass} = defineProps<TagTableHeaderItem>()

</script>

<style scoped>

</style>
