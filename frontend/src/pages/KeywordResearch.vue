<template>
    <main-template>
        <center-title-block title="<p>Keyword</p><p>'Research'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center max-w-2xl">
                    <p>Quickly generate a list of the TOP tags from the Best</p>
                    <p>Selling products on with this free tool.</p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-650px] w-7/12 justify-center z-10 bg-white rounded-3xl relative p-2">
                <div class="flex gap-16">
                    <div class="basis-1/2 flex justify-center flex-col text-[#5D6483] text-base font-normal pl-20 pb-8">
                        <div class="mt-16">
                            <v-label>Keyword</v-label>
                            <v-input type="text"/>
                        </div>
                        <v-button class="mt-11">Get Tags</v-button>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img src="../assets/images/keyword/man.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div class="w-7/12 rounded-2xl mt-20 z-10 bg-white p-4">
                <div class="flex w-full gap-8">
                    <div class="basis-1/3 text-[#111215] text-2xl">Tags Output</div>
                    <div class="basis-1/3">
                        <div class="flex flex-col gap-8">
                            <div class="flex gap-4">
                                <div class="flex items-center justify-center bg-[#FF3A521A]/10 py-3 px-4 rounded-lg">
                                    <img src="../assets/images/keyword/most.svg" alt="">
                                    <p class="ml-2 font-semibold text-[#FF3A52] text-sm">most popular Tag</p>
                                </div>
                                <div class="flex items-center justify-center bg-[#FF3AD41A]/10 py-3 px-4 rounded-lg">
                                    <img src="../assets/images/keyword/hot.svg" alt="">
                                    <p class="ml-2 font-semibold text-[#FF3A52] text-sm">Hot Tag</p>
                                </div>
                            </div>
                            <div>
                                <v-select :items="ITEMS_CATEGORY"/>
                            </div>
                        </div>
                    </div>
                    <div class="basis-1/3">
                        <div class="flex flex-col gap-8">
                            <div class="flex gap-4">
                                <div
                                    class="basis-1/2 flex items-center justify-center bg-[#B43AFF]/10 py-3 px-4 rounded-lg">
                                    <img src="../assets/images/keyword/warm.svg" alt="">
                                    <p class="ml-2 font-semibold text-[#B43AFF] text-sm">Warm Tag</p>
                                </div>
                                <div
                                    class="basis-1/2 flex items-center justify-center bg-[#3A6CFF]/10 py-3 px-4 rounded-lg">
                                    <img src="../assets/images/keyword/cold.svg" alt="">
                                    <p class="ml-2 font-semibold text-[#3A6CFF] text-sm">Cold Tag</p>
                                </div>
                            </div>
                            <v-button>Format and Copy Tags</v-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rounded-3xl w-1/3 justify-between bg-white flex mt-24 py-10 px-20">
                <button @click="showLoginModal = true">Show Modal</button>
                <button @click="showRegisterModal = true">Show Register modal</button>
            </div>

            <div class="mt-20 w-7/12">
                <keyword-table color="#FF3A52" :items="ITEMS" :image="most"
                               title="Most popular Tag" inner-class="bg-[#FF3A52]/10" title-class="text-[#FF3A52]"/>
                <keyword-table color="#FF3AD4" :items="ITEMS" :image="hot"
                               title="Hot Tag" inner-class="bg-[#FF3AD4]/10" title-class="text-[#FF3AD4]" class="mt-20"/>
                <keyword-table color="#B43AFF" :items="ITEMS" :image="warm"
                               title="Warm Tag" inner-class="bg-[#B43AFF]/10" title-class="text-[#B43AFF]" class="mt-20"/>
                <keyword-table color="#3A6CFF" :items="ITEMS" :image="cold"
                               title="Cold Tag" inner-class="bg-[#3A6CFF]/10" title-class="text-[#3A6CFF]" class="mt-20"/>
            </div>
        </section>

    </main-template>

    <modal v-if="showLoginModal" @close="showLoginModal = false">
        <login-form @login="handleLogin">
            <div class="text-3xl font-bold text-[#27282D]">Log In</div>
            <div class="text-[#5D6483] mt-3 mb-10">Login to your private member area using the form below</div>
        </login-form>
    </modal>
    <modal v-if="showRegisterModal" @close="showRegisterModal = false">
        <register-form @register="handleRegister" @switchToLogin="showLoginModal = true" @closeRegisterModal="showRegisterModal = false">
            <div class="text-3xl font-bold text-[#27282D]">Create an Account</div>
            <div class="text-[#5D6483] mt-3 mb-10">Register to use this free tool</div>
        </register-form>
    </modal>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import {BlogItemProps, CategoryItem} from "../components/BlogItem/BlogItem.vue";
import {BlogListItem} from "../components/BlogList/BlogList.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import VLabel from "../components/Label/VLabel.vue";
import VInput from "../components/Input/VInput.vue";
import VButton from "../components/Button/VButton.vue";
import VSelect, {VSelectItem} from "../components/Select/VSelect.vue";
import {SearchItemProps} from "../components/SearchItem/SearchItem.vue";
import KeywordTable from "../components/KeywordTable/KeywordTable.vue";
import {KeywordTableItemProps} from "../components/KeywordTable/KeywordTableItem.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'
import most from "../assets/images/keyword/most.svg";
import hot from "../assets/images/keyword/hot.svg";
import warm from "../assets/images/keyword/warm.svg";
import cold from "../assets/images/keyword/cold.svg";
import { computed, ref, watch } from 'vue';
import Modal from "../components/Modal/Modal.vue";
import LoginForm from "../components/Form/LoginForm.vue";
import RegisterForm from "../components/Form/RegisterForm.vue";


const showLoginModal = ref(false)
const showRegisterModal = ref(false)
const isLoggedIn = ref(false); // Флаг для отслеживания состояния входа пользователя


const handleLogin = () => {
  // Логика для выполнения входа пользователя
  isLoggedIn.value = true;
  showLoginModal.value = false;
};

const handleRegister = () => {
  // Логика для регистрации пользователя
  isLoggedIn.value = true;
  showRegisterModal.value = false;
};

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Keyword Research',
        url: '/keyword'
    }
];

const ITEMS_CATEGORY: VSelectItem[] = [
    {
        value: 0,
        label: 'Guides'
    },
    {
        value: 1,
        label: 'Merch by Amazon'
    },
    {
        value: 2,
        label: 'Resources'
    },
    {
        value: 3,
        label: 'Strategies'
    },
]

const ITEMS: KeywordTableItemProps[] = [
    {
        tag: 'yoga',
        occurrences: 64
    },
    {
        tag: 'rabbit',
        occurrences: 56
    },
    {
        tag: 'aesthetic',
        occurrences: 76
    },
    {
        tag: 'dog',
        occurrences: 93
    },
    {
        tag: 'graphic',
        occurrences: 89
    },
    {
        tag: 'meditating',
        occurrences: 76
    },
    {
        tag: 'spiritual',
        occurrences: 55
    },
    {
        tag: 'meditating',
        occurrences: 76
    },
    {
        tag: 'graphic',
        occurrences: 89
    },
    {
        tag: 'dog',
        occurrences: 93
    },
    {
        tag: 'rabbit',
        occurrences: 56
    },
    {
        tag: 'aesthetic',
        occurrences: 76
    },
    {
        tag: 'meditating',
        occurrences: 76
    },
    {
        tag: 'zen',
        occurrences: 52
    },
    {
        tag: 'tshirt',
        occurrences: 69
    },
    {
        tag: 'style',
        occurrences: 48
    },
    {
        tag: 'yoga',
        occurrences: 64
    },
    {
        tag: 'women',
        occurrences: 46
    },
]

</script>

<style scoped>
</style>
