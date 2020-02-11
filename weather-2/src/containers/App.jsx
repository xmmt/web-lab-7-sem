import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MainCity } from '../components/MainCity';
import { Cities } from '../components/Cities';
import { UserLocation } from '../components/UserLocation';
import { citiesAdd, citiesRemove, citiesFetchData } from '../actions/cities';

// import // State or Local Processing Plugins
// '@devexpress/dx-react-grid';
// import {
//   Grid,
//   Table,
//   TableHeaderRow
// } from '@devexpress/dx-react-grid-bootstrap4';

// import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import '../App.css';

const App = ({ citiesList, addCity, removeCity, fetchData }) => {
  const [userLocation, setUserLocation] = useState(null);
  return (
    <div className="App">
      <UserLocation
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
      <MainCity
        userLocation={userLocation}
        addCity={addCity}
        fetchData={fetchData}
      />
      <Cities
        citiesList={citiesList}
        removeCity={removeCity}
        fetchData={fetchData}
      />
    </div>
  );
};

App.propTypes = {
  citiesList: PropTypes.arrayOf(
    PropTypes.objectOf([
      PropTypes.string.isRequired,
      PropTypes.objectOf([
        PropTypes.number.isRequired,
        PropTypes.number.isRequired
      ])
    ])
  ).isRequired,
  addCity: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  citiesList: state.citiesList
});

const mapDispatchToProps = dispatch => ({
  addCity: city => dispatch(citiesAdd(city)),
  removeCity: city => dispatch(citiesRemove(city)),
  fetchData: city => dispatch(citiesFetchData(city))
});

// eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(App);
