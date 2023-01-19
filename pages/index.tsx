import Container from '../components/Container';
import Card from '../components/Card';
import ErrorState from '../components/Error';
import Header from '../components/Header';
import { Launch } from '../types/Launch';
import requestBody from './request'; // the query config lives here
import styles from './Home.module.css';

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

interface HomeProps {
  data?: string; // serialized
  errorMessage?: string;
}

function Home({ data, errorMessage }: HomeProps) {
  // deserialize
  const launches: Launch[] = data && JSON.parse(data).docs;

  if (errorMessage) {
    return (
      <Container>
        <ErrorState errorMessage={errorMessage} />
      </Container>
    );
  }

  return (
    <>
      <Header title='SpaceX Launches' />
      <Container>
        <div className={styles.grid}>
          {launches.map(launch => {
            return <Card key={launch.id} launch={launch} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Home;
