import Image from 'next/image';
import classNames from 'classnames';
import { Failure, Launch } from '../../types/Launch';
import styles from './Card.module.css';

function Card({ launch }: { launch: Launch }) {
  const { name, date_utc, cores, payloads, links, success, failures } = launch;

  return (
    <div className={styles.card}>
      {links.patch.small && (
        <div className={styles.imageContainer}>
          <Image src={links.patch.small} alt={name} width={100} height={100} />
        </div>
      )}
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.date}>{date_utc}</p>
      <p className={styles.core}>Core: {cores[0].core}</p>
      <p className={styles.payloads}>Payloads: {payloads[0]}</p>
      {success && <div className={classNames(styles.badge, styles.successBadge)}>Successful</div>}
      {!success &&
        failures.map((failure: Failure) => {
          const { reason } = failure;
          return (
            <div key={failure.time}>
              <div className={classNames(styles.badge, styles.failureBadge)}>Failed</div>
              <p className={styles.failureReason}>Reason: {reason}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
