<template>
    <div class="p-4 bg-white rounded-2xl">
        <div class="flex flex-col items-center">
            <div class="flex w-full gap-1">
                <div class="flex items-center justify-center py-3 px-4 rounded-l-lg w-full" :class="innerClass">
                    <img :src="image" alt="">
                    <p class="ml-2 font-semibold text-sm" :class="titleClass">{{ title }}</p>
                </div>
                <div class="w-14 rounded-r-lg flex justify-center items-center" :class="innerClass">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0943 5.8886L6.82951 2.62378C6.76791 2.56218 6.6887 2.5094 6.6007 2.4742C6.5919 2.4742 6.58307 2.47419 6.57427 2.46539C6.50387 2.43899 6.42466 2.4214 6.34546 2.4214C6.16946 2.4214 6.00229 2.49178 5.87909 2.61498L2.60546 5.8886C2.35026 6.1438 2.35026 6.5662 2.60546 6.8214C2.86066 7.0766 3.28311 7.0766 3.53831 6.8214L5.69427 4.66539V18.9214C5.69427 19.2822 5.99347 19.5814 6.35427 19.5814C6.71507 19.5814 7.01427 19.2822 7.01427 18.9214V4.6742L9.16147 6.8214C9.29347 6.9534 9.4607 7.01498 9.6279 7.01498C9.7951 7.01498 9.96227 6.9534 10.0943 6.8214C10.3495 6.5662 10.3495 6.1526 10.0943 5.8886Z"
                            :fill="color"/>
                        <path
                            d="M19.3833 15.1814C19.1281 14.9262 18.7057 14.9262 18.4505 15.1814L16.2945 17.3374V3.0814C16.2945 2.7206 15.9953 2.4214 15.6345 2.4214C15.2737 2.4214 14.9745 2.7206 14.9745 3.0814V17.3286L12.8273 15.1814C12.5721 14.9262 12.1497 14.9262 11.8945 15.1814C11.6393 15.4366 11.6393 15.859 11.8945 16.1142L15.1593 19.379C15.2209 19.4406 15.3001 19.4934 15.3881 19.5286C15.3969 19.5286 15.4057 19.5286 15.4145 19.5374C15.4849 19.5638 15.5641 19.5814 15.6433 19.5814C15.8193 19.5814 15.9865 19.511 16.1097 19.3878L19.3833 16.1142C19.6385 15.8502 19.6385 15.4366 19.3833 15.1814Z"
                            :fill="color" fill-opacity="0.5"/>
                    </svg>
                </div>
            </div>
            <div class="flex w-full">
                <div class="basis-1/3 mt-4 "
                     :class="columnsItems.length - 1 !== indexArray ? ' border-r border-r-[#989FBF]' : ''"
                     v-for="(array, indexArray) in columnsItems" :key="indexArray">
                    <keyword-table-header-item/>
                    <keyword-table-item :occurrences="item.occurrences" :tag="item.tag" v-for="(item, index) in array"
                                        :key="index"
                                        :class="array.length - 1 !== index ? 'border-b border-b-[#989FBF] pt-4' : 'pt-4'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import KeywordTableHeaderItem from "./KeywordTableHeaderItem.vue";
import KeywordTableItem, {KeywordTableItemProps} from "./KeywordTableItem.vue";
import {arrayToArrays} from "../../untils/array";
import {computed} from "vue";

export interface KeywordTableProps {
    items: KeywordTableItemProps[],
    titleClass: string,
    color: string,
    innerClass: string,
    title: string,
    image: string,
}


const {items, image, title, titleClass, color} = defineProps<KeywordTableProps>()

const columnsItems = computed(() => arrayToArrays(items, 3))

</script>

<style scoped>

</style>
