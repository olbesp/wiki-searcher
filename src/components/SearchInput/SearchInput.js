import React from 'react';

import styles from './SearchInput.scss';
import SearchIcon from './SearchIcon/SearchIcon';

const searchInput = (props) => {
  return (
    <div className={styles.SearchInput}>
      <input 
        className={styles.SearchInput__input} 
        type="text" 
        onChange={props.changed} 
        onKeyPress={props.keyPressed} 
      />
      <button onClick={props.clicked} className={styles.SearchInput__btn}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default searchInput;