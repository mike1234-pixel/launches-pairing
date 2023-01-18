import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Launch } from '../../types/Launch';
import Card from './index';

describe('Card', () => {
  it('should render a card with the correct data', () => {
    const launch: Launch = {
      id: '21786521',
      name: 'Test Launch',
      date_utc: '2022-01-01T00:00:00.000Z',
      links: {
        patch: {
          small: 'https://images.com/test.jpg',
          large: 'https://images.com/testlarge.jpg',
        },
      },
      cores: [
        {
          core: {
            serial: 'CORE-123',
          },
        },
      ],
      payloads: [
        {
          type: 'satellite',
          id: 'PAYLOAD-1',
        },
        {
          type: 'capsule',
          id: 'PAYLOAD-2',
        },
      ],
      success: true,
      failures: [],
    };
    render(<Card launch={launch} />);

    const outputTexts = [
      'Core: CORE-123',
      'Payloads',
      'Type: satellite',
      'Id: PAYLOAD-1',
      'Type: capsule',
      'Id: PAYLOAD-2',
    ];

    expect(screen.getByAltText('Test Launch')).toBeInTheDocument();
    expect(screen.getByTestId('date')).toHaveTextContent('date: 01/01/2022, 00:00:00');

    outputTexts.forEach((outputText) => {
      expect(screen.getByText(outputText)).toBeInTheDocument();
    });

    expect(screen.queryByText('Reason: ')).not.toBeInTheDocument();
  });
});
