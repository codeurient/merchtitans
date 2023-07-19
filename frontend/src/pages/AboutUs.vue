<template>
    <main-template>
        <center-title-block title="<p>Learn more</p><p>'About Us'</p>"
                            :background-image="bgBlock"
        >
            <div class="flex flex-col justify-center items-center">
                <div class="mt-2 text-2xl text-white text-center w-4/5">
                    our services, and the incredible team responsible for creating this platform.
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] mt-[-20px] pb-28">
            <v-ellipse/>
            <div class="mt-[-1000px] mb-64 z-10">
                <img
                    class="block-with-block-video"
                    src="./../assets/images/about_us/merch_titan.svg"
                    alt=""
                />
            </div>
           
            <about-slider
                :title="slide.title"
                :fPseudoTitle="slide.fPseudoTitle"
                :fPseudoText="slide.fPseudoText"
                :sPseudoTitle="slide.sPseudoTitle"
                :sPseudoText="slide.sPseudoText"
                :avatar="slide.avatar"
                :name="slide.name"
                :situation="slide.situation"
                :about="slide.about"
                :linkedin="slide.linkedin"
                :facebook="slide.facebook"
                :twitter="slide.twitter"
                :image="slide.image"
                v-for="(slide, index) in SLIDERS" :key="index"  v-show="index === currentSlideIndex" 
            />

            <div class="flex w-3/5 mt-11">
                <pagination :current="currentSlideNumber" :last="SLIDERS.length.toString()" @previous="goToPreviousSlide" @next="goToNextSlide" />
            </div>

            
            <div
                class="w-full max-w-[1370px] h-full bg-[url('/src/assets/images/about_us/blocks_background.svg')] mt-20 pl-36 pr-28 rounded-3xl">
                <div class="mt-40 mb-10">
                    <about-us-left-block
                        title="How did Merch Titans begin?"
                        subtitle="We saw the potential in Merch by Amazon"
                        description="We saw the potential in Merch by Amazon early and joined the platform before it switched to closed application/invite only. Before Merch Titans we were heavily focused on building and growing a successful web design and development company, but the potential of Merch by Amazon and the Print on Demand industry as a whole was too strong… We shifted our entire focus to building Merch Titans and our suite of incredible tools that will effectively streamline your Merch by Amazon market, niche, product, and keyword research needs."
                        :image="image1"
                        class-text-color="text-[#8DF63A]"
                    />
                    <div class="mt-28">
                        <about-us-left-block
                            title="What is our vision?"
                            subtitle="We plan on becoming the premiere solution"
                            description="for all your Merch by Amazon market research needs. Once this platform has reached maturity we will offer an entire suite of tools that will fill all your needs. From product research, keyword research, product tracking, and a bubbling online community of like-minded members to full fledged graphic design services and packages -- we'll offer it all. We have a long road ahead of us, but with your creativity, feedback, and suggestions there's nothing our team can't build for you."
                            :image="image2"
                            :reverse="true"
                            class-text-color="text-[#F900DF]"
                        />
                    </div>
                    <div class="mt-36">
                        <about-us-left-block
                            title="What do we do?"
                            subtitle="Merch Titans combines many valuable marketing research tools"
                            description="and guides into one central dashboard for convenience and efficiency. Our membership gives you access to our Product Search, Brand Search, Product Tracker, Product SEO Analyzer, Favorites, Titans Vault, and Keyword Research tools along with access to our private members only forum."
                            :image="image3"
                            class-text-color="text-[#5D5FEF]"
                        />
                    </div>
                    <div class="mt-20">
                        <about-us-left-block
                            title="Why did we create Merch Titans?"
                            subtitle="We created Merch Titans because"
                            description="there is a need for it and we personally needed it to take our Merch by Amazon business to the next level. We have an incredible team and we believed from the beginning that we could create a better and more innovative tool/service than the competing tools/services in the Merch by Amazon marketing research space at a better price."
                            :image="image4"
                            :reverse="true"
                            class-text-color="text-[#FFB507]"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main-template>
</template>


<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import AboutUsLeftBlock from "../components/Block/AboutUs/AboutUsLeftBlock.vue";
import Pagination from "../components/Pagination/Pagination.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import bgBlock from "../assets/images/about_us/title_block_background.svg";
import image1 from "../assets/images/about_us/image1.svg";
import image2 from "../assets/images/about_us/image2.svg";
import image3 from "../assets/images/about_us/image3.svg";
import image4 from "../assets/images/about_us/image4.svg";

import { ref, watch } from 'vue';
import AboutSlider, {AboutSliderProps} from "../components/AboutSlider/AboutSlider.vue";

import image5 from "../assets/images/about_us/curtis_blackmore.png";
import image6 from "../assets/images/about_us/linkedin.svg";
import image7 from "../assets/images/about_us/facebook.svg";
import image8 from "../assets/images/about_us/twitter.svg";
import image9 from "../assets/images/about_us/office.jpg";


const SLIDERS: AboutSliderProps[] = [
    {
        title: '1 What we do?',
        fPseudoTitle: '1 At Merch Titans, we continually',
        fPseudoText:  '1 strive to build the best and most innovative all-in-one marketing and product research service\n' +
                      'for the Merch by Amazon Print on Demand platform. Our service will help you quickly find profitable\n' +
                      'markets, niches, and ideas on Amazon.com.',
        sPseudoTitle: '1 Merch Titans suite of tools',
        sPseudoText:  '1 will efficiently streamline how you do your market research on Amazon and quickly provide you\n' +
                      'with relevant data and information that will ultimately increase your overall revenue and sales while\n' +
                      'saving you time',
        avatar: image5,
        name: '1 Curtis Blackmore',
        situation: 'Co-Founder at MyDesigns.io',
        about: '1 I build software that makes it easy for creators to monetize digital assets.', 
        linkedin: image6,
        facebook: image7,
        twitter: image8,
        image: image9,
    },
    {
        title: '2 What we do?',
        fPseudoTitle: '2 At Merch Titans, we continually',
        fPseudoText:  '2 strive to build the best and most innovative all-in-one marketing and product research service\n' +
                      'for the Merch by Amazon Print on Demand platform. Our service will help you quickly find profitable\n' +
                      'markets, niches, and ideas on Amazon.com.',
        sPseudoTitle: '2 Merch Titans suite of tools',
        sPseudoText:  '2 will efficiently streamline how you do your market research on Amazon and quickly provide you\n' +
                      'with relevant data and information that will ultimately increase your overall revenue and sales while\n' +
                      'saving you time',
        avatar: image5,
        name: '2 Curtis Blackmore',
        situation: '2 Co-Founder at MyDesigns.io',
        about: '2 I build software that makes it easy for creators to monetize digital assets.', 
        linkedin: image6,
        facebook: image7,
        twitter: image8,
        image: image9,
    },
    {
        title: '3 What we do?',
        fPseudoTitle: '3 At Merch Titans, we continually',
        fPseudoText:  '3 strive to build the best and most innovative all-in-one marketing and product research service\n' +
                      'for the Merch by Amazon Print on Demand platform. Our service will help you quickly find profitable\n' +
                      'markets, niches, and ideas on Amazon.com.',
        sPseudoTitle: '3 Merch Titans suite of tools',
        sPseudoText:  '3 will efficiently streamline how you do your market research on Amazon and quickly provide you\n' +
                      'with relevant data and information that will ultimately increase your overall revenue and sales while\n' +
                      'saving you time',
        avatar: image5,
        name: '3 Curtis Blackmore',
        situation: '3 Co-Founder at MyDesigns.io',
        about: '3 I build software that makes it easy for creators to monetize digital assets.', 
        linkedin: image6,
        facebook: image7,
        twitter: image8,
        image: image9,
    },
    {
        title: '4 What we do?',
        fPseudoTitle: '4 At Merch Titans, we continually',
        fPseudoText:  '4 strive to build the best and most innovative all-in-one marketing and product research service\n' +
                      'for the Merch by Amazon Print on Demand platform. Our service will help you quickly find profitable\n' +
                      'markets, niches, and ideas on Amazon.com.',
        sPseudoTitle: '4 Merch Titans suite of tools',
        sPseudoText:  '4 will efficiently streamline how you do your market research on Amazon and quickly provide you\n' +
                      'with relevant data and information that will ultimately increase your overall revenue and sales while\n' +
                      'saving you time',
        avatar: image5,
        name: '4 Curtis Blackmore',
        situation: '4 Co-Founder at MyDesigns.io',
        about: '4 I build software that makes it easy for creators to monetize digital assets.', 
        linkedin: image6,
        facebook: image7,
        twitter: image8,
        image: image9,
    },
    {
        title: '5 What we do?',
        fPseudoTitle: '5 At Merch Titans, we continually',
        fPseudoText:  '5 strive to build the best and most innovative all-in-one marketing and product research service\n' +
                      'for the Merch by Amazon Print on Demand platform. Our service will help you quickly find profitable\n' +
                      'markets, niches, and ideas on Amazon.com.',
        sPseudoTitle: '5 Merch Titans suite of tools',
        sPseudoText:  '5 will efficiently streamline how you do your market research on Amazon and quickly provide you\n' +
                      'with relevant data and information that will ultimately increase your overall revenue and sales while\n' +
                      'saving you time',
        avatar: image5,
        name: '5 Curtis Blackmore',
        situation: '5 Co-Founder at MyDesigns.io',
        about: '5 I build software that makes it easy for creators to monetize digital assets.', 
        linkedin: image6,
        facebook: image7,
        twitter: image8,
        image: image9,
    },
]

const currentSlideIndex = ref(0);

const goToPreviousSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--;
  }
};

const goToNextSlide = () => {
  if (currentSlideIndex.value < SLIDERS.length - 1) {
    currentSlideIndex.value++;
  }
};

const currentSlideNumber = ref('01'); 

watch(currentSlideIndex, (newValue) => {
  const slideNumber = newValue + 1;
  currentSlideNumber.value = slideNumber.toString().padStart(2, '0');
});


</script>

<style scoped>

</style>
