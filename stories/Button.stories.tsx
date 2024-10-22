import CustomButton from './CustomButton.vue';
import type { StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    textColor: {
      control: 'color',
    },
    btnColor: {
      control: 'color',
    },
    icon: {
      control: 'boolean',
    },
    hasBorderRadius: {
      control: 'boolean'
    },
    hasUnderline: {
      control: 'boolean'
    }
  }
};

const Template: StoryFn<typeof CustomButton> = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  btnType: 'btn-primary',
  size: 'medium',
  textColor: '#FFFFFF',
  btnColor: 'blue',
  icon: true,
  hasBorderRadius: true,
  hasUnderline: false
};
