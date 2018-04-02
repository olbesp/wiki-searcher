import React from 'react';

import styles from './SearchIcon.scss';

const searchIcon = () => (
  <div className={styles.SearchIcon}>
    <div className={styles.SearchIcon__top}></div>
    <div className={styles.SearchIcon__bottom}></div>
  </div>
);

export default searchIcon;