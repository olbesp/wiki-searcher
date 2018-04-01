import React, { Component } from 'react';

import styles from './App.scss';
import axios from 'axios';

class App extends Component {
  state = {
    userInput: '',
    searchResults: null
  }

  getData = () => {
    const request = encodeURIComponent(this.state.userInput);
    axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${request}&limit=10&namespace=0&origin=*&format=json`)
      .then(response => {
        console.log(response);
      })
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
    if ((e.which === 13 || e.charCode === 13) && this.state.userInput.trim()) {
      this.getData();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.userInput !== nextState.userInput;
  }


  render() {
    return (
      <div className={styles.App}>
        <div>
          <input type="text" onChange={this.inputChangedHandler} onKeyPress={this.inputPressedHandler} />
          <button onClick={this.searchClickedHandler}>Search</button>
        </div>
      </div>
    );
  }
}

export default App;
