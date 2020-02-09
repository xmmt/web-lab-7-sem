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

const App = ({ cities, add, remove, fetchData }) => {
  const [userLocation, setUserLocation] = useState(null);
  return (
    <div className="App">
      <UserLocation
        userLocation={userLocation}
        setUserLocation={setUserLocation}
      />
      <MainCity userLocation={userLocation} add={add} fetchData={fetchData} />
      <Cities cities={cities} remove={remove} fetchData={fetchData} />
    </div>
  );
};

App.propTypes = {
  cities: PropTypes.shape([]).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  add: city => dispatch(citiesAdd(city)),
  remove: city => dispatch(citiesRemove(city)),
  fetchData: city => dispatch(citiesFetchData(city))
});

// eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(App);
