import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VuetifyPlugin from 'vite-plugin-vuetify';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|vue)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: '@storybook/vue3-vite',

  viteFinal: (config) => mergeConfig(config, {
    plugins: [vue(), VuetifyPlugin()],
  }),

  docs: {
    autodocs: true
  }
};

export default config;
