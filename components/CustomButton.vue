<template>
  <button :class="`btn ${btnType}`">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      default: 'btn-primary'
    }
  }
});
</script>

<style>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.btn-primary {
  background-color: blue;
}
</style>
