import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ThImages from './ThImages.vue';

describe('ThImages', () => {
  it('renders properly with default props', () => {
    const wrapper = mount(ThImages, {
      props: {
        src: 'https://thehope.co/wp-content/uploads/2022/09/20220821_Roy_1-1024x683.jpg',
        height: '200px',
        width: '299px',
      }
    });
    // Verify the correct rendering of the image source and dimensions
    expect(wrapper.html()).toContain('https://thehope.co/wp-content/uploads/2022/09/20220821_Roy_1-1024x683.jpg');
    expect(wrapper.find('.v-img').attributes('style')).toContain('height: 200px');
    expect(wrapper.find('.v-img').attributes('style')).toContain('width: 299px');
  });

  it('applies custom style', () => {
    const customStyle = { border: '1px solid red' };
    const wrapper = mount(ThImages, {
      props: {
        src: 'https://thehope.co/wp-content/uploads/2022/09/20220821_Roy_1-1024x683.jpg',
        height: '200px',
        width: '299px',
        customStyle: customStyle,
      }
    });
    expect(wrapper.find('.v-img').attributes('style')).toContain('border: 1px solid red');
  });
});
