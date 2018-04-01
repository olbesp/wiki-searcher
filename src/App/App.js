import React, { Component } from 'react';

import styles from './App.scss';
import axios from 'axios';
import Background from '../components/UI/Background/Background';

class App extends Component {
  state = {
    userInput: '',
    searchResults: null
  }

  getData = () => {
    const request = encodeURIComponent(this.state.userInput.trim());
    if (request) {
      axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${request}&limit=10&namespace=0&origin=*&format=json`)
        .then(response => {
          console.log(response);
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
    return this.state.userInput !== nextState.userInput;
  }


  render() {
    return (
      <div className={styles.App}>
        <Background>
          
          <input type="text" onChange={this.inputChangedHandler} onKeyPress={this.inputPressedHandler} />
          <button onClick={this.searchClickedHandler}>Search</button>
        
        </Background>
      </div>
    );
  }
}

export default App;
