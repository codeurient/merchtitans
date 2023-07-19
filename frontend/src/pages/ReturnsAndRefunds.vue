<template>
    <main-template>
        <center-title-block title="<p>Returns</p><p>'and Refunds'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-center max-w-xl">We offer a <span class="font-bold">14 Day Money Back Guarantee</span>
                    for our digital services once the order is confirmed.
                </div>
                <div class="text-white text-center max-w-5xl mt-1">If you are not satisfied with our service you may cancel
                    your subscription at any time which will immediately stop any further payments from processing.
                    We recommend contacting us for assistance if you experience any issues cancelling your subscription.
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-550px] w-1/2 justify-center z-10 bg-white rounded-3xl relative p-28">
                <div class="flex gap-10">
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <div class="text-2xl font-bold text-[#27282D]">Contact us</div>
                        <div class="text-[#5D6483] mt-2">
                            If you have any questions about our Cancellation Policy, please contact us:
                        </div>
                        <div class="mt-4">
                            By email:  <a href="mailto:support@merchtitans.com" target="_blank" class="text-[#5D5FEF]">support@merchtitans.com</a>
                        </div>
                        <div>
                            Online: <a href="/contact-us" target="_blank" class="text-[#5D5FEF]">Here</a>
                        </div>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img class="absolute bottom-[-40px]" src="../assets/images/returns_and_refunds/image1.svg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </main-template>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Returns and Refunds',
        url: '/cancellation-policy'
    }
];
</script>

<style scoped>

</style>
