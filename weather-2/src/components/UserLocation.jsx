import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getLocationName } from '../utils/getLocationName';

export default class UserLocation extends Component {
  onChange({ coords }) {
    const { setUserLocation } = this.state;
    this.getLocationName(coords).then(result => {
      setUserLocation({
        name: result,
        coords: {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      });
    });
  }

  onError() {
    this.setUserLocation(null);
  }

  getLocation() {
    const geo = navigator.geolocation;
    if (!geo) {
      this.onError();
      return;
    }
    geo.getCurrentPosition(this.onChange, this.onError);
  }

  /* useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      return;
    }
   // const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line consistent-return
   // return () => geo.clearWatch(watcher);
  }, []); */

  render() {
    const { userLocation } = this.state;
    return (
      <div>
        Мое местоположение:{' '}
        {userLocation ? (
          <span>{userLocation.name}</span>
        ) : (
          <span>Неизвестно</span>
        )}
        <span>
          <button type="button" onClick={this.getLocation}>
            Обновить местоположение
          </button>
        </span>
      </div>
    );
  }
}

UserLocation.propTypes = {
  userLocation: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.shape({})
  })
};

UserLocation.defaultProps = {
  userLocation: null
};
