import React, { Component } from 'react';
import PropsType from 'prop-types';
import WeatherView from './WeatherView';
import { CityPropTypes } from '../utils/weather-prop-types';

export default class CityView extends Component {
  render() {
    const { city, addCity } = this.props;
    return (
      <div>
        <p>CityView</p>
        <p>{JSON.stringify(city)}</p>
        <WeatherView weather={city.weather} />
        <button type="button" onClick={addCity}>
          Add to favorites
        </button>
      </div>
    );
  }
}

CityView.propTypes = {
  city: CityPropTypes.isRequired,
  addCity: PropsType.func.isRequired
};
