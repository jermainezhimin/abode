import React from 'react';
import styles from './header.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <div className={styles.iconImage} />
        <div className={styles.iconText}> abode </div>
      </div>
      <div className={styles.leftMenu}>
        <p>ABOUT</p>
        <p>STORE</p>
        <p>LOGIN</p>
      </div>
    </div>
  );
};
