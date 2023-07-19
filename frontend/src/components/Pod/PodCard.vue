<template>
    <div class="w-full h-full px-6 py-8 backdrop-blur-3xl rounded-2xl" :style="{background}">
        <div class="inner-container rounded-2xl"></div>
        <img class="pod-section-card-image" :src="image" alt="">
        <div class="mt-4 text-white text-2xl font-bold">
            {{ title }}
        </div>
        <div class="mt-4text-sm text-[#C3BED7] font-normal">
            {{ description }}
        </div>
    </div>
</template> 

<script setup lang="ts">
import {defineProps} from 'vue';
 
export interface PodCardProps {
    background: string,
    image: string,  
    title: string,
    description: string
}

const {background, image, title, description} = defineProps<PodCardProps>()
</script>

<style scoped>
  .container-gradient{
        position: relative;
    }
    .inner-container{
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 25%, rgba(0,23,149,0.6) 50%, rgba(255, 0,0, 0.6) 75%, rgba(0, 23, 149, 0.6) 100%);
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: 300% 300%;
        transition: .5s;
        z-index: 9999;
    }
    .container-gradient:hover .inner-container{
        background-position: 100% 100%; 
    }
    
</style>
