import type { StoryFn } from '@storybook/vue3';
import Button from '../components/Button.vue';
import type { ButtonProps } from '../components/types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' }
  },
};

const Template: StoryFn<typeof Button> = (args: ButtonProps) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};
