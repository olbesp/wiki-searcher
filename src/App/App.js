import React, { Component } from 'react';

import styles from './App.scss';
import axios from 'axios';
import Background from '../components/UI/Background/Background';
import SearchInput from '../components/SearchInput/SearchInput';
import Articles from '../components/Articles/Articles';

class App extends Component {
  state = {
    userInput: '',
    data: null,
    notFound: false
  }

  getData = () => {
    const request = encodeURIComponent(this.state.userInput.trim());
    if (request) {
      axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${request}&limit=10&namespace=0&origin=*&format=json`)
        .then(response => {
          console.log(response);
          
          this.setState({ data: response.data });
        })
    }
  }

  inputChangedHandler = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  searchClickedHandler = () => {
    this.getData();
  }

  inputPressedHandler = (e) => {
    if ((e.which === 13 || e.charCode === 13) && this.state.userInput) {
      this.getData();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.userInput !== nextState.userInput || this.state.data !== nextState.data;
  }


  render() {
    let articles = null;
    if (this.state.data) {
      articles = <Articles data={this.state.data} />;
    }
    return (
      <div className={styles.App}>
        <Background>
          <header className={styles.App__header}>
            <h1 className={styles.App__header__main}>WikiSearcher</h1>
            <h3 className={styles.App__header__sub}>Ask me anything</h3>
          </header>       
          <SearchInput 
            changed={this.inputChangedHandler}
            clicked={this.searchClickedHandler}
            keyPressed={this.inputPressedHandler}
          />
          {articles}
        </Background>
      </div>
    );
  }
}

export default App;
