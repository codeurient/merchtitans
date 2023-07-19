<template>
    <section class="bg-[url('/src/assets/images/home/bg-block.svg')] bg-blend-overlay mix-blend-overlay py-20 mt-24">
        <div class="flex justify-center text-[#6D7280] text-xl">
            Integrations
        </div>
        <div class="mt-4 flex justify-center font-bold text-2xl sm:text-4xl lg:text-6xl text-white mb-20">
            POD Platforms We Support
        </div>
        <div class="flex justify-center">
            <div class="grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-4 w-1/2">
                
                <div class="container-gradient" v-for="(item, index) in card" :key="index">
                    <pod-card
                        :background="item.background"
                        :image="item.image"
                        :description="item.description"
                        :title="item.title"
                    />
                </div>
            </div>
        </div>
    </section>
</template>






<script setup lang="ts">
import PodCard, {PodCardProps} from "./PodCard.vue";
import {GRADIENT_COLOR} from "../../constants/gradient-color";
import amazon from '../../assets/images/pod/amazon.png';
import rb from '../../assets/images/pod/rb-2.png';
import printful from '../../assets/images/pod/goru-2.png';
import spreadshirt from '../../assets/images/pod/heart.png';
import teepublic from '../../assets/images/pod/TeePublic.png';
import teespring from '../../assets/images/pod/TeeSpring.png';

const card: PodCardProps[] = [
    {
        background: GRADIENT_COLOR.ORANGE,
        description: 'Automated publishing to all of Merch by Amazon’s products and marketplaces along with automatic\n' +
            ' image resizing, language translation, and more.',
        image: amazon,
        title: 'Merch by Amazon'
    },
    {
        background: GRADIENT_COLOR.RED,
        description: 'Automated publishing to all of RedBubble’s products using RedBubble’s new template copy system\n' +
            ' giving you full control over design placement and positioning.',
        image: rb,
        title: 'RedBubble'
    },
    {
        background: GRADIENT_COLOR.CYAN,
        description: 'Automated design uploads to Printful and any integration that Printful supports such as Etsy,\n' +
            ' Amazon, Shopify, Wish, Woocommerce, eBay, and more.',
        image: printful,
        title: 'Printful'
    },
    {
        background: GRADIENT_COLOR.CYAN,
        description: 'Automatically publish your designs on all supported Spreadshirt products on the three most\n' +
            ' popular marketplaces: The United States, Germany, and the United Kingdom.',
        image: spreadshirt,
        title: 'Spreadshirt'
    },
    {
        background: GRADIENT_COLOR.WHITE,
        description: 'Publish and resize your designs automatically on TeePublic with Merch Titans Automation using\n' +
            ' the traditional upload method or the new template copy option.',
        image: teepublic,
        title: 'TeePublic'
    },
    {
        background: GRADIENT_COLOR.RED,
        description: 'Upload and automatically publish your designs on Teespring and all of Teespring’s supported\n' +
            ' products in a matter of minutes with Merch Titans Automation.',
        image: teespring,
        title: 'TeeSpring'
    }
];

</script>

<style scoped>
  
</style>
