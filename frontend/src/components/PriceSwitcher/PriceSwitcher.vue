<template>
    <div class="flex items-center rounded-[48px] py-4 px-5 border border-rich-yellow-2/20 gap-4 bg-[#ffb507]/5">
        <div
        v-for="item in items" :class="item.active ? ACTIVE_CLASS : ''" @click="handleSwitch(item)">
            {{ item.label }}
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits } from "vue";

export interface PriceSwitcherItem {
    label: string
    value: string | number
    active: boolean
}

export interface PriceSwitcherProps {
    items: PriceSwitcherItem[]
}

export interface PriceSwitcherEmits {
    (e: 'change', value: PriceSwitcherItem): void
}

const {items} = defineProps<PriceSwitcherProps>()
const emits = defineEmits<PriceSwitcherEmits>()

const ACTIVE_CLASS = 'text-[#111827] rounded-[40px] py-2.5 px-4 bg-[#FFB507] font-bold';

const handleSwitch = (item: PriceSwitcherItem) => {
  emits('change', item);
};

</script>

<style scoped>
</style>
