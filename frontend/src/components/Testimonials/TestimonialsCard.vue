<template>
    <div class="testimonials-section-card">
        <img :src="image" alt="">
        <div class="testimonials-section-card-container-main">
            <div class="testimonials-section-card-container-main-title">
                {{ title }}
            </div>
            <div class="testimonials-section-card-container-main-subtitle">
                {{ subtitle }}
            </div>
            <div class="testimonials-section-card-container-main-text">
                {{ description }}}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface TestimonialsSectionProps {
    image: string,
    title: string,
    subtitle: string,
    description: string

}

const {image, title, subtitle, description} = defineProps<TestimonialsSectionProps>()

</script>

<style scoped>
.testimonials-section-card-container-main {
    padding: 25px 16px;
}

.testimonials-section-card {
    background: rgba(16, 12, 26, 0.8);
    backdrop-filter: blur(100px);
    max-width: 349px;
    border-radius: 2px 16px 16px 16px;
}

.testimonials-section-card-container-main-title {
    color: white;
    font-size: 24px;
    font-weight: 700;
}

.testimonials-section-card-container-main-subtitle {
    color: #6D7280;
    font-size: 16px;
    margin-top: 2px;
}

.testimonials-section-card-container-main-text {
    font-size: 16px;
    color: #C3BED7;
    margin-top: 22px;
}
</style>
