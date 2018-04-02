import React from 'react';

import styles from './Articles.scss';
import Article from './Article/Article';

const articles = (props) => {

  const data = {
    headers: [ ...props.data[1] ],
    texts: [ ...props.data[2] ],
    links: [ ...props.data[3] ]
  };

  let listOfArticles = [];
  for (let i = 0; i < data.headers.length; i++) {
    listOfArticles.push(
      <Article 
        key={data.links[i]}
        header={data.headers[i]} 
        text={data.texts[i]}
        link={data.links[i]}
      />
    );
  }

  return (
    <main className={styles.Articles}>
      <ul className={styles.Articles__list}>
        {listOfArticles}
      </ul>
    </main>
  );
};

export default articles;