import React from 'react';

import styles from './SearchIcon.scss';

const searchIcon = (props) => (
  <button 
    className={styles.SearchIcon}
    onClick={props.clicked} 
  >
    <div className={styles.SearchIcon__icon}>
      <div className={styles.SearchIcon__icon__top}></div>
      <div className={styles.SearchIcon__icon__bottom}></div>
    </div>
  </button>
);

export default searchIcon;