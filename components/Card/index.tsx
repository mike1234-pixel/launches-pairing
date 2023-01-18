import Image from 'next/image';
import { Failure, Launch } from '../../types/Launch';
import Badge from '../Badge';
import styles from './Card.module.css';

function Card({ launch }: { launch: Launch }) {
  const { name, date_utc, cores, payloads, links, success, failures } = launch;

  const date = new Date(date_utc).toLocaleString();

  return (
    <div className={styles.card}>
      {links.patch.small && <Image src={links.patch.small} alt={name} width={100} height={100} />}
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.date}>date: {date}</p>
      <p className={styles.core}>Core: {cores[0].core}</p>
      <p className={styles.payloads}>Payloads: {payloads[0]}</p>
      {success && <Badge success={success} />}
      {!success &&
        failures.map((failure: Failure) => {
          const { reason } = failure;
          return (
            <div key={failure.time}>
              <Badge success={success} />
              <p className={styles.failureReason}>Reason: {reason}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
