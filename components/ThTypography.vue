<template>
  <component :is="variant" :class="computedClasses" :style="computedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { type CSSProperties, computed } from 'vue';

type TypographyVariants = Extract<keyof HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'p'>;
const { variant, className, style } = defineProps<{
  /** Typography variant */
  variant: TypographyVariants;
  className?: string | string[];
  style?: CSSProperties;
}>();

const defaultClasses = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  p: 'text-body-1',
};

const defaultStyles = {
  h1: {},
  h2: {},
  h3: {},
  p: {},
};

const computedClasses = computed(() => {
  return [defaultClasses[variant], ...(Array.isArray(className) ? className : [className])]
    .join(' ')
    .trim();
});

const computedStyles: ComputedRef<CSSProperties> = computed(() => {
  return { ...defaultStyles[variant], ...style };
});
</script>
