import Container from '../Container';
import Card from '../Card';
import ErrorState from '../Error';
import Header from '../Header';
import { Launch } from '../../types/Launch'
import requestBody from './request'; // query config lives here
import styles from './Home.module.css';

export interface HomeProps {
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
