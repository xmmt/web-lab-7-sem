import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsType from 'prop-types';
import CityView from '../views/CityView';
import { addCityAction, setLocationAction, fetchDataAction } from '../actions';
import { CityPropTypes } from '../utils/weather-prop-types';

class City extends Component {
  render() {
    const { city, addCity, setLocation, fetchData } = this.props;
    return (
      <div>
        <p>Cities</p>
        <CityView
          city={city}
          addCity={addCity}
          setLocation={setLocation}
          fetchData={fetchData}
        />
      </div>
    );
  }
}

City.propTypes = {
  city: CityPropTypes.isRequired,
  addCity: PropsType.func.isRequired,
  setLocation: PropsType.func.isRequired,
  fetchData: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  city: state.mainCity
});

const mapDispatchToProps = dispatch => ({
  addCity: uid => dispatch(addCityAction(uid)),
  setLocation: location => dispatch(setLocationAction(location)),
  fetchData: location => dispatch(fetchDataAction(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
