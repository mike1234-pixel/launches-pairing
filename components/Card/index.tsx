import Image from 'next/image';
import { Launch } from '../../types/Launch';
import Badge from '../Badge';
import styles from './Card.module.css';

function Card({ launch }: { launch: Launch }) {
  const { name, date_utc, links, success, failures, cores: [{ core: { serial } }], payloads } = launch;

  const date = new Date(date_utc).toLocaleString();

  return (
    <div className={styles.card}>
      {links.patch.small && <Image src={links.patch.small} alt={name} width={100} height={100} />}

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.date} data-testid="date">
        Date: {date}
      </p>
      <p className={styles.core}>Core: {serial}</p>

      <h3>Payloads</h3>

      {payloads.map((payload) => {
        return (
          <ul key={payload.id}>
            <li>Type: {payload.type}</li>
            <li>Id: {payload.id}</li>
          </ul>
        );
      })}

      {success && (
        <div className={styles.status}>
          <Badge success={success} />
        </div>
      )}

      {!success &&
        failures.map((failure) => {
          const { reason } = failure;
          return (
            <div key={failure.time}>
              <div className={styles.status}>
                <Badge success={success} />
              </div>
              <h3 className={styles.failureReason}>Reason for failure:</h3>
              <p className={styles.failureReason} data-testid="failure-reason">
                {reason}.
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
