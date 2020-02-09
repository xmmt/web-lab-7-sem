import React from 'react';
import PropTypes from 'prop-types';
import City from './City';

export const Cities = ({ cities, remove, fetchData }) => {
  return (
    <div>
      {cities.map(city => (
        <City city={city} remove={remove} fetchData={fetchData} />
      ))}
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.shape([]).isRequired,
  remove: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default Cities;
