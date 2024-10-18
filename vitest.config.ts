import { configDefaults, coverageConfigDefaults } from 'vitest/config';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    exclude: [...configDefaults.exclude, '.features-gen'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
      },
    },
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, '*.config.ts', 'features'],
    },
  },
});
