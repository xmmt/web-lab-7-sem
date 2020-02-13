import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsType from 'prop-types';
import CityView from '../views/CityView';
import { addCityAction } from '../actions';

class City extends Component {
  render() {
    const { city, addCity } = this.props;
    return (
      <div>
        <p>Cities</p>
        <CityView city={city} addCity={addCity} />
      </div>
    );
  }
}

City.propTypes = {
  city: PropsType.shape({}).isRequired,
  addCity: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

const mapDispatchToProps = dispatch => ({
  addCity: uid => dispatch(addCityAction(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
