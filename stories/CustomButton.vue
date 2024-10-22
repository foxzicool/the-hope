<template>
  <button :class="`btn ${btnType} ${sizeClass}`" :style="buttonStyle">
    {{ label }}
    <span v-if="icon" class="icon-arrow">&#x2197;</span>
  </button>
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
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    btnColor: {
      type: String,
      default: ''
    },
    hasBorderRadius: {
      type: Boolean,
      default: true
    },
    hasUnderline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClass() {
      return this.size === 'small' ? 'btn-small' : this.size === 'large' ? 'btn-large' : '';
    },
    buttonStyle() {
      return {
        color: this.textColor,
        backgroundColor: this.btnColor,
        borderRadius: this.hasBorderRadius ? '35px' : '0px',
        textDecoration: this.hasUnderline ? 'underline' : 'none'
      };
    }
  }
});
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-small { padding: 5px 10px; }
.btn-large { padding: 15px 30px; }
.icon-arrow {
  margin-left: 5px;
}
</style>
