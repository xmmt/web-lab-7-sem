import React, { Component } from 'react';
import { WeatherPropTypes } from '../utils/weather-prop-types';

export default class WeatherView extends Component {
  render() {
    const { weather } = this.props;
    return (
      <div>
        <p>{JSON.stringify(weather)}</p>
      </div>
    );
  }
}

WeatherView.propTypes = {
  weather: WeatherPropTypes.isRequired
};
