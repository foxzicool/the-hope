import CustomButton from './CustomButton.vue';  // 更新組件導入路徑
import type { Story } from '@storybook/vue3';

export default {
  title: 'Components/CustomButton',  // 更新標題以反映新組件名稱
  component: CustomButton,
};

const Template: Story = (args) => ({
  components: { CustomButton },  // 更新組件名稱參考
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args" />',  // 更新模板以使用新組件
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Press me',
  btnType: 'btn-primary'
};
