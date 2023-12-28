import React from 'react';

import styles from './styles.module.scss';
import { Logo } from './logo';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo></Logo>
    </div>
  );
};
