import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.png" alt="logo" width={158} height={41}></Image>
    </div>
  );
};
