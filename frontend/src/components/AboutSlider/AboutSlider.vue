<template>
    <div class="flex mt-[-250px] w-3/5 justify-center gap-10 z-10">
        <div class="basis-1/2 font-extrabold">
            <div class="text-4xl">{{ title }}</div>
            <div class="text-lg font-bold text-[#555E79] mt-6" v-if="fPseudoTitle">
                {{ fPseudoTitle }}
            </div>
            <div class="text-base font-normal text-[#5D6483] mt-2" v-if="fPseudoText">
                {{ fPseudoText }}
            </div>
            <div class="text-lg font-bold text-[#555E79] mt-4" v-if="sPseudoTitle">
                {{ sPseudoTitle }}
            </div>
            <div class="text-base font-normal text-[#5D6483] mt-2" v-if="sPseudoText">
                {{ sPseudoText }}
            </div>
            <div class="flex bg-white rounded-3xl mt-10">
                <div>
                    <img :src="avatar" class="m-2" alt="">

                </div>
                <div class="flex flex-col ml-4">
                    <div class="flex">
                        <div class="basis-2/3 border-r border-r-[#989FBF] mt-1">
                            <div class="text-lg font-bold">{{ name }}</div>
                            <div class="text-sm font-semibold text-[#5D6483]">{{ situation }}</div>
                        </div>
                        <div class="basis-1/3 flex justify-between items-center mx-6">
                            <div>
                                <img width="16" :src="linkedin" alt=""/>
                            </div>
                            <div>
                                <img width="9" :src="facebook" alt=""/>
                            </div>
                            <div>
                                <img width="15" :src="twitter" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="text-sm font-normal text-[#989FBF] mt-6"> {{ about }} </div>
                </div>
            </div>
        </div>
        <div class="basis-1/2">
            <img class="object-contain w-[500px] rounded-2xl " :src="image" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
export interface AboutSliderProps {
    title: string,
    fPseudoTitle: string,
    fPseudoText: string,
    sPseudoTitle: string,
    sPseudoText: string,
    avatar: string,
    name: string,
    situation: string,
    about: string,
    linkedin: string,
    facebook: string,
    twitter: string,
    image: string,
}


const {
    title, 
    fPseudoTitle, 
    fPseudoText, 
    sPseudoTitle, 
    sPseudoText, 
    avatar, 
    name, 
    situation, 
    about, 
    linkedin, 
    facebook, 
    twitter, 
    image} = defineProps<AboutSliderProps>()
    
</script>

<style scoped>
</style>
