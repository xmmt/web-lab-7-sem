import React, { Component } from 'react';
import City from './containers/City';
import Cities from './containers/Cities';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Weather</p>
        </header>
        <City />
        <Cities />
      </div>
    );
  }
}
