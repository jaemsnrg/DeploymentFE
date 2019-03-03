import React from 'react';
import { shallow } from 'enzyme';
import mountWithTheme from '@testUtils/mountWithTheme';
import mockTheme from '@testUtils/mockTheme';

import Button from './Button';

describe('Button', () => {
  it('should render without any errors', () => {
    const TestContainer = () => <Button buttonText="Answer" />;
    const wrapper = shallow(<TestContainer />);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('should contain the correct text', () => {
    const wrapper = mountWithTheme(<Button buttonText="Answer" />, mockTheme);
    expect(wrapper.contains('Answer')).toBe(true);
  });

  it('should animate when specified', () => {
    const wrapper = mountWithTheme(<Button loading={true} />, mockTheme);
    expect(wrapper.contains('\u25CF ')).toBe(true);
  });

});