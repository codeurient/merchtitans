<template>
    <main-template>
        <center-title-block title="<p>Choose</p><p>'your Plan'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="text-white">
                <price-switcher :items="prices" @change="update"/>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="flex mt-[-750px] w-full justify-center z-10 p-28">
                <price-card
                    :title="price.title"
                    :features="price.features"
                    :cent="price.cent"
                    :dollar="price.dollar"
                    :description="price?.description"
                    :inner-class="price.innerClass"
                    v-for="(price, index) in PRICES" :key="index"
                />
            </div>
        </section>
        <help-block>
            <help-items-block :items="HELPER_ITEMS" @change="updateHelperItem"/>
        </help-block>
    </main-template>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import PriceSwitcher, {PriceSwitcherItem} from "../components/PriceSwitcher/PriceSwitcher.vue";
import PriceCard, {PriceCardProps} from "../components/PriceCard/PriceCard.vue";
import HelpBlock from "../components/Help/HelpBlock.vue";
import HelpItemsBlock, {HelpItem} from "../components/Help/HelpItemsBlock.vue";
import {Ref, ref} from "vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Register',
        url: '/register'
    },
    {
        label: 'Pricing plans',
        url: '/pricing-plans'
    }
];

const PRICES: PriceCardProps[] = [
    // {
    //     innerClass: 'scale-75 relative left-14',
    //     dollar: 24,
    //     cent: 99,
    //     title: 'Single Platform Access',
    //     features: [
    //         'Merch Titans Automation software',
    //         'Instant download access (Windows/macOS)',
    //         'Unlimited access to one platform (of your choice)',
    //         'Computer Fingerprint',
    //         'Unlimited uploads',
    //         'Continued free updates',
    //         'Access to private members area',
    //         'Access to private training videos and guides',
    //         'Access to private Facebook community',
    //         'Dedicated customer support'
    //     ]
    // },
    {
        innerClass: 'z-10',
        dollar: 69,
        cent: 99,
        title: 'All Access Pass',
        features: [
            'Merch Titans Automation software',
            'Instant download access (Windows/macOS)',
            'Unlimited access to one platform (of your choice)',
            'Computer Fingerprint',
            'Unlimited uploads',
            'Continued free updates',
            'Access to private members area',
            'Access to private training videos and guides',
            'Access to private Facebook community',
            'Dedicated customer support'
        ]
    },
    // {
    //     innerClass: 'scale-75 relative right-14',
    //     dollar: 1999,
    //     cent: 99,
    //     title: 'Lifetime Pass',
    //     description: 'one time payment',
    //     features: [
    //         'Merch Titans Automation software',
    //         'Instant download access (Windows/macOS)',
    //         'Unlimited access to one platform (of your choice)',
    //         'Computer Fingerprint',
    //         'Unlimited uploads',
    //         'Continued free updates',
    //         'Access to private members area',
    //         'Access to private training videos and guides',
    //         'Access to private Facebook community',
    //         'Dedicated customer support'
    //     ]
    // },
];

const HELPER_ITEMS: Ref<HelpItem[]> = ref<HelpItem[]>([
    {
        label: 'Do I need to sign a long-term contract?',
        text: 'No, you can pay monthly or yearly. You can cancel and resubscribe whenever you like.',
        visible: true
    },
    {
        label: 'Do you offer a free trial?',
        text: ' Do you offer a free trial?',
        visible: false,
    },
    {
        label: 'What operating systems are compatible with Merch Titans Automation? ',
        text: 'What operating systems are compatible with Merch Titans Automation? ',
        visible: false,
    },
    {
        label: 'Are my designs and information safe?',
        text: 'Are my designs and information safe?',
        visible: false,
    },
    {
        label: 'Can I upload trademarked or copyrighted content?',
        text: 'Can I upload trademarked or copyrighted content?',
        visible: false,
    },
])

const updateHelperItem = (item: HelpItem, index: keyof HelpItem[]) => {
    HELPER_ITEMS.value = HELPER_ITEMS.value.map((el, i) => i === index ? item: el)
}

const prices = ref<PriceSwitcherItem[]>([
    {
        label: 'Monthly',
        value: 'Monthly',
        active: true
    },
    {
        label: 'Annual',
        value: 'Annual',
        active: false
    },
])

const update = (value: PriceSwitcherItem) => {
    prices.value = prices.value.map((item: PriceSwitcherItem) => ({...item, ...{active: false}}))
        .map((item: PriceSwitcherItem) => item.value === value.value ? {...item, ...{active : !item.active}} : item)
}

</script>

<style scoped>

</style>
