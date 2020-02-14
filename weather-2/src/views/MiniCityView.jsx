import React, { Component } from 'react';
import PropsType from 'prop-types';
import WeatherView from './WeatherView';
import { CityPropTypes } from '../utils/prop-types';

export default class MiniCityView extends Component {
  render() {
    const { city, removeCity } = this.props;
    return (
      <div>
        <p>MiniCityView</p>
        <p>{JSON.stringify(city)}</p>
        <WeatherView weather={city.weather} />
        <button type="button" onClick={removeCity}>
          Remove
        </button>
      </div>
    );
  }
}

MiniCityView.propTypes = {
  city: CityPropTypes.isRequired,
  removeCity: PropsType.func.isRequired
};
