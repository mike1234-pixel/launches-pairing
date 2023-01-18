import { Launch } from '../../types/Launch';

export const successfulLaunch: Launch = {
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

export const failedLaunch: Launch = {
  id: '21786521',
  name: 'Failed Test Launch',
  date_utc: '2022-01-01T00:00:00.000Z',
  links: { patch: { small: null, large: null } },
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
  success: false,
  failures: [
    {
      altitude: 123,
      time: 123,
      reason: 'Engine failure',
    },
  ],
};
