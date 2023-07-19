<template>
    <center-title-block title="<p>Reset</p><p>'Password'</p>"
                        :background-image="titleBlock"
                        :breadcrumbs="BREADCRUMBS"
    >
        <div class="flex flex-col justify-center items-center mt-8">
            <div class="text-white text-2xl font-normal text-center">
                <p>Check your email for password reset link.</p>
                <p><a href="/login" class="text-[#8DF63A] underline">Back to login screen</a></p>
            </div>
        </div>
    </center-title-block>
    <section class="flex flex-col items-center bg-[#F8F8F9] pb-36">
        <v-ellipse/>
        <div class="mt-[-650px] w-7/12 justify-center z-10 bg-white rounded-3xl relative">
            <div class="flex gap-16">
                <div class="basis-1/2 flex justify-center flex-col text-[#5D6483] text-base font-normal py-24 pl-24">
                    <slot/>
                </div>
                <div class="basis-1/2 text-[#5D6483] text-base font-normal">
                    <img class="absolute top-[-30px]" src="../../assets/images/reset_password/man.svg" alt=""/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import titleBlock from "../../assets/images/title_block_background.svg";
import CenterTitleBlock from "../TitleBlock/CenterTitleBlock.vue";
import VEllipse from "../Ellipse/VEllipse.vue";
import {Breadcrumb} from "../Breadcrumbs/Breadcrumbs.vue";

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
