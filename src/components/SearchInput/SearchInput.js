import React from 'react';

import styles from './SearchInput.scss';

const searchInput = (props) => {
  return (
    <div className={styles.SearchInput}>
      <input type="text" onChange={props.changed} onKeyPress={props.keyPressed} />
      <button onClick={props.clicked}>Search</button>
    </div>
  );
}

export default searchInput;