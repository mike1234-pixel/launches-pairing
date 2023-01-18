import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
