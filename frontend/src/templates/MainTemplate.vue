<template>
  <v-header/>
      <slot></slot>
  <v-footer/>
</template>

<script setup lang="ts">
import VHeader from "../components/VHeader.vue";
import VFooter from "../components/VFooter.vue";
</script>

<style scoped>

</style>