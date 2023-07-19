<template>
    <main-template>
        <center-title-block title="<p>Tag</p><p>'Generator'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center max-w-2xl">
                    <p>You can easily copy and paste these tags into</p>
                    <p>and instantly gain max organic exposure.</p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-650px] w-7/12 justify-center z-10 bg-white rounded-3xl relative p-4">
                <div class="flex gap-16">
                    <div class="basis-1/2 flex justify-center flex-col text-[#5D6483] text-base font-normal pl-20 pb-8">
                        <div class="mt-16">
                            <v-label>Keyword</v-label>
                            <v-input type="text"/>
                        </div>
                        <v-button class="mt-11">Get Tags</v-button>
                    </div>
                    <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                        <img src="../assets/images/tag/man.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div class="rounded-3xl w-1/3 justify-between bg-white flex mt-24 py-10 px-20" style="z-index: 1 !important;">
                <button @click="showLoginModal = true">Show Modal</button>
                <button @click="showRegisterModal = true">Show Register modal</button>
            </div>

            <div class="mt-20 w-7/12 z-10">
                <tag-table  header-class="bg-[#B43AFF]/10" header-title-class="text-[#B43AFF]" :items="ITEMS"/>
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
import {VSelectItem} from "../components/Select/VSelect.vue";
import {SearchItemProps} from "../components/SearchItem/SearchItem.vue";
import {KeywordTableItemProps} from "../components/KeywordTable/KeywordTableItem.vue";
import TagTable from "../components/TagTable/TagTable.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import titleBlock from '../assets/images/title_block_background.svg'
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
        label: 'Tag Generator',
        url: '/tag'
    }
];


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
    }
]

</script>

<style scoped>
</style>
