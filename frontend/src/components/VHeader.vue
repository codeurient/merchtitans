<template>
    <header class="flex justify-center items-center absolute top-0 w-full min-h-[150px] bg-black/5 backdrop-blur-xl border-b border-solid border-b-white/20 z-10 text-white">
        <div>
            <a href="/">
                <img src="./../assets/images/mt-logo-white.png" alt="logo"/>
            </a>
        </div>
        <div class="basis-5/12">
            <ul class="flex justify-center text-base gap-8">
                <li v-for="(item, index) in HEADER_ITEMS" :key="index">
                    <div v-if="item.items">
                        <drop-down>
                            <template v-slot:title>
                                {{ item.label }}
                            </template>
                            <template v-slot:items>
                                <router-link
                                    :to="subItem.url"
                                    class="
                                      block
                                      px-4
                                      py-2
                                      text-sm text-indigo-100
                                      hover:bg-indigo-400 hover:text-indigo-100
                                    "
                                    v-for="subItem in item.items"
                                >
                                    {{ subItem.label }}
                                </router-link>
                            </template>
                        </drop-down>
                    </div>
                    <router-link v-else :to="item.url">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <button class="font-bold text-lg py-3 px-6 text-rich-yellow border-rich-yellow border rounded-xl">
                Dashboard
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import DropDown from "./Dropdown/DropDown.vue";

interface Link {
    url: string,
    label: string,
    items?: Link[]
}

const HEADER_ITEMS: Link[] = [
    {
        url: '/',
        label: 'MTA'
    },
    {
        url: 'kdpa',
        label: 'KDPA',
    },
    {
        url: 'canvas',
        label: 'Canvas Titans'
    },
    {
        url: '/',
        label: 'Tools',
        items: [
            {
                label: 'Product Research',
                url: '/search'
            },
            {
                label: 'Keyword Research',
                url: '/keyword'
            },
            {
                label: 'Tag Research',
                url: '/tag'
            },
        ]
    },
    {
        url: '/search',
        label: 'Product Research'
    },
    {
        url: '/',
        label: 'Affiliates'
    }
]

</script>
<style scoped>
</style>
