// preview.js located in .storybook directory
import { createApp } from 'vue';
import { createVuetify } from 'vuetify'; // 确保是 createVuetify
import 'vuetify/styles';  // 确保 Vuetify 样式被正确引入

// Storybook 的配置对象
export const parameters = {
  // Storybook 参数配置，根据需要自定义
};

export const decorators = [
  (story) => {
    const app = createApp(story());
    const vuetify = createVuetify(); // 创建 Vuetify 实例

    app.use(vuetify);  // 注册 Vuetify 插件

    return {
      vuetify,
      template: '<v-app><story /></v-app>',
    };
  }
];
