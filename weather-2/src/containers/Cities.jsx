import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsType from 'prop-types';
import CitiesView from '../views/CitiesView';
import { removeCityAction, fetchDataWithUidAction } from '../actions';

class Cities extends Component {
  render() {
    const { citiesList, removeCity, fetchData } = this.props;
    return (
      <div>
        <p>Cities</p>
        <CitiesView
          citiesList={citiesList}
          removeCity={removeCity}
          fetchData={fetchData}
        />
      </div>
    );
  }
}

Cities.propTypes = {
  citiesList: PropsType.arrayOf(PropsType.shape({}).isRequired).isRequired,
  removeCity: PropsType.func.isRequired,
  fetchData: PropsType.func.isRequired
};

const mapStateToProps = state => ({
  citiesList: state.citiesList
});

const mapDispatchToProps = dispatch => ({
  removeCity: uid => dispatch(removeCityAction(uid)),
  fetchData: (uid, location) => dispatch(fetchDataWithUidAction(uid, location))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
