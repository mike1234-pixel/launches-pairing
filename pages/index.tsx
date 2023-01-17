import Card from '../components/Card';
import ErrorState from '../components/Error';
import styles from '../styles/Home.module.css';
import { Launch } from '../types/Launch';

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://api.spacexdata.com/v4/launches?sort=launch_date_utc:desc&limit=10');

    const data = await res.text();

    return {
      props: { data: data },
      revalidate: 1000,
    };
  } catch (error) {
    console.error(error);

    return { props: { data: null, error: error } };
  }
};

interface HomeProps {
  data: string; // serialized
  error?: Error;
}

function Home({ data, error }: HomeProps) {
  if (!data) return <ErrorState error={error} />;

  // deserialize
  const launches: Launch[] = JSON.parse(data);

  console.log(launches);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {launches.map((launch) => {
          return <Card launch={launch} key={launch.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
