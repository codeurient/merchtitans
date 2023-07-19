<template>
    <div class="relative">
        <!-- Dropdown toggle button -->
        <button
            @click="show = !show"
            class="
                flex
                items-center
                text-indigo-100
                rounded-md
                focus:outline-none
              "
        >
            <span class="mr-4">
                <slot name="title"/>
            </span>
            <svg
                class="w-5 h-5 text-indigo-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <div
            v-show="show"
            class="
                py-2
                mt-2
                rounded-md
                bg-indigo-500
                shadow-xl
                lg:absolute lg:right-0
                w-44
              "
        >
            <slot name="items"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let show = ref<boolean>(false);
</script>

<style scoped>

</style>
