import classNames from 'classnames';
import styles from './Badge.module.css';

interface BagdeProps {
  success: boolean;
}

export const successMessage: string = 'Success';
export const failureMessage: string = 'Failure';

function Badge({ success }: BagdeProps) {
  return (
    <div className={classNames(styles.badge, success ? styles.successBadge : styles.failureBadge)}>
      {success ? successMessage : failureMessage}
    </div>
  );
}

export default Badge;
