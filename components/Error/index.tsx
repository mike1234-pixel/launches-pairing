import { useRouter } from 'next/router';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  errorMessage: string;
}

export const title = 'Error';

function ErrorState({ errorMessage }: ErrorStateProps) {
  const router = useRouter();

  const refresh = () => {
    router.reload();
  };

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{errorMessage}</p>
      <button className={styles.button} onClick={refresh}>
        Try again
      </button>
    </div>
  );
}

export default ErrorState;
