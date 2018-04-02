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
    notFound: false,
    error: false
  }

  getData = () => {
    const request = encodeURIComponent(this.state.userInput.trim());
    if (request) {
      axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${request}&limit=10&namespace=0&origin=*&format=json`)
        .then(response => {
          if (!response.data[1].length) {
            this.setState({ 
              data: null,
              notFound: true, 
              error: false 
            });
          } else {
            this.setState({ 
              data: response.data, 
              notFound: false,
              error: false
            });
          }
        })
        .catch(error => {
          this.setState({ error: true })
        });
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
    // return this.state.userInput !== nextState.userInput || 
    //   this.state.data !== nextState.data ||
    //   this.state.notFound !== nextState.notFound ||
    //   this.state.error !== nextState.error;
    return this.state !== nextState;
  }


  render() {
    console.log('render');
    let searchResult = null;
    if (this.state.error) {
      searchResult = <h4 className={styles.App__searchFail}>Something went wrong...</h4>;
    }
    if (this.state.notFound) {
      searchResult = <h4 className={styles.App__searchFail}>Sorry, I can't find it</h4>;
    }
    if (this.state.data) {
      searchResult = <Articles data={this.state.data} />;
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
          {searchResult}
        </Background>
      </div>
    );
  }
}

export default App;
