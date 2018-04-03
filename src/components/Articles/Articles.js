import React, { Component } from 'react';

import styles from './Articles.scss';
import Article from './Article/Article';
import TableImage from '../UI/TableImage/TableImage';

class Articles extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    const data = {
      headers: [ ...this.props.data[1] ],
      texts: [ ...this.props.data[2] ],
      links: [ ...this.props.data[3] ]
    };

    let listOfArticles = [];
    for (let i = 0; i < data.headers.length; i++) {
      listOfArticles.push(
        <Article 
          key={data.links[i]}
          header={data.headers[i]} 
          text={data.texts[i]}
          link={data.links[i]}
          animationDelay={(data.headers.length - i) * 0.1}
          zIndex={i + 1}
        />
      );
    }

    return (
      <main className={styles.Articles}>
        <ul className={styles.Articles__list}>
          {listOfArticles}
        </ul>
        <TableImage />
      </main>
    );
  }
}

export default Articles;