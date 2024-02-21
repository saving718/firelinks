import React from 'react';
import styles from './styles.module.scss';

type buttonType = {
  link?: string;
  name: string;
  radius?: number;
  color: string;
  width: 'small' | 'big';
};

export const Button = (button: buttonType) => {
  return button.link ? (
    <a
      className={`${styles['btn']} 
        ${button.color ? styles['btn--color-' + button.color] : ''} 
        ${button.width ? styles['btn--width-' + button.width] : ''}
        ${
          button.radius
            ? styles['btn--radius-' + button.radius]
            : styles['btn--radius-']
        }`}
      href={button.link}
    >
      {button.name}
    </a>
  ) : (
    <button
      className={`${styles['btn']} 
        ${button.color ? styles['btn--color-' + button.color] : ''} 
        ${button.width ? styles['btn--width-' + button.width] : ''}
        ${
          button.radius
            ? styles['btn--radius-' + button.radius]
            : styles['btn--radius-']
        }`}
    >
      {button.name}
    </button>
  );
};
