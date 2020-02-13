import React, { Component } from 'react';
import PropsType from 'prop-types';

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

export const WeatherPropTypes = PropsType.arrayOf(
  PropsType.exact({
    type: PropsType.string.isRequired,
    value: PropsType.string.isRequired
  }).isRequired
);

WeatherView.propTypes = {
  weather: WeatherPropTypes.isRequired
};
