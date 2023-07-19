<template>
    <div class="flex justify-center bg-[#EEEEEE]">
        <div class="w-7/12">
            <div class="flex py-28">
                <div class="basis-1/4" v-for="(item, index) in ITEMS" :key="index">
                    <light-footer-list
                        :title="item.title"
                        :items="item.items"
                    />
                    <div class="flex mt-10" v-if="index === Object.keys(ITEMS).length - 1">
                        <div class="basis-1/4" v-for="(social, sIndex) in SOCIAL_LINKS" :key="sIndex">
                            <a :href="social.url"><img :src="social.img" :alt="social.alt"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-10 text-[#797687] border-t border-t-[#E4D9D9]">
                ©2018 ~ 2021 Merch Titans LLC, All Rights Are Reserved
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LightFooterList, {LightFooterItem, LightFooterListProps} from "./FooterList/LightFooterList.vue";
import facebook from '../assets/images/icons/social/light/facebook.svg'
import youtube from '../assets/images/icons/social/light/youtube.svg'
import instagram from '../assets/images/icons/social/light/instagram.svg'
import twitter from '../assets/images/icons/social/light/twitter.svg'

const SOCIAL_LINKS = [
    {
        url: '/',
        img: facebook,
        alt: 'facebook'
    },
    {
        url: '/',
        img: youtube,
        alt: 'youtube'
    },
    {
        url: '/',
        img: instagram,
        alt: 'instagram'
    },
    {
        url: '/',
        img: twitter,
        alt: 'twitter'
    },
]

const LEGAL_ITEMS: LightFooterItem[] = [
    {
        label: 'Privacy Policy',
        url: '/privacy-policy'
    },
    {
        label: 'Terms of Service',
        url: '/terms-of-service'
    },
    {
        label: 'Refund Policy',
        url: '/cancellation-policy'
    },
    {
        label: 'Cookie Policy',
        url: '/'
    },
    {
        label: 'Contact Us',
        url: '/contact-us'
    },
    {
        label: 'About Us',
        url: '/about-us'
    },
]

const LINKS_ITEMS: LightFooterItem[] = [
    {
        label: 'Register',
        url: '/register'
    },
    {
        label: 'Login',
        url: '/login'
    },
    {
        label: 'MTA Pricing',
        url: '/pricing-plans'
    },
    {
        label: 'KDPA Pricing',
        url: '/pricing-plans'
    },
    {
        label: 'Canvas Titans Pricing',
        url: '/pricing-plans'
    },
    {
        label: 'Blog',
        url: '/blog'
    },
]

const FREE_TOOLS_ITEMS: LightFooterItem[] = [
    {
        label: 'KDP HTML Generator',
        url: '/tag'
    },
    {
        label: 'RedBubble Tag Generator',
        url: '/tag'
    },
    {
        label: 'Etsy Tag Generator',
        url: '/tag'
    },
]

const OUR_ADDRESS_ITEMS: LightFooterItem[] = [
    {
        label: '9820 S Maryland Parkway Ste A-5 #220 Las Vegas, NV 89183',
        url: '#'
    }
]

const ITEMS: LightFooterListProps[] = [
    {
        title: 'Legal',
        items: LEGAL_ITEMS
    },
    {
        title: 'Links',
        items: LINKS_ITEMS
    },
    {
        title: 'Free Tools',
        items: FREE_TOOLS_ITEMS
    },
    {
        title: 'Our Address',
        items: OUR_ADDRESS_ITEMS
    }
]

</script>

<style scoped>

</style>
