<template>
    <main-template>
        <center-title-block title="'Log' In"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center">
                    <p>Login to your dashboard and access your private member area</p>
                    <p>using the form below.</p>
                    <p>Don’t have an account? <a href="/register" class="text-[#8DF63A] underline">Register</a></p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-20">
            <v-ellipse/>
            <div class="mt-[-650px] w-7/12 z-10 bg-white rounded-3xl py-24 pl-24">
                <login-form @login="() => router.push({path: '/'})"/>
            </div>
        </section>
    </main-template>
</template>

<script setup lang="ts">
import CenterTitleBlock from "../components/TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../components/Ellipse/VEllipse.vue";
import {BlogItemProps, CategoryItem} from "../components/BlogItem/BlogItem.vue";
import {BlogListItem} from "../components/BlogList/BlogList.vue";
import {Breadcrumb} from "../components/Breadcrumbs/Breadcrumbs.vue";
import {KeywordTableItemProps} from "../components/KeywordTable/KeywordTableItem.vue";
import MainTemplate from "../templates/MainTemplate.vue";
import LoginForm from "../components/Form/LoginForm.vue";
import {useRouter} from "vue-router";
import titleBlock from '../assets/images/title_block_background.svg'

const router = useRouter()

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Login',
        url: '/login'
    }
];

</script>

<style scoped>
</style>
