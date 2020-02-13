import React, { Component } from 'react';
import PropsType from 'prop-types';
import MiniCityView from './MiniCityView';

export default class CitiesView extends Component {
  render() {
    const { citiesList, removeCity } = this.props;
    return (
      <div>
        <ul>
          {citiesList.map(city => (
            <MiniCityView key={city.uid} city={city} remove={removeCity} />
          ))}
        </ul>
      </div>
    );
  }
}

CitiesView.propTypes = {
  citiesList: PropsType.arrayOf(
    PropsType.exact({
      uid: PropsType.string.isRequired,
      loading: PropsType.bool.isRequired,
      location: PropsType.exact({
        coords: PropsType.exact({
          latitude: PropsType.number.isRequired,
          longitude: PropsType.number.isRequired
        }).isRequired,
        weather: PropsType.shape({}).isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  removeCity: PropsType.func.isRequired
};
