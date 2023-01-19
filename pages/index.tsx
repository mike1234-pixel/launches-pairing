import Home, { HomeProps } from "../components/Home";
import requestBody from "../components/Home/request";

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch launches, status code: ${res.status}`);
    }
    const data = JSON.stringify(await res.json());
    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);

    return { props: { errorMessage: (error.message as string) } };
  }
};

function HomePage({ data, errorMessage }: HomeProps) {
  return <Home data={data} errorMessage={errorMessage} />
}

export default HomePage

