import type { Meta, StoryFn } from '@storybook/vue3';
import ThImages from '~/components/ThImages.vue';
import type { ThImagesProps } from '~/components/types';

const meta: Meta<ThImagesProps> = {
  title: 'Components/ThImages',
  component: ThImages,
  argTypes: {
    src: {
      description: 'The source URL of the image',
      control: { type: 'text' }
    },
    height: {
      description: 'The height of the image',
      control: { type: 'text' }
    },
    width: {
      description: 'The width of the image',
      control: { type: 'text' }
    },
    customStyle: {
      description: 'Custom inline styles',
      control: { type: 'object' }
    },
  }
};

export default meta;

const Template: StoryFn<ThImagesProps> = (args) => ({
  components: { ThImages },
  setup() {
    return { args };
  },
  template: '<ThImages v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://thehope.co/wp-content/uploads/2022/09/20220821_Roy_1-1024x683.jpg',
  height: '200px',
  width: '299px',
  customStyle: { border: '1px solid black' },
};
