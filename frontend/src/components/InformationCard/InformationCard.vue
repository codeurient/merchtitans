<template>
    <div class="flex justify-center items-center bg-[url('src/assets/images/private_policy_and_terms_of_service/card_background.png')] bg-cover pl-20 py-20 rounded-3xl">
        <div class="basis-1/2">
            <div class="text-3xl font-bold"
                 :style="{
                    background: 'linear-gradient(89.98deg, #FF32EA 0.06%, #FFB507 29.61%, #8DF63A 63.32%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text'
            }">
                {{ title }}
            </div>
            <slot name="text"/>
        </div>
        <div class="basis-1/2">
            <slot name="image"/>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface InformationCardProps {
    title: string
}

const {title} = defineProps<InformationCardProps>()
</script>

<style scoped>

</style>
