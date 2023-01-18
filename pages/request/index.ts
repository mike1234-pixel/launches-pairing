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
    // sort: {
    //   date_utc: 'desc', this works but newer entries lack images and other data so leaving it
    // },
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
