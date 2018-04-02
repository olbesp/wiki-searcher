import React from 'react';

import styles from './SearchInput.scss';
import SearchIcon from './SearchIcon/SearchIcon';

const searchInput = (props) => {
  return (
    <div className={styles.SearchInput}>
      <input 
        className={styles.SearchInput__input} 
        type="text" 
        placeholder="Search Wikipedia"
        onChange={props.changed} 
        onKeyPress={props.keyPressed} 
      />
      <SearchIcon clicked={props.clicked} className={styles.SearchInput__btn} />
    </div>
  );
}

export default searchInput;