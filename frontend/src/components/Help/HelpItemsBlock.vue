<template>
    <div>
      <div v-for="(item, index) in items" :key="index">
        <div
          class="flex justify-between items-center"
          :class="index === 0 ? 'pb-8' : 'py-8 border-t border-t-[#7e75a5]/25'"
          @click="toggleItem(item, index)"
        >
          <span class="text-xl text-[#111827] font-semibold">{{ item.label }}</span>
          <img
            v-if="item.visible"
            src="../../assets/images/help_block/dagger-yellow.svg"
            alt=""
          />
          <img
            v-else
            src="../../assets/images/help_block/plus-yellow.svg"
            alt=""
          />
        </div>
        <div class="my-8 text-[#6D7280] text-base" :class="{'hidden': !item.visible}">
          {{ item.text }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, onBeforeMount } from "vue";
  
  export interface HelpItem {
    label: string;
    text: string;
    visible: boolean;
  }
  
  export interface HelpItemsBlockProps {
    items: HelpItem[];
  }
  
  interface HelpItemsBlockEmits {
    (e: "change", value: HelpItem, index: keyof HelpItem[]): void;
  }
  
  const { items } = defineProps<HelpItemsBlockProps>();
  const emit = defineEmits<HelpItemsBlockEmits>();
  
  const toggleItem = (item: HelpItem, index: keyof HelpItem[]) => {
    // Close previously opened question
    items.forEach((i, idx) => {
      if (idx !== index) {
        i.visible = false;
      }
    });
  
    // Toggle visibility of the clicked question
    item.visible = !item.visible;
    emit("change", item, index);
  };
  
  onBeforeMount(() => {
    // Set the first question to be visible by default
    if (items.length > 0) {
      items[0].visible = true;
    }
  });
  </script>
  