<template>
    <main-template>
        <title-block
            title="'Automate Your Design Uploads' to Several Print on Demand"
            description="Marketplaces with Ease and Increase Sales..."
            :background-image="tshirt"
        >
          <template v-slot:button>
            <div class="mt-14">
              <div class="w-56">
                  <v-button>
                      GET STARTED >
                  </v-button>
              </div>
            </div>
            <div class="mt-12 italic text-xl font-medium text-white/60">
              Without Having To Hire or Rely on A Team!
            </div>
          </template>
        </title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] mb-28">
          <v-ellipse/>
          <div class="sm:mt-[-250px] md:mt-[-300px] lg:mt-[-360px] xl:mt-[-420px] 2xl:mt-[-500px] mb-64 z-10">
            <video-block/>
          </div>
          <div class="w-full max-w-[1290px] bg-[url('/src/assets/images/home/block_background.svg')] text-white pt-28 rounded-2xl">
            <div class="pl-28 pr-12">
              <block-with-two-column
                  title="'Print on Demand' Automation Reimagined"
                  subtitle=" Having your Print on Demand business automated has never been easier with Merch Titans Automation 2.0"
                  :description="DESCRIPTION"
              >
                <img
                    class="mt-[-100px] ml-20"
                    src="./../assets/images/home/statistics.png"
                    alt=""
                />
              </block-with-two-column>
              <div class="pl-16">
                <block-list
                    title="'How Merch Titans' Automation Works "
                    :items="LIST_ITEMS"
                >
                  <img
                      class="mt-[-100px]"
                      src="./../assets/images/home/desktop.png"
                      alt=""
                  />
                  <img
                      class="mt-[-100px]"
                      src="./../assets/images/home/frame.png"
                      alt=""
                  />
                </block-list>
                <block-two-column-with-image
                    title="'Product & Brand' Search"
                    :description="PRODUCT_AND_BRAND_DESCRIPTION"
                >
                  <template v-slot:image>
                    <img
                        class="scale-100"
                        src="../assets/images/home/desktop-2.png"
                        alt=""
                    />
                  </template>
                </block-two-column-with-image>
                <div class="mt-[-100px]">
                  <block-two-column-with-image
                      title="'Keyword Research,' Suggestions and Autocomplete"
                      :description="KEYWORD_RESEARCH_DESCRIPTION"
                  >
                    <template v-slot:image>
                      <img
                          class="scale-100"
                          src="../assets/images/home/desktop-3.png"
                          alt=""
                      />
                    </template>
                  </block-two-column-with-image>
                </div>
              </div>
            </div>
          </div>
        </section>
        <pod-block/>
        <price-block classes-section="bg-white" @change="updateMode">
            <div class="flex justify-center items-center">
                <price-card
                    :title="price.title"
                    :features="price.features"
                    :cent="price.cent"
                    :dollar="price.dollar"
                    :description="price?.description"
                    :inner-class="price.innerClass"
                    :mode="price.mode"
                    v-for="(price, index) in filteredPrices" :key="index"
                />
            </div>
        </price-block>
        <testimonials-block/>
        <help-block>
            <help-items-block :items="HELPER_ITEMS" @change="updateHelperItem"/>
        </help-block>
    </main-template>
</template>

<script setup lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import TestimonialsBlock from "../components/Testimonials/TestimonialsBlock.vue";
import PodBlock from "../components/Pod/PodBlock.vue";
import TitleBlock from "../components/TitleBlock/TitleBlock.vue";
import VButton from "../components/Button/VButton.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import BlockWithTwoColumn from "../components/Block/BlockWithTwoColumn.vue";
import BlockList from "../components/Block/BlockList.vue";
import BlockTwoColumnWithImage from "../components/Block/BlockTwoColumnWithImage.vue";
import HelpBlock from "../components/Help/HelpBlock.vue";
import HelpItemsBlock, {HelpItem} from "../components/Help/HelpItemsBlock.vue";
import { ref, computed } from "vue";
import PriceCard, {PriceCardProps} from "../components/PriceCard/PriceCard.vue";
import PriceBlock from "../components/Price/PriceBlock.vue";
import VideoBlock from "../components/Block/VideoBlock.vue";
import {useUserStore} from "../untils/store/userStore";
import tshirt from '../assets/images/home/t_shirt.svg'

const userStore = useUserStore()
userStore.fetchUser()

const DESCRIPTION = "<p>Take your designs and automate your uploads to multiple Print\n" +
    "                    on Demand marketplaces simultaneously at the click of a button.\n" +
    "                    No more manual uploads.</p><br/><p>Our App will remove the tedious and\n" +
    "                    time-consuming process of uploading designs to multiple Print on\n" +
    "                    Demand marketplaces and allow you to scale your business and\n" +
    "                    passive income streams to new heights.</p>"

const LIST_ITEMS = [
    'Install the application on your computer. It’s available for Windows & Mac. ',
    'Export a blank spreadsheet from the app and fill in the content details for each design. ',
    'Adjust the settings inside the app to your liking for each specific Print on Demand platform. ',
    'Click start and watch the automation magic go to work for you.',
    'Spend your new-found extra time doing the things you love doing. ',
    'Repeat steps 1-5 with new designs and content as you please. '
]

const PRODUCT_AND_BRAND_DESCRIPTION = "Product search alows you to quickly search Amazon and pull relevant real-time product data and " +
    "information for any keyword you enter. You can also search brands and quickly find their top selling products."

const KEYWORD_RESEARCH_DESCRIPTION = "<p>With this module you can search for any keyword you desire. Our tool will then check Amazon to see what other 'suggestions\" and\"autocomplete\"' keywords there are that are actually being searched for by consumers that are related to your primary keyword.</p>" +
    "<br/>" +
    "<p>We then take these keywords and pull the 'search volume\" from Google and 3rd party partners so that you can quickly get very accurate and 3rd party partners so that you can quickly get very accurate insights into how many searches per month your primary keyword and all other related keywords are receiving along with competition score, CPC, total products on Amazon per keyword, and more.</p>"

const PRICES: PriceCardProps[] = [
    {
        // innerClass: 'scale-75 relative left-14',
        innerClass: 'z-10',
        dollar: 24,
        cent: 99,
        title: 'Single Platform Access',
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
        ],
        mode: 'Monthly',
    },
    {
        innerClass: 'z-10',
        dollar: 69,
        cent: 99,
        title: 'All Access Pass',
        features: [
            'Merch Titans Automation software',
            'Instant download access (Windows/macOS)',
            // 'Unlimited access to one platform (of your choice)',
            'Computer Fingerprint',
            'Unlimited uploads',
            'Continued free updates',
            // 'Access to private members area',
            // 'Access to private training videos and guides',
            // 'Access to private Facebook community',
            'Dedicated customer support'
        ],
        mode: 'Annual',
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
]

const selectedMode = ref('Monthly');

const filteredPrices = computed(() => {
  return PRICES.filter(price => {
    if (selectedMode.value === 'Monthly') {
      return price.mode === 'Monthly';
    } else if (selectedMode.value === 'Annual') {
      return price.mode === 'Annual';
    }
    return false;
  });
});

// Вывод выбранного режима в консоль
console.log('Selected Mode:', selectedMode.value);

// Вывод отфильтрованных цен в консоль только при выборе Annual
if (selectedMode.value === 'Annual') {
  console.log('Filtered Prices:', filteredPrices.value);
}

// Обработчик изменения режима
const updateMode = (mode: string) => {
  selectedMode.value = mode;
};



const HELPER_ITEMS = ref<HelpItem[]>([
    {
        label: 'Is Merch Titans Automation free to use?',
        text: 'We offer a free plan that allows you to upload 3 designs to each platform we support per day. That’s a\n' +
            ' total of 24 designs per day and up to 720 designs per month. Try it for free by registering for an\n' +
            ' account, confirming your email, and downloading the software. Upgrade to a paid plan for unlimited daily\n' +
            ' uploads whenever you’re ready.',
        visible: false
    },
    {
        label: 'Is Merch Titans Automation free to use?',
        text: 'We offer a free plan that allows you to upload 3 designs to each platform we support per day. That’s a\n' +
            ' total of 24 designs per day and up to 720 designs per month. Try it for free by registering for an\n' +
            ' account, confirming your email, and downloading the software. Upgrade to a paid plan for unlimited daily\n' +
            ' uploads whenever you’re ready.',
        visible: false
    },
    {
        label: 'Is Merch Titans Automation free to use?',
        text: 'We offer a free plan that allows you to upload 3 designs to each platform we support per day. That’s a\n' +
            ' total of 24 designs per day and up to 720 designs per month. Try it for free by registering for an\n' +
            ' account, confirming your email, and downloading the software. Upgrade to a paid plan for unlimited daily\n' +
            ' uploads whenever you’re ready.',
        visible: false
    },
    {
        label: 'Is Merch Titans Automation free to use?',
        text: 'We offer a free plan that allows you to upload 3 designs to each platform we support per day. That’s a\n' +
            ' total of 24 designs per day and up to 720 designs per month. Try it for free by registering for an\n' +
            ' account, confirming your email, and downloading the software. Upgrade to a paid plan for unlimited daily\n' +
            ' uploads whenever you’re ready.',
        visible: false
    },
    {
        label: 'Is Merch Titans Automation free to use?',
        text: 'We offer a free plan that allows you to upload 3 designs to each platform we support per day. That’s a\n' +
            ' total of 24 designs per day and up to 720 designs per month. Try it for free by registering for an\n' +
            ' account, confirming your email, and downloading the software. Upgrade to a paid plan for unlimited daily\n' +
            ' uploads whenever you’re ready.',
        visible: false
    }
])

const updateHelperItem = (item: HelpItem, index: keyof HelpItem[]) => {
    HELPER_ITEMS.value = HELPER_ITEMS.value.map((el, i) => i === index ? item: el)
}
</script>

<style scoped>

</style>
