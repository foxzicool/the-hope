<template>
  <v-btn>
    {{ label }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export const props = {
  label: String,
};

export default defineComponent({ name: 'ThButton', props });
</script>
