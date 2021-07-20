import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders chakra light class', () => {
  const wrapper = render(<App />);
  expect(wrapper.container.firstChild).toBeTruthy();
  // expect(wrapper.container.firstChild).toHaveStyle('display: none');
});
