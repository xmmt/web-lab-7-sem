import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsType from 'prop-types';
import CityView from '../views/CityView';
import {
  addCityAction,
  setLocationAction,
  fetchDataAction,
  getUserLocationAction
} from '../actions';
import { CityPropTypes } from '../utils/prop-types';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGettingLocation: false,
      isFetchingData: false
    };
  }

  render() {
    const {
      city,
      addCity,
      getUserLocation,
      setLocation,
      fetchData
    } = this.props;
    const { isGettingLocation, isFetchingData } = this.state;
    return (
      <div>
        <p>Cities</p>
        <CityView
          isGettingLocation={isGettingLocation}
          isFetchingData={isFetchingData}
          city={city}
          addCity={addCity}
          getUserLocation={() => {
            this.setState({ isGettingLocation: true });
            getUserLocation(() => {
              this.setState({ isGettingLocation: false });
            });
          }}
          setLocation={setLocation}
          fetchData={location => {
            this.setState({ isFetchingData: true });
            fetchData(location, () => {
              this.setState({ isFetchingData: false });
            });
          }}
        />
      </div>
    );
  }
}

City.propTypes = {
  city: CityPropTypes.isRequired,
  addCity: PropsType.func.isRequired,
  getUserLocation: PropsType.func.isRequired,
  setLocation: PropsType.func.isRequired,
  fetchData: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  city: state.mainCity
});

const mapDispatchToProps = dispatch => ({
  addCity: uid => dispatch(addCityAction(uid)),
  getUserLocation: onComplete => dispatch(getUserLocationAction(onComplete)),
  setLocation: location => dispatch(setLocationAction(location)),
  fetchData: (location, onComplete) =>
    dispatch(fetchDataAction(location, onComplete))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
