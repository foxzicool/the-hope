import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export const decorators = [
  (story) => {
    const app = createApp(story());
    const vuetify = createVuetify();

    app.use(vuetify);

    return {
      vuetify,
      template: '<v-app><story /></v-app>',
    };
  }
];
