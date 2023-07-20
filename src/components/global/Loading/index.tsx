import React from 'react';

import styles from './styles.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.rotate_loading}></div>
      <p>Carregando...</p>
    </div>
  )
}