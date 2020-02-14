import React, { Component } from 'react';
import PropsType from 'prop-types';
import WeatherView from './WeatherView';
import { CityPropTypes } from '../utils/prop-types';

export default class CityView extends Component {
  render() {
    const { city, addCity, getUserLocation } = this.props;
    return (
      <div>
        <p>CityView</p>
        <p>{JSON.stringify(city)}</p>
        <WeatherView weather={city.weather} />
        <button type="button" onClick={addCity}>
          Add to favorites
        </button>
        <button type="button" onClick={getUserLocation}>
          Get user location
        </button>
      </div>
    );
  }
}

CityView.propTypes = {
  city: CityPropTypes.isRequired,
  addCity: PropsType.func.isRequired,
  getUserLocation: PropsType.func.isRequired
};
