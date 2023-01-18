import Container from '../components/Container';
import Card from '../components/Card';
import ErrorState from '../components/Error';
import { Launch } from '../types/Launch';
import requestBody from './request'; // the custom query lives here
import styles from '../styles/Home.module.css';

// stable data means getStaticProps is a suitable option,
// I've chosen not to revalidate the data as it's unlikely to refresh within the course of a browser session
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

    return { props: { errorMessage: error.message } };
  }
};

interface HomeProps {
  data?: string; // serialized
  errorMessage?: string;
}

function Home({ data, errorMessage }: HomeProps) {
  // deserialize
  const launches: Launch[] = data && JSON.parse(data).docs;

  if (!data) {
    return (
      <Container>
        <ErrorState errorMessage={errorMessage} />
      </Container>
    );
  }

  return (
    <Container>
      <div className={styles.grid}>
        {launches.map((launch) => {
          return <Card key={launch.id} launch={launch} />;
        })}
      </div>
    </Container>
  );
}

export default Home;
