import React from 'react';

import styles from './Article.scss';

const random = (limit) => Math.floor(Math.random() * limit);

const article = (props) => {

  const colors = {
    red: random(50),
    green: random(50),
    blue: random(50)
  };

  const rgbDark = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
  const rgbLight = `rgb(${colors.red + 50}, ${colors.green + 50}, ${colors.blue + 50})`;

  return (
    <li>
      <article 
        className={styles.Article}
        style={{
          width: `${random(20) + 80}%`,
          backgroundImage: `linear-gradient(${rgbDark}, ${rgbLight}, ${rgbDark})`,
          animationDelay: `${props.animationDelay}s`,
          zIndex: props.zIndex
        }}
      >
        <h3 className={styles.Article__header}>{props.header}</h3>
        <p className={styles.Article__text}>
          {`${props.text.length < 100 ? props.text : props.text.slice(0, 100) + '...'}`}
        </p>
        <a className={styles.Article__link} href={props.link}>{props.link}</a>
      </article>
    </li>
  );
}
export default article;