<template>
    <div v-html="htmlBreadcrumbs.value" v-if="breadcrumbs"/>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {addClassToTitle} from "../../untils/title";

export interface Breadcrumb {
    label: string,
    url: string,
}

export interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[]
    separator?: string
}

const {breadcrumbs, separator} = defineProps<BreadcrumbsProps>()

const htmlBreadcrumbs = computed(() => addClassToTitle(
    breadcrumbs.map((item) => `<a href="${item.url}">${item.label}</a>`).join(separator ? separator : '&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp') ?? '',
    'underline text-[#8DF63A]')
)
</script>

<style scoped>

</style>
