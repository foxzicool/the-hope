import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ThTypography from './ThTypography.vue';

describe('<ThTypography />', () => {
  it('accepts slot content', () => {
    const wrapper = mount(ThTypography, {
      props: { variant: 'h1' },
      slots: { default: 'hi' },
    });
    expect(wrapper.text()).toBe('hi');
  });

  it('injects class names', () => {
    const classNameString = 'some-class';
    const classNameArray = ['some-class'];

    [classNameString, classNameArray].forEach((className) => {
      const wrapper = mount(ThTypography, {
        props: { variant: 'h1', className },
      });
      expect(wrapper.classes()).toContain('some-class');
    });
  });

  it('injects styles', () => {
    const style = { height: '100%' };
    const wrapper = mount(ThTypography, {
      props: { variant: 'h1', style },
    });

    expect(wrapper.element.style.height).toBe(style.height);
  });
});
