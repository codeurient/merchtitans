<template>
    <div class="relative">
        <input type="text"
               class="border border-[#9694a1]/20 bg-[#2C2D34] rounded-[100px] w-full h-16 py-4 pl-6 placeholder:text-[#7E8196] focus:outline-none"
               :placeholder="placeholder"
        />
        <div class="absolute top-2 right-2 bg-[#3E3F48] p-3 rounded-full">
            <img class="" src="../../assets/images/search-card.svg" alt=""/>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface SearchInput {
    placeholder: string
}

const {placeholder} = defineProps<SearchInput>()
</script>

<style scoped>

</style>
