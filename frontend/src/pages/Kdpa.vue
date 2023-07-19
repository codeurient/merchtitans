<template>
    <main-template>
        <title-block
            title="Kindle 'Direct Publishing' Upload Automation"
            description="Save time and automate your Notebooks, Journals, Diaries and No Content or Low Content book uploads to Kindle Direct Publishing. Now supporting Paperback and Hardcover books!"
            :background-image="bgImage"
        >
          <template v-slot:button>
            <div class="mt-14">
              <div class="w-1/5">
                <v-button @click="scrollToPricing">
                    GET STARTED >
                </v-button>
              </div>
            </div>
          </template>
        </title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] mb-28">
          <v-ellipse/>
          <div class="w-full max-w-[1070px] bg-[url('/src/assets/images/kdpa/blocks_background.svg')] text-white pt-28 rounded-2xl mt-[-300px] z-10">
            <div class="pl-28 pr-12">
              <block-with-two-column
                  title="'KDP Upload' Automation Simplified"
                  subtitle="Having your KDPA business automated has never been easier"
                  :description="DESCRIPTION"
              >
                <img
                    class="w-full mb-20"
                    src="./../assets/images/kdpa/kdp_upload.svg"
                    alt=""
                />
              </block-with-two-column>
              <div class="pl-16">
                <block-list
                    title="'How KDPA' Software Works"
                    :items="LIST_ITEMS"
                >
                  <img
                      class="my-44"
                      src="./../assets/images/kdpa/kdpa.svg"
                      alt=""
                  />
                </block-list>
                <block-with-title title="Revolutionize 'your KDP' business with KDPA">
                  <img
                      class="mt-44 mb-24"
                      src="./../assets/images/kdpa/revolutionize_kdpa.svg"
                      alt=""
                  />
                </block-with-title>
              </div>
            </div>
            <block-available-platform/>
          </div>
        </section>
        <price-block @change="updateMode" id="pricing-section" classes-section="bg-[url(/src/assets/images/kdpa/price_background.svg)]">
          <div class="flex justify-center w-full mt-12 mb-32">
            <full-price-card
                    :title="price.title"
                    :dollar="price.dollar"
                    :cent="price.cent"
                    :features="price.features"
                    :mode="price.mode"
                    v-for="(price, index) in filteredPrices" :key="index"
                />
          </div>
        </price-block>
        <help-block>
            <help-items-block :items="HELPER_ITEMS" @change="updateHelperItem"/>
        </help-block>
    </main-template>
</template>


<script setup lang="ts">
import MainTemplate from "../templates/MainTemplate.vue";
import VButton from "../components/Button/VButton.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import BlockWithTwoColumn from "../components/Block/BlockWithTwoColumn.vue";
import TitleBlock from "../components/TitleBlock/TitleBlock.vue";
import BlockList from "../components/Block/BlockList.vue";
import BlockWithTitle from "../components/Block/BlockWithTitle.vue";
import FullPriceCard from "../components/PriceCard/FullPriceCard.vue";
import BlockAvailablePlatform from "../components/Block/BlockAvailablePlatform.vue";
import { ref, computed } from "vue";
import HelpItemsBlock, {HelpItem} from "../components/Help/HelpItemsBlock.vue";
import HelpBlock from "../components/Help/HelpBlock.vue";
import PriceBlock from "../components/Price/PriceBlock.vue";
import bgImage from "../assets/images/kdpa/title_block_background.png";

import PriceCard, {PriceCardProps} from "../components/PriceCard/PriceCard.vue";

const PRICES: PriceCardProps[] = [
    {
        dollar: 14,
        cent: 99,
        title: 'All Access Pass',
        features: [
            'Kindle Direct Publishing automation software',
            '1 Computer Fingerprint',
            'Continued free updates',
            'Access to private training videos and guides',
            'Dedicated customer support',
            'Instant download access (Windows/macOS)',
            'Unlimited uploads',
            'Access to private members area',
            'Access to private Facebook community',
        ],
        mode: 'Monthly',
    },
    {
        dollar: 20,
        cent: 99,
        title: 'All Access Pass',
        features: [
            'Kindle Direct Publishing automation software',
            '1 Computer Fingerprint',
            'Continued free updates',
            'Access to private training videos and guides',
            'Dedicated customer support',
            'Instant download access (Windows/macOS)',
            'Unlimited uploads',
            'Access to private members area',
            'Access to private Facebook community',
        ],
        mode: 'Annual',
    },
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

const DESCRIPTION = "<p>Manually uploading No Content and Low Content books to Kindle Direct Publishing is extremely time consuming. Wouldn’t you agree?</p>" +
    "<br/>" +
    "<p>With KDPA, finally, the days of manually uploading to Kindle Direct Publishing are over…</p>" +
    "<br/>" +
    "<p>With our new KDP Upload Automation software you can fully automate your uploads to Kindle Direct Publishing for Paperback Books. " +
    "It’s as easy as placing your data in a spreadsheet, adjusting your settings, and clicking start.</p>"

const LIST_ITEMS = [
    'Install our Kindle Direct Publishing Upload Automation application on your computer. It’s available for Windows & Mac.',
    'Export a blank spreadsheet from the app and fill in the content details for each book.',
    'Adjust the settings inside the app to fit the criteria for the style of book you are uploading.',
    'Utilize our ground breaking “Parallel” upload system to control and have multiple browser tabs uploading at the same time.',
    'Click start and watch the automation magic go to work for you.',
    'Spend your new-found extra time doing the things you love doing.',
    'Repeat steps 1-5 with new books and data as you please.',
]

const HELPER_ITEMS = ref<HelpItem[]>([
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

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style scoped>

</style>
