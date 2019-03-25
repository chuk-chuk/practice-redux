import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import { Provider } from 'react-redux';

import Banner from '../components/banner';

import myStore from '../configureReduxStore';

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is <code>stateManagement.js</code> portal read docs for further implementation.
            </p>
            <Banner />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;