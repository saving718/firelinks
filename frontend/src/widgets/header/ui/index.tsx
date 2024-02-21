import React from 'react';

import styles from './styles.module.scss';
import { Logo } from './logo';
import Menu from '@/features/menu';

export const Header = () => {
  const menu = [{ title: 'Возможности', to: 'opportunities' }];

  return (
    <div className={styles.header}>
      <Logo></Logo>
      <Menu menu={menu}></Menu>
    </div>
  );
};
