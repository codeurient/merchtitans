<template>
    <section
        class="mt-60 max-h-[1313px] bg-[url('/src/assets/images/testimonials/horizontal-cards.svg')] overflow-x-scroll flex justify-center testimonials-section"
        :style="{'-ms-overflow-style': 'none'}" id="slides-container" @scroll.self>
        <div class="w-full max-w-[1100px] flex gap-8 py-8 testimonials-section-container">
            <div class="flex flex-col gap-8">
                <testimonials-card
                    :image="DEFAULT_CARD.image"
                    :title="DEFAULT_CARD.title"
                    :subtitle="DEFAULT_CARD.subtitle"
                    :description="DEFAULT_CARD.description"
                    v-for="index in [...Array(5).keys()]" :key="index"
                />
            </div>

            <div class="flex flex-col gap-8 mt-28">
                <testimonials-card
                    :image="DEFAULT_CARD.image"
                    :title="DEFAULT_CARD.title"
                    :subtitle="DEFAULT_CARD.subtitle"
                    :description="DEFAULT_CARD.description"
                    v-for="index in [...Array(5).keys()]" :key="index"
                />
            </div>

            <div class="flex flex-col gap-8 mt-56">
                <testimonials-card
                    :image="DEFAULT_CARD.image"
                    :title="DEFAULT_CARD.title"
                    :subtitle="DEFAULT_CARD.subtitle"
                    :description="DEFAULT_CARD.description"
                    v-for="index in [...Array(5).keys()]" :key="index"
                />
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

import TestimonialsCard, {TestimonialsSectionProps} from "./TestimonialsCard.vue";
import card from '../../assets/images/testimonials/card-1.png'

const DEFAULT_CARD: TestimonialsSectionProps = {
    image: card,
    title: 'Artist',
    subtitle: 'Artist',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium, nunc, viverra eleifend\n' +
        ' faucibus etiam quis rhoncus placerat. Amet libero facilisis ut nunc donec a venenatis. Eu\n' +
        ' ligula gravida diam lerisque enim at. Diam lobortis eu viverra parturient diam tincidunt\n' +
        ' non. Amet eget massa, semper neque duis rutrum eu cras. ”'
}

</script>

<style scoped>

.testimonials-section::-webkit-scrollbar {
    display: none;
}
</style>
