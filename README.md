## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:
- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:
- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.

## Solution

### Data 

As the data is not subject to frequent change I have opted to use `getStaticProps`.

The request config can be found in ./pages/request/index.tsx. 

I have populated `payloads` and `cores` with the data requested above, and limited my request to include only necessary fields. This is reflected in my custom Launch type in ./types/Launch.ts

I have limited the number of results to 10 using the `limit` option.

The data is sorted in ascending order by default. For the purposes of the task I have not changed this as newer results lack images and other data. 

### Testing

I have opted to write unit tests using Jest/Testing Library as I understand this is primarily the kind of tests I will write on the job. 

To see coverage run `yarn coverage`

### TypeScript 

I have declared types where types would have been ambiguous or where I wanted to enforce a type.
