import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';

import logo from '../logo.svg';
import '../App.css';

import UsePositionDemo from '../UsePositionDemo';

const App = ({ user, page, getPhotosAction }) => {
  const { name, surname, age } = user;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <UsePositionDemo />
        </p>
        <h1 className="App-title">Title</h1>
      </header>
      <p className="App-intro">Here will be</p>
      <p>
        My name is: {name} {surname}, {age}
      </p>
      <User name={user.name} />
      <Page
        photos={page.photos}
        year={page.year}
        isFetching={page.isFetching}
        getPhotos={getPhotosAction}
      />
    </div>
  );
};

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired,
  page: PropTypes.shape({
    year: PropTypes.number.isRequired,
    // photos: PropTypes.shape([]).isRequired,
    // photos: PropTypes.arrayOf(PropTypes.string),
    photos: PropTypes.instanceOf(Array),
    setYear: PropTypes.func.isRequired
  }).isRequired,
  setYearAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
