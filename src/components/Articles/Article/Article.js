import React from 'react';

import styles from './Article.scss';

const article = (props) => (
  <article className={styles.Article}>
    <h3 className={styles.Article__header}>{props.header}</h3>
    <p className={styles.Article__text}>{props.text}</p>
    <a className={styles.Article__link} href={props.link}>{props.link}</a>
  </article>
);

export default article;