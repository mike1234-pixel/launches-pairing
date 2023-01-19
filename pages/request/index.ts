const requestBody = {
  query: {},
  options: {
    limit: 10,
    select: {
      id: 1,
      name: 1,
      date_utc: 1,
      links: {
        patch: 1,
      },
      payloads: 1,
      cores: 1,
      success: 1,
      failures: 1,
    },
    populate: [
      {
        path: 'payloads',
        select: {
          type: 1,
          id: 1,
        },
      },
      {
        path: 'cores.core',
        select: {
          serial: 1,
        },
      },
    ],
  },
};

export default requestBody;
