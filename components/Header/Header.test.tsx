import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './index';

test('renders the title prop', () => {
  const title = 'My header title';
  const { getByText } = render(<Header title={title} />);
  const headerElement = getByText(title);
  expect(headerElement).toBeInTheDocument();
});
