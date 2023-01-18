import React from 'react';
import { render } from '@testing-library/react';
import Container from './index';

describe('Container', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Container>
        <p>Test</p>
      </Container>
    );
    expect(getByText('Test')).toBeDefined();
  });
});
