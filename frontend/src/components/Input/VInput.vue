<template>
    <input :type="type"
           class="w-full border border-[#989fbf]/25 bg-white py-5 px-3 my-1 rounded-2xl text-[#111215] focus:outline-none"
           :value="modelValue" @input="updateValue"/>
</template>

<script setup lang="ts">
export interface VInputProps {
    type: string,
    modelValue?: string
}

export interface VInputEmits {
    (e: 'update:modelValue', value: string): void
}

const {type} = defineProps<VInputProps>()
const emits = defineEmits<VInputEmits>()

const updateValue = (event: Event ) => emits('update:modelValue', (event.target as HTMLInputElement).value)

</script>

<style scoped>

</style>
