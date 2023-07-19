<template>
    <div class="p-4 bg-white rounded-2xl">
        <div class="flex flex-col items-center">
            <div class="flex w-full">
                <div class="basis-1/3 mt-4 "
                     v-for="(array, indexArray) in columnsItems" :key="indexArray">
                    <tag-table-header-item
                        :header-title-class="headerTitleClass"
                        :last-column-class="columnsItems.length - 1 !== indexArray ? 'border-r border-r-[#989FBF]' : ''"
                        :class="headerClass + ' ' + (indexArray === 0 ? 'rounded-tl-2xl ml-4' :
                                columnsItems.length - 1 === indexArray ? ' rounded-tr-2xl pl-4' : 'pl-4')
                        "/>
                    <div :class="columnsItems.length - 1 !== indexArray ? 'border-r border-r-[#989FBF]' : ''">
                        <keyword-table-item :occurrences="item.occurrences" :tag="item.tag"
                                            v-for="(item, index) in array"
                                            :key="index"
                                            :class="array.length - 1 === index ? 'pt-4' :
                                            index === 0 ? 'mt-4 border-b border-b-[#989FBF] ' :
                                            'border-b border-b-[#989FBF] pt-4'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import KeywordTableItem, {KeywordTableItemProps} from "../KeywordTable/KeywordTableItem.vue";
import {arrayToArrays} from "../../untils/array";
import {computed} from "vue";
import TagTableHeaderItem from "./TagTableHeaderItem.vue";

export interface KeywordTableProps {
    items: KeywordTableItemProps[],
    headerClass: string,
    headerTitleClass: string,
}


const {items, headerTitleClass, headerClass} = defineProps<KeywordTableProps>()

const columnsItems = computed(() => arrayToArrays(items, 3))
</script>

<style scoped>

</style>
