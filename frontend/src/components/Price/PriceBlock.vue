<template>
    <section class="flex flex-col justify-center items-center" :class="classesSection">
        <div class="flex justify-between items-center w-full mt-32 container">
            <div class="text-6xl font-bold">
                Pricing
            </div>
            <price-switcher :items="prices" @change="update"/>
        </div>
        <slot/>
    </section>
</template>

<script setup lang="ts">
import PriceSwitcher, {PriceSwitcherItem} from "../PriceSwitcher/PriceSwitcher.vue";
import {ref} from "vue";

export interface VPriceSectionProps {
    classesSection?: string
}

const prices = ref<PriceSwitcherItem[]>([
    {
        label: 'Monthly',
        value: 'Monthly',
        active: true
    },
    {
        label: 'Annual',
        value: 'Annual',
        active: false
    },
])

const emits = defineEmits(["change"]);


// Событие для передачи выбранного режима в Home.vue
const update = (value: PriceSwitcherItem) => {
  prices.value = prices.value.map((item: PriceSwitcherItem) => ({
    ...item,
    active: false
  }))
    .map((item: PriceSwitcherItem) => item.value === value.value ? {
      ...item,
      active: true
    } : item);

  // Генерируем событие 'modeChange' и передаем выбранный режим в Home.vue
  emits("change", value.value);
};

const { classesSection } = defineProps<VPriceSectionProps>();
</script>

<style scoped>

</style>
