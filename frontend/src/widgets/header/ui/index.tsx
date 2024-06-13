import React from 'react';

import styles from './styles.module.scss';
import { Logo } from './logo';
import Menu from '@/features/menu';
import { Button } from '@/shared/ui/button';

export const Header = () => {
  const menu = [{ title: 'Возможности', to: 'opportunities' }];

  return (
    <div className={styles.header}>
      <Logo></Logo>
      <Menu menu={menu}></Menu>
      <div className={styles.header__right}>
        <Button name="Вход" color="blue" width="small" radius={10}></Button>
        <Button
          name="Регистрация"
          color="transparent"
          width="small"
          radius={10}
        ></Button>
      </div>
    </div>
  );
};
