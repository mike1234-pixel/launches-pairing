import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Badge, { failureMessage, successMessage } from './index';

test('Badge component displays "Success" when success prop is true', () => {
  const { getByText } = render(<Badge success={true} />);
  const successMessageElement = getByText(successMessage);
  expect(successMessageElement).toBeInTheDocument();
});

test('Badge component displays "Failure" when success prop is false', () => {
  const { getByText } = render(<Badge success={false} />);
  const failureMessageElement = getByText(failureMessage);
  expect(failureMessageElement).toBeInTheDocument();
});
