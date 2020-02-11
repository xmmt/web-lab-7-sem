import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const MainCity = ({ userLocation, add, fetchData }) => {
  const city = userLocation;
  useEffect(() => {
    if (city && !city.info) {
      fetchData(city);
    }
  }, []);
  return (
    <div>
      {JSON.stringify(city)}
      <button type="button" onClick={() => add(city)}>
        Add
      </button>
    </div>
  );
};

MainCity.propTypes = {
  userLocation: PropTypes.shape({}).isRequired,
  add: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default MainCity;
