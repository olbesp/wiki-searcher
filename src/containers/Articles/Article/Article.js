import React from 'react';

import styles from './Article.scss';
import Radium from 'radium';

const article = (props) => {

  return (
    <li>
      <a className={styles.link} href={props.link} 
        target="_blank"
        rel="noopener noreferrer"
      >
        <div 
          className={styles.Article}
          style={{ 
            ...props.style, 
            zIndex: props.zIndex, 
            animationDelay: `${props.animationDelay}s`,
            ':hover': {
              backgroundImage: 'linear-gradient(#777, #eee, #777)',
              color: '#0a0a0a'
            }
          }}
        >
          <h3 
            className={styles.Article__header} 
            style={{fontSize: `${props.headerSize}rem`}}
          >
            {props.header}
          </h3>
        </div>
      </a>
    </li>
  );
}
export default Radium(article);