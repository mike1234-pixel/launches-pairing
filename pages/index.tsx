import Container from '../components/Container';
import Card from '../components/Card';
import ErrorState from '../components/Error';
import styles from '../styles/Home.module.css';
import { Launch } from '../types/Launch';

// stable data mean getStaticProps is a suitable option,
// I've chosen not to revalidate the data
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://api.spacexdata.com/v5/launcdhes');
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
  const launches: Launch[] = data && JSON.parse(data);

  if (!data) {
    return (
      <Container>
        <ErrorState errorMessage={errorMessage} />
      </Container>
    );
  }
  console.log(launches);

  return (
    <Container>
      <div className={styles.grid}>
        {launches.map((launch) => {
          return <Card launch={launch} key={launch.id} />;
        })}
      </div>
    </Container>
  );
}

export default Home;
