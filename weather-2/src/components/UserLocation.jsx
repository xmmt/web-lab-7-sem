import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLocationName } from '../utils/getLocationName';

export const UserLocation = ({ userLocation, setUserLocation }) => {
  const onChange = ({ coords }) => {
    getLocationName(coords).then(result => {
      setUserLocation({
        name: result,
        coords: {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      });
    });
  };
  const onError = error => {
    setUserLocation(null);
  };
  const getLocation = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      onError();
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  };
  /* useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      return;
    }
   // const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line consistent-return
   // return () => geo.clearWatch(watcher);
  }, []); */

  return (
    <div>
      Мое местоположение:{' '}
      {userLocation ? (
        <span>{userLocation.name}</span>
      ) : (
        <span>Неизвестно</span>
      )}
      <span>
        <button type="button" onClick={getLocation}>
          Обновить местоположение
        </button>
      </span>
    </div>
  );
};

UserLocation.propTypes = {
  userLocation: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.shape({})
  }),
  setUserLocation: PropTypes.func.isRequired
};

UserLocation.defaultProps = {
  userLocation: null
};

export default UserLocation;
