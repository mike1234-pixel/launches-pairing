import React from 'react';
import { render } from '@testing-library/react';
import ErrorState, { title } from './index';

describe('ErrorState component', () => {
  test('displays the error message', () => {
    const error = new Error('Network Error');
    const { getByText } = render(<ErrorState error={error} />);

    const message = 'Network Error';

    expect(getByText(title)).toBeDefined();
    expect(getByText(message)).toBeDefined();
  });
});
