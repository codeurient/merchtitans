<template>
    <main-template>
        <center-title-block title="'Contact' Us"
                            :background-image="titleBlock"
        >
            <div class="flex flex-col mt-[-150px] justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center">
                    <p>If you have any questions or concerns feel free to contact us</p>
                    <p>using the form below. We’ll respond as soon as we can!.</p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-900px] w-7/12 justify-center z-10 bg-white rounded-3xl relative p-24">
                <div class="flex gap-16">
                    <div class="basis-1/2 flex flex-col text-[#5D6483] text-base font-normal">
                        <div>
                            <v-label>Name*</v-label>
                            <v-input type="text"/>
                        </div>
                        <div class="mt-7">
                            <v-label>Phone</v-label>
                            <v-input type="text"/>
                        </div>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <div>
                            <v-label>Email*</v-label>
                            <v-input type="text"/>
                        </div>
                        <div class="mt-7">
                            <v-label>Subject</v-label>
                            <v-input type="text"/>
                        </div>
                    </div>
                </div>
                <div class="mt-7">
                    <v-label>Department</v-label>
                    <v-select :items="ITEMS"/>
                </div>
                <div class="mt-7">
                    <v-label>Tell us more about your inquiry here *</v-label>
                    <v-input type="text" placeholder="Write something to us"/>
                </div>
                <div class="flex justify-center">
                    <div class="mt-7 w-1/3">
                        <v-button class="py-6">Send</v-button>
                    </div>
                </div>
            </div>
        </section>
    </main-template>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import {BlogItemProps, CategoryItem} from "../components/BlogItem/BlogItem.vue";
import {BlogListItem} from "../components/BlogList/BlogList.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import VLabel from "../components/Label/VLabel.vue";
import VInput from "../components/Input/VInput.vue";
import VButton from "../components/Button/VButton.vue";
import VSelect, {VSelectItem} from "../components/Select/VSelect.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'

const ITEMS: VSelectItem[] = [
    {
        value: 0,
        label: 'Guides'
    },
    {
        value: 1,
        label: 'Merch by Amazon'
    },
    {
        value: 2,
        label: 'Resources'
    },
    {
        value: 3,
        label: 'Strategies'
    },
]


</script>

<style scoped>
</style>
