<template>
        <transition name="modal">
            <div class="fixed z-50 top-0 left-0 w-full h-full bg-[#2A0F3F66] table" :style="{transition: 'opacity 0.3s ease'}">
                <div class="table-cell align-middle ">
                    <div class="w-7/12 bg-white my-0 mx-auto rounded-[34px] py-16 px-24 relative">
                        <img src="../../assets/images/modal/close.svg" alt="" class="absolute top-[-20px] right-[-20px] p-2 bg-white rounded-full z-[60] cursor-pointer" @click="$emit('close')" />
                        <slot/>
                    </div>
                </div>
            </div>
        </transition>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
