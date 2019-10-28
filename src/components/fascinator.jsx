import React from 'react';
import styles from './fascinator.scss';
import image from '../images/marijuana.png';

export const Fascinator = () => {
  return (
    <div className={styles.fascinator}>
      <div className={styles.fascinatorText}>
        <p
          style={{
            textDecoration: 'underline',
            marginBottom: '10px',
            fontSize: '100px',
            lineHeight: '75px',
          }}
        >
          abode
        </p>
        <p style={{ fontWeight: 'normal' }}>from our home.</p>
        <p>to yours.</p>
      </div>
      <img
        style={{ height: '300px', backgroundSize: 'cover' }}
        src={image}
        alt="marijuana"
      />
    </div>
  );
};
