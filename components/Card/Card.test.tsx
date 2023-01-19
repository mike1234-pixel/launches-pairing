import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from './index';
import { successfulLaunch, failedLaunch } from './mocks';

describe('Card', () => {
  it('should render a card with the correct data', () => {
    render(<Card launch={successfulLaunch} />);

    const outputTexts: string[] = ['Core: CORE-123', 'Payloads', 'Type: satellite', 'Id: PAYLOAD-1', 'Type: capsule', 'Id: PAYLOAD-2'];

    expect(screen.getByAltText('Test Launch')).toBeInTheDocument();
    expect(screen.getByTestId('date')).toHaveTextContent('Date: 01/01/2022, 00:00:00');

    outputTexts.forEach(outputText => {
      expect(screen.getByText(outputText)).toBeInTheDocument();
    });

    expect(screen.queryByText('Reason: ')).not.toBeInTheDocument();
  });

  it('should render a card with failure reason when the launch is not successful', () => {
    render(<Card launch={failedLaunch} />);

    expect(screen.getByTestId('failure-reason')).toHaveTextContent('Engine failure');
  });
});
