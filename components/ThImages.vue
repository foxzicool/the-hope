<template>
  <v-img 
    :src="src" 
    :height="height" 
    :width="width"
    :style="customStyle" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
  src: string;
  height: string | number;
  width: string | number;
  customStyle?: Record<string, string>;
};

const { src, height, width, customStyle } = defineProps<Props>();
</script>

<style scoped>
/* Custom styles if necessary */
</style>
