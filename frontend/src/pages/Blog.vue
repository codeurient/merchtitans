<template>
    <main-template>
        <center-title-block title="<p>Read</p><p>'Blog'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        />
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-750px] w-1/2 justify-center z-10 bg-white rounded-3xl relative p-2">
                <div class="flex gap-10">
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal py-20 pl-20">
                        <div class="text-2xl font-bold text-[#27282D]">Get Exclusive Merch Tips</div>
                        <div class="text-[#5D6483] mt-2">
                            Learn how to expand your Merch by Amazon empire with the top tips.
                        </div>
                        <div class="mt-14">
                            <v-label>Email*</v-label>
                            <v-input type="text"/>
                        </div>
                        <div class="mt-11">
                            <v-button>Subscribe</v-button>
                        </div>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img src="../assets/images/blog/man.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div
                class="w-full max-w-[1270px] bg-[url('/src/assets/images/blog/blocks_background.svg')] text-white py-20 rounded-2xl mt-20 z-10 px-20">
                <div>
                    <search-input placeholder="Enter Keyword and Hit Enter to Search"/>
                </div>
                <div class="mt-10 grid grid-cols-2 gap-10">
                    <blog-item v-for="item in BLOG_ITEMS"
                               :title="item.default.title"
                               :description="item.default.description"
                               :author="item.default.author"
                               :date="item.default.date"
                               :url="item.default.url"
                               :categories="item.default.categories"
                    >
                        <div :class="item.class" class="rounded-3xl py-auto px-10 h-[300px] flex items-center">
                            <div class="text-5xl font-extrabold text-[#27282D]"
                                 v-html="addClassToTitle(item.imageTitle, 'blog-title').value"/>
                        </div>
                    </blog-item>
                </div>
                <div class="mt-10 flex justify-center">
                    <pagination current="01" last="05" left-color="#fff"/>
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
import VInput from "../components/Input/VInput.vue";
import VLabel from "../components/Label/VLabel.vue";
import SearchInput from "../components/SearchInput/SearchInput.vue";
import BlogItem, {BlogItemProps, CategoryItem} from "../components/BlogItem/BlogItem.vue";
import {addClassToTitle} from "../untils/title";
import Pagination from "../components/Pagination/Pagination.vue";
import BlogList, {BlogListItem} from "../components/BlogList/BlogList.vue";
import VButton from "../components/Button/VButton.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'

interface BlogItemCustomImage {
    class: string,
    imageTitle: string
    default: BlogItemProps
}

const CATEGORIES: CategoryItem[] = [
    {
        name: 'Guides',
        url: '/',
        style: 'text-[#8DF63A]'
    },
    {
        name: 'Merch by Amazon',
        url: '/',
        style: 'text-[#F178B6]'
    },
    {
        name: 'Resources',
        url: '/',
        style: 'text-[#7879F1]'
    },
    {
        name: 'Strategies',
        url: '/',
        style: 'text-[#FFF731]'
    }
]

const BLOG_ITEMS: BlogItemCustomImage[] = [
    {
        class: 'bg-[#FCDDEC]',
        imageTitle: "'How you can use' MyDesigns and Merch Titans to revolutionize your creative process",
        default: {
            title: 'How you can use MyDesigns and Merch Titans to revolutionize your creative process',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about'
        }
    },
    {
        class: 'bg-[#BABBFB]',
        imageTitle: "'T-Shirt Design Trends' to Keep an Eye on in 2021",
        default: {
            title: 'T-Shirt Design Trends to Keep an Eye on in 2021',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about one of'
        }
    },
    {
        class: 'bg-[#FFEFC3]',
        imageTitle: "'How you can use' MyDesigns and Merch Titans to revolutionize your creative process",
        default: {
            title: 'How you can use MyDesigns and Merch Titans to revolutionize your creative process',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about'
        }
    },
    {
        class: 'bg-[#E8C1FF]',
        imageTitle: "'T-Shirt Design Trends' to Keep an Eye on in 2021",
        default: {
            title: 'T-Shirt Design Trends to Keep an Eye on in 2021',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about one of'
        }
    },
    {
        class: 'bg-[#B8D3A5]',
        imageTitle: "'How you can use' MyDesigns and Merch Titans to revolutionize your creative process",
        default: {
            title: 'How you can use MyDesigns and Merch Titans to revolutionize your creative process',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about'
        }
    },
    {
        class: 'bg-[#C2F4FF]',
        imageTitle: "'T-Shirt Design Trends' to Keep an Eye on in 2021",
        default: {
            title: 'T-Shirt Design Trends to Keep an Eye on in 2021',
            author: 'Curtis Blackmore',
            date: 'February 4th, 2022',
            url: '/',
            categories: CATEGORIES,
            description: 'We all know 2020 was an unusual year – to say the least. However, 2021 is starting to look like a year of hope for some, and design trends for 2021 will become a reflection of that. Designs will be cheerful and funny to lighten the mood, so let’s start talking about one of'
        }
    },
]

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
        label: "'Blog'",
        url: '/blog'
    },
];
</script>

<style scoped>

</style>
