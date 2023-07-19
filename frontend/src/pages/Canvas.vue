<template>
  <main-template>
      <title-block
          title="Scaling Designs on 'Canva' Has Never Easier"
          description="Canvas Titans makes it easy to use variable data from a CSV file to scale your designs and automate the downloads on Canva.com"
          :background-image="bgImage"
      >
        <template v-slot:button>
          <div class="flex mt-14 gap-20 pr-28">
            <div class="basis-2/6">
                <div class="w-full">
                    <v-button @click="scrollToPricing">
                        GET STARTED >
                    </v-button>
                </div>
            </div>
            <div class="basis-4/6">
              <v-outline-button inner-class="w-full h-full">
                Add Canvas Titans Chrome Extension >
              </v-outline-button>
            </div>
          </div>
        </template>
      </title-block>
      <section class="flex flex-col items-center bg-[#F8F8F9] mb-28">
        <v-ellipse/>
        <div class="mt-[-300px] mb-64 z-10">
          <video-block/>
        </div>
        <div
            class="w-full max-w-[1070px] bg-[url('/src/assets/images/canvas/blocks_background.svg')] text-white pt-28 rounded-2xl">
          <div class="pl-28 pr-12">
            <block-with-two-column
                title="Create and scale hundreds of designs in 'minutes'"
                subtitle="Scaling designs with variable data on Canva.com just became easy..."
                :description="DESCRIPTION"
            >
              <img
                  class="mb-8"
                  src="./../assets/images/canvas/create_canvas.svg"
                  alt=""
              />
            </block-with-two-column>
            <div class="pl-16 mb-28">
              <block-list
                  title="How Canvas Titans 'Works'"
                  :items="LIST_ITEMS"
              >
                <img
                    class="my-32"
                    src="./../assets/images/canvas/canvas_titan.svg"
                    alt=""
                />
              </block-list>
              <block-two-column-with-image
                  title="'Keyword Research,' Suggestions and Autocomplete"
                  :description="KEYWORD_RESEARCH_DESCRIPTION"
              >
                <template v-slot:image>
                  <img
                      src="./../assets/images/canvas/keyword_research.svg"
                      alt=""
                  />
                </template>
              </block-two-column-with-image>
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
import TitleBlock from "../components/TitleBlock/TitleBlock.vue";
import VButton from "../components/Button/VButton.vue";
import VOutlineButton from "../components/Button/VOutlineButton.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import BlockWithTwoColumn from "../components/Block/BlockWithTwoColumn.vue";
import BlockList from "../components/Block/BlockList.vue";
import BlockTwoColumnWithImage from "../components/Block/BlockTwoColumnWithImage.vue";
import BlockAvailablePlatform from "../components/Block/BlockAvailablePlatform.vue";
import FullPriceCard from "../components/PriceCard/FullPriceCard.vue";
import {ref, computed} from "vue";
import HelpItemsBlock, {HelpItem} from "../components/Help/HelpItemsBlock.vue";
import HelpBlock from "../components/Help/HelpBlock.vue";
import PriceBlock from "../components/Price/PriceBlock.vue";
import VideoBlock from "../components/Block/VideoBlock.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import bgImage from "../assets/images/canvas/title_block_background.svg";


import PriceCard, {PriceCardProps} from "../components/PriceCard/PriceCard.vue";

const PRICES: PriceCardProps[] = [
  {
      dollar: 14,
      cent: 99,
      title: 'All Access Pass',
      features: [
            'Canvas Titans Google Chrome Extension',
            '1 Computer Fingerprint',
            'Unlimited uploads',
            'Unlimited cycling & downloads',
            'Continued free updates',
            'Access to private members area',
            'Access to private training videos and guides',
            'Access to private Facebook community',
            'Dedicated customer support',
      ],
      mode: 'Monthly',
  },
  {
      dollar: 20,
      cent: 99,
      title: 'All Access Pass',
      features: [
            'Canvas Titans Google Chrome Extension',
            '1 Computer Fingerprint',
            'Unlimited uploads',
            'Unlimited cycling & downloads',
            'Continued free updates',
            'Access to private members area',
            'Access to private training videos and guides',
            'Access to private Facebook community',
            'Dedicated customer support',
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

const DESCRIPTION = "<p>With the Canvas Titans Chrome Extension, you can very easily create high quality scaleable designs on Canva.com, and completely automate the entire process of swapping out variables and downloading your designs. No need to manually do this anymore.</p>" +
  "<br/>" +
  "<p>Our extension is perfect for designers that utilize Print on Demand platforms such as Merch by Amazon, Kindle Direct Publishing, RedBubble, and more. It’s also great for Marketers or Influencers that need to create various scaleable graphics for Social Media, or Marketing purposes.</p>"

const KEYWORD_RESEARCH_DESCRIPTION = "<p>With this module you can search for any keyword you desire. Our tool will then check Amazon to see what other 'suggestions' and 'autocomplete' keywords there are that are actually being searched for by consumers that are related to your primary keyword.</p>" +
  "<br/>" +
  "<p>We then take these keywords and pull the 'search volume' from Google and 3rd party partners so that you can quickly get very accurate and 3rd party partners so that you can quickly get very accurate insights into how many searches per month your primary keyword and all other related keywords are receiving along with competition score, CPC, total products on Amazon per keyword, and more.</p>";

const LIST_ITEMS = [
  'Add our Canvas Titans Chrome Extension to Chrome. <a href="https://chrome.google.com/webstore/detail/canvas-titans/offeecbmmicbaplehihddpmgcjlekcgm/" target="_blank" class="text-[#FDC43A]">Available Here</a>',
  'Create a scaleable design on <a class="text-[#FDC43A]" target="_blank" href="https://www.canva.com/ru_ru/">Canva.com</a>',
  'Export a CSV spreadsheet from Canvas Titans and fill it with your scaleable variable data',
  'Name your scaleable Canva layers to variables available in the spreadsheet. (eg: VAR1)',
  'Adjust your Mode to Cycle Variables or Download',
  'Select your file type (PNG, JPG, or PDF)',
  'Click Submit and watch the automated scaling and downloading magic happen'
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
