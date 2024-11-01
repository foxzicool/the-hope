import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify();

setup((app) => {
  app.use(vuetify);
});
