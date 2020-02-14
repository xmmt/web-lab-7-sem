import React, { Component } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import UsePositionDemo from './UsePositionDemo';
import City from './containers/City';
import Cities from './containers/Cities';

import './App.css';

class App extends Component {
  render() {
    const { citiesList, mainCity, userLocation } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>Weather</p>
          <p>
            <UsePositionDemo userLocation={userLocation} />
          </p>
        </header>
        <City city={mainCity} />
        <Cities citiesList={citiesList} />
      </div>
    );
  }
}

App.propTypes = {
  citiesList: PropsType.shape([]).isRequired,
  mainCity: PropsType.shape({}).isRequired,
  userLocation: PropsType.shape({}).isRequired
};

const mapStateToProps = state => ({
  citiesList: state.citiesList,
  mainCity: state.mainCity,
  userLocation: state.userLocation
});

export default connect(mapStateToProps)(App);
