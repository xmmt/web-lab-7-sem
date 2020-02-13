import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsePositionDemo from './UsePositionDemo';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Weather</p>
          <p>
            <UsePositionDemo />
          </p>
        </header>
        <MainCity />
        <Cities />
      </div>
    );
  }
}
