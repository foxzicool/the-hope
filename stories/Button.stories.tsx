import CustomButton from './CustomButton.vue';
import type { Story } from '@storybook/vue3';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
};

const Template: Story = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Press me',
  btnType: 'btn-primary'
};
