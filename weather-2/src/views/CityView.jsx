import React, { Component } from 'react';
import PropsType from 'prop-types';

export default class CityView extends Component {
  render() {
    const { city, addCity } = this.props;
    return (
      <div>
        <p>CityView</p>
        <p>{JSON.stringify(city)}</p>
        <button type="button" onClick={addCity}>
          Add to favorites
        </button>
      </div>
    );
  }
}

CityView.propTypes = {
  city: PropsType.exact({
    uid: PropsType.string.isRequired,
    loading: PropsType.bool.isRequired,
    location: PropsType.exact({
      coords: PropsType.exact({
        latitude: PropsType.number.isRequired,
        longitude: PropsType.number.isRequired
      }).isRequired,
      weather: PropsType.shape({}).isRequired
    }).isRequired
  }).isRequired,
  addCity: PropsType.func.isRequired
};
