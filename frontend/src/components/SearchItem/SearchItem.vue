<template>
    <div class="bg-white py-4 pl-5 pr-9 rounded-2xl">
        <div class="flex">
            <div>
                <img src="../../assets/images/search/bookmark.svg" alt="">
            </div>
            <star-block :star="star" class="ml-4"/>
            <div class="px-4 text-[#111215] text-sm font-medium border-r border-r-[#989FBF]">
                Based on {{ countReviews }} reviews.
            </div>
            <div class="px-4 flex border-r border-r-[#989FBF] items-center gap-2">
                <div class="text-[#989FBF] text-xs font-medium">Price:</div>
                <div class="text-[#111215] text-base font-bold">${{ price }}</div>
            </div>
            <div class="px-4 flex items-center gap-2">
                <div class="text-[#989FBF] text-xs font-medium">Seller Rank:</div>
                <div class="text-[#111215] text-base font-bold">{{ rank }}</div>
                <div class="text-[#111215] text-xs font-medium">(2 Estimated Monthly Sales )</div>
            </div>
        </div>
        <div class="flex mt-4 gap-10">
            <div>
                <img :src="image" class="w-[150px]" alt="">
            </div>
            <div class="w-full">
                <div class="text-[#111215] font-bold pb-2 border-b border-b-[#989FBF]">{{ title }}
                </div>
                <div class="flex gap-10 mt-2">
                    <div class="flex items-center border-b border-b-[#989FBF] gap-1 pb-2">
                        <div class="text-[#989FBF] text-xs font-medium">Brand:</div>
                        <div class="text-[#111215] text-sm font-medium">{{ brand }}
                        </div>
                    </div>
                    <div class="border-b border-b-[#989FBF] pb-2">
                        <div class="flex gap-4">
                            <div class="flex items-center gap-1 pr-4 border-r border-r-[#989FBF]">
                                <div class="text-[#989FBF] text-xs font-medium">ASIN:</div>
                                <div class="text-[#111215] text-sm font-medium">{{ asin }}</div>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="text-[#989FBF] text-xs font-medium">Released On:</div>
                                <div class="text-[#111215] text-sm font-medium">{{ date }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="text-[#989FBF] text-xs font-medium">Description:</div>
                    <div class="text-[#111215] text-sm font-medium">{{ description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import StarBlock from "../StarBlock/StarBlock.vue";

export interface SearchItemProps {
    image: string,
    star: number,
    countReviews: number,
    price: number,
    rank: number,
    title: string,
    brand: string,
    asin: string,
    date: string,
    description: string

    category: string,
    marketplace: string,
}

const {asin, brand, date, countReviews, description, image, rank, price, title, star} = defineProps<SearchItemProps>()
</script>

<style scoped>

</style>
