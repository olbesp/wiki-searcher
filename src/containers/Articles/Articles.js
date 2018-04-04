import React, { Component } from 'react';

import styles from './Articles.scss';
import Article from './Article/Article';

const random = (limit) => Math.floor(Math.random() * limit);

class Articles extends Component {
  state = {
    articles: []
  }

  createArticles = () => {
    let articles = [];
    
    const data = {
      headers: [...this.props.data[1]],
      texts: [...this.props.data[2]],
      links: [...this.props.data[3]]
    };

    const fonts = [
      '\'Roboto\', sans-serif',
      '\'Roboto Slab\', serif',
      '\'Oswald\', sans-serif',
      '\'Playfair Display SC\', serif',
    ]

    for (let i = 0; i < data.headers.length; i++) {
      let colors = { red: random(100), green: random(100), blue: random(100) };
      let rgbDark = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
      let rgbLight = `rgb(${colors.red + 50}, ${colors.green + 50}, ${colors.blue + 50})`;

      let dynamicStyle = {
        width: `${random(20) + 80}%`,
        backgroundImage: `linear-gradient(${rgbDark}, ${rgbLight}, ${rgbDark})`,
        fontFamily: `${fonts[random(fonts.length)]}`,
        fontWeight: 400,
        textTransform: `${['uppercase', 'capitalize'][random(2)]}`,
        letterSpacing: random(5)
      };

      articles.push(
        <Article
          key={data.links[i]}
          header={data.headers[i]}
          text={data.texts[i]}
          link={data.links[i]}
          animationDelay={(data.headers.length - i) * 0.1}
          zIndex={i + 1}
          headerSize={random(2) + 1}
          style={dynamicStyle}
        />
      );
    }
    this.setState({ articles });
  }

  componentDidMount() {
    this.createArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.createArticles();
    }
  }

  render() {
    return (
      <main className={styles.Articles}>
        <ul className={styles.Articles__list}>
          {this.state.articles}
        </ul>
      </main>
    );
  }
}

export default Articles;