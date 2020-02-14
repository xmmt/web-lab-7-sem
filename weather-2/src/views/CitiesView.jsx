import React, { Component } from 'react';
import PropsType from 'prop-types';
import MiniCityView from './MiniCityView';
import { CityPropTypes } from '../utils/prop-types';

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
  citiesList: PropsType.arrayOf(CityPropTypes).isRequired,
  removeCity: PropsType.func.isRequired
};
