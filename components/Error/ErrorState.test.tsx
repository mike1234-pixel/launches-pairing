import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorState, { title } from './index';

describe('ErrorState component', () => {
  test('displays the title and error message', () => {
    const errorMessage: string = 'Network Error';

    const { getByText } = render(<ErrorState errorMessage={errorMessage} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
