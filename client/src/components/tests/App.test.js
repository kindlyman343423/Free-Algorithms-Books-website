import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Free Algorithm Books website', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Free Algorithm Books/i);
  expect(linkElement).toBeInTheDocument();
});
