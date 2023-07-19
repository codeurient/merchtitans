<template>
    <main-template>
        <center-title-block title="<p>Create</p><p>'an Account'</p>"
                            :background-image="titleBlock"
                            :breadcrumbs="BREADCRUMBS"
        >
            <div class="flex flex-col justify-center items-center mt-8">
                <div class="text-white text-2xl font-normal text-center">
                    <p>Create an account below to get started.</p>
                    <p>Already have an account? <a href="/login" class="text-[#8DF63A] underline">Login</a> now.</p>
                </div>
            </div>
        </center-title-block>
        <section class="flex flex-col items-center bg-[#F8F8F9] pb-36">
            <v-ellipse/>
            <div class="mt-[-650px] w-7/12 justify-center z-10 bg-white rounded-3xl p-24">
                <register-form @register="() => router.push({path: '/'})"/>
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
import RegisterForm from "../components/Form/RegisterForm.vue";
import {useRouter} from "vue-router";
import titleBlock from '../assets/images/title_block_background.svg'

const router = useRouter()

const BREADCRUMBS: Breadcrumb[] = [
    {
        label: "'Home'",
        url: '/'
    },
    {
        label: 'Register',
        url: '/register'
    }
];

</script>

<style scoped>
</style>
