import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode | ReactNode[];
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;
