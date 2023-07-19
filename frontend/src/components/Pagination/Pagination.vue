<template>
    <div class="flex items-center">
        <div @click="goToPreviousSlide">
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.48438 18L1.7062 10.2218C1.31568 9.8313 1.31568 9.19814 1.7062 8.80761L9.48437 1.02944" :stroke="leftColor ? leftColor : '#111215'" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="mx-8 flex gap-3">
            <div class="text-5xl font-bold color-[#111215]">
                {{ current }}
            </div>
            <div class="text-base font-bold text-[#5D6483] self-end">
                / {{ last }}
            </div>
        </div>
        <div @click="goToNextSlide">
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.48438 1L9.26255 8.77818C9.65307 9.1687 9.65307 9.80186 9.26255 10.1924L1.48437 17.9706" stroke="#FDC43A" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';

import { defineProps, defineEmits } from 'vue';

export interface PaginationProps {
    current: string,
    last: string,
    leftColor ?: string
}


const { current, last, leftColor } = defineProps<PaginationProps>();

const emit = defineEmits(['previous', 'next']);

const goToPreviousSlide = () => {
  emit('previous');
};

const goToNextSlide = () => {
  emit('next');
};


</script>

<style scoped>

</style>
