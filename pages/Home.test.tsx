import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { failedLaunch, successfulLaunch } from '../components/Card/mocks';
import Home from './index';

describe('Home', () => {
  it('renders error state when data is not present', async () => {
    const errorMessage = 'Failed to fetch launches';
    const { getByText } = render(<Home errorMessage={errorMessage} />);

    await waitFor(() => {
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it('renders cards when data is present', async () => {
    const data = { docs: [successfulLaunch, failedLaunch] };
    const { getByText } = render(<Home data={JSON.stringify(data)} />);

    await waitFor(() => {
      expect(getByText(successfulLaunch.name)).toBeInTheDocument();
      expect(getByText(failedLaunch.name)).toBeInTheDocument();
    });
  });
});
