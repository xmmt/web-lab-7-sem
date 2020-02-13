import React, { Component } from 'react';
import PropsType from 'prop-types';
import WeatherView, { WeatherPropTypes } from './WeatherView';

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
  city: PropsType.exact({
    uid: PropsType.string.isRequired,
    weather: WeatherPropTypes.isRequired,
    loading: PropsType.bool.isRequired,
    location: PropsType.exact({
      coords: PropsType.exact({
        latitude: PropsType.number.isRequired,
        longitude: PropsType.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  removeCity: PropsType.func.isRequired
};
