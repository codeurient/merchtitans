<template>
    <footer class="flex justify-center bg-[#13111D] py-16 text-white">
        <div class="w-2/3">
            <div class="flex items-center justify-between mb-20">
                <ul class="flex justify-center list-none text-xl gap-8">
                    <li>KDP HTML Generator</li>
                    <li>RedBubble Tag Generator</li>
                    <li>Etsy Tag Generator</li>
                </ul>
                <div class="flex gap-8">
                    <a href="/login">
                        <v-button inner-class="bg-rich-yellow/20 text-[#F4B913]">Login</v-button>
                    </a>
                    <a href="/register">
                        <v-outline-button>Register</v-outline-button>
                    </a>
                </div>
            </div>
            <div class="flex justify-center gap-20">
                <div class="basis-1/2 border-r-[#7e75a5]/25 border-r">
                    <footer-group-list :title="LINK_LIST.title" :items="LINK_LIST.items"/>
                </div>
                <div class="basis-1/2">
                    <footer-group-list :title="LEGAL_LIST.title" :items="LEGAL_LIST.items"/>
                </div>
            </div>
            <div class="mt-16 pt-6 border-t-[#7e75a5]/25 flex justify-between">
                <div class="flex items-center">
                    <img src="../assets/images/mt-logo-white.png" alt="">
                    <div class="ml-8">
                        <div class="text-sm text-[#C3BED7]">
                            9820 S Maryland Parkway Ste A-5 #220 Las Vegas, NV 89183
                        </div>
                        <div class="text-xs text-[#6D7280] mt-2">
                            ©2018 ~ 2022 Merch Titans LLC, All Rights Are Reserved
                        </div>
                    </div>
                </div>
                <div class="flex gap-6">
                    <a :href="social.url" v-for="(social, sIndex) in SOCIAL_LINKS" :key="sIndex">
                        <img :src="social.img" :alt="social.alt">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import FooterGroupList, {FooterListProps} from "./FooterList/FooterGroupList.vue";
import VOutlineButton from "./Button/VOutlineButton.vue";
import VButton from "./Button/VButton.vue";
import instagram from '../assets/images/icons/social/default/instagram.png';
import facebook from '../assets/images/icons/social/default/facebook.png';
import youtube from '../assets/images/icons/social/default/youtube.png';
import twitter from '../assets/images/icons/social/default/twitter.png';


const SOCIAL_LINKS = [
    {
        url: '/',
        img: instagram,
        alt: 'instagram'
    },
    {
        url: '/',
        img: facebook,
        alt: 'facebook'
    },
    {
        url: '/',
        img: youtube,
        alt: 'youTube'
    },
    {
        url: '/',
        img: twitter,
        alt: 'twitter'
    },
]

const LINK_LIST: FooterListProps = {
    title: 'Links',
    items: [
        {
            url: '/pricing-plans',
            label: 'MTA Pricing'
        },
        {
            url: '/pricing-plans',
            label: 'KDPA Pricing'
        },
        {
            url: '/pricing-plans',
            label: 'Canvas Titans Pricing'
        },
        {
            url: '/blog',
            label: 'Blog'
        },
    ]
}

const LEGAL_LIST: FooterListProps = {
    title: 'Legal',
    items: [
        {
            url: '/privacy-policy',
            label: 'Privacy Policy'
        },
        {
            url: '/terms-of-service',
            label: 'Terms of Service'
        },
        {
            url: '/cancellation-policy',
            label: 'Refund Policy'
        },
        {
            url: '/',
            label: 'Cookie Policy'
        },
        {
            url: '/contact-us',
            label: 'Contact Us'
        },
        {
            url: '/about-us',
            label: 'About Us'
        },
    ]
}

</script>

<style scoped>

</style>
