import styles from './ErrorState.module.css';

interface ErrorStateProps {
  error: Error;
}

export const title = 'Could not load data';

function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{error.message}</p>
    </div>
  );
}

export default ErrorState;
