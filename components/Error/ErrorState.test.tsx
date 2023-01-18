import React from 'react';
import { render } from '@testing-library/react';
import ErrorState, { title } from './index';

describe('ErrorState component', () => {
  test('displays the error message', () => {
    const errorMessage = 'Network Error';

    const { getByText } = render(<ErrorState errorMessage={errorMessage} />);

    expect(getByText(title)).toBeDefined();
    expect(getByText(errorMessage)).toBeDefined();
  });
});
