<template>
    <div class="relative text-left">
        <div>
            <button type="button"
                    class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-2xl bg-white py-5 px-3 my-1 text-[#111215] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button" aria-expanded="true" aria-haspopup="true" @click="changeVisible">
                <span v-if="value">{{ value.label }}</span>
                <span v-else></span>
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"/>
                </svg>
            </button>
        </div>

        <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <div
            class="absolute left-0 z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            :class="visible ? 'visible' : 'invisible'"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div role="none">
                <span class="text-gray-700 block px-4 py-4 text-sm" role="menuitem" tabindex="-1"
                      id="menu-item-2" v-for="(item, index) in items" @click="changeSelectItem(index)">{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, defineProps, defineEmits } from 'vue';



export interface VSelectItem {
    label: string
    value: string | number
    type?: string;
}

export interface VSelectProps {
    items: VSelectItem[]
}

const {items} = defineProps<VSelectProps>()


// myCode
const emitChangeSelectItem = defineEmits(['changeSelectItem']);


const value = ref<VSelectItem>()


const visible = ref<boolean>(false)

const changeVisible = () => {
    visible.value = !visible.value
}

const changeSelectItem = (index: number) => {
    value.value = items[index]
    visible.value = false
    
    // myCode
    emitChangeSelectItem('changeSelectItem', value.value); // Emit the selected item to the parent component

}
</script>

<style scoped>

</style>
