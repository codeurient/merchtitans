<template>
    <main-template>
        <center-title-block title="<p>Read</p><p>'Article'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        />
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-750px] w-7/12 justify-center z-10 bg-white rounded-3xl relative p-2">
                <div class="flex gap-10">
                    <div class="basis-1/2 flex flex-col text-[#5D6483] text-base font-normal pt-20 pl-20 pb-8">
                        <div class="text-2xl font-bold text-[#27282D]">How you can use MyDesigns and Merch Titans to
                            revolutionize your creative process
                        </div>
                        <breadcrumbs :breadcrumbs="CATEGORIES" separator="&nbsp|&nbsp"
                                     class="text-[#F4B913] uppercase text-base font-normal mt-8"/>
                        <div class="flex justify-between items-end h-full text-[#646876]">
                            <p>February 4th, 2022</p>
                            <p class="underline">Curtis Blackmore</p>
                        </div>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img src="../assets/images/read/man.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-[1270px] bg-[url('/src/assets/images/blog/blocks_background.svg')] text-white py-20 rounded-2xl mt-20 z-10 px-32">
                <div class="text-[42px] font-extrabold">
                    How you can use MyDesigns and Merch Titans
                    to revolutionize your creative process
                </div>
                <div class="mt-11 flex gap-10 text-[#CCCCCC]">
                    <div class="basis-1/2">
                        <p>We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a
                            year of hope for some, and design trends for 2021 will become a reflection of that.</p>
                        <br/>
                        <p>Designs will be cheerful and funny to lighten the mood, so let’s start talking about one of the
                            most popular items: a t-shirt. According to Printify, the custom t-shirt market worldwide is
                            expected to cross 10 billion dollars by 2025; and this year will work as a launching platform
                            for those interested in starting or growing their business.
                        </p>
                        <br/>
                        <p>// Other text</p>
                    </div>
                    <div class="basis-1/2">
                        <p>Additionally, from the TOP 10 items sold on Printify in September 2020, the top sellers were four different kinds of t-shirts with 46.04%, and sweatshirts, with a combined percent of items, sold 9.85%. So it’s pretty safe to say where your focus should be for now, right?</p>
                        <p>An interview published by Complex mentions that some brands have done exceptionally well despite COVID-19 , and the reason is they have been selling T-shirts and quickly produced garments.</p>
                        <br/>
                        <p>// Other text and images</p>
                    </div>
                </div>
                <div class="flex justify-center mt-24">
                    <div class="basis-1/2">
                        <div class="max-w-[350px]">
                            <blog-list
                                title="Newest Articles"
                                :items="ARTICLES_LIST"
                            />
                        </div>
                    </div>
                    <div class="basis-1/2">
                        <div class="max-w-[350px]">
                            <blog-list
                                title="Categories"
                                :items="CATEGORIES_LIST"
                            />
                        </div>
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
import BlogList, {BlogListItem} from "../components/BlogList/BlogList.vue";
import Breadcrumbs, {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'


const CATEGORIES_LIST: BlogListItem[] = [
    {
        title: 'Design',
        url: '/'
    },
    {
        title: 'Guides',
        url: '/'
    },
    {
        title: 'Kindle Direct Publishing',
        url: '/'
    },
    {
        title: 'Merch by Amazon',
        url: '/'
    },
    {
        title: 'Research',
        url: '/'
    },
    {
        title: 'Resources',
        url: '/'
    },
    {
        title: 'SEO',
        url: '/'
    },
    {
        title: 'Strategies',
        url: '/'
    }
]

const ARTICLES_LIST: BlogListItem[] = [
    {
        title: 'How you can use MyDesigns and Merch Titans to revolutionize your creative process',
        url: '/',
    },
    {
        title: 'T-Shirt Design Trends to Keep an Eye on in 2021',
        url: '/',
    },
    {
        title: 'Kindle Direct Publishing Upload Automation Guide for No Content Books',
        url: '/',
    },
    {
        title: '7 Strategies for Quickly Moving Up Tiers on Merch by Amazon',
        url: '/',
    },
    {
        title: 'Amazon Merch and Print on Demand T-Shirt Design Ideas',
        url: '/',
    }
]

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "Home",
        url: '/'
    },
    {
        label: 'Blog',
        url: '/blog'
    },
    {
        label: "'How you can use MyDesigns and Merch Titans...'",
        url: '/read'
    }
];

const CATEGORIES: Breadcrumb[] = [
    {
        label: 'Guides',
        url: '/'
    },
    {
        label: 'Merch by Amazon',
        url: '/'
    },
    {
        label: 'Resources',
        url: '/'
    },
    {
        label: 'Strategies',
        url: '/'
    },
];
</script>

<style scoped>
</style>
