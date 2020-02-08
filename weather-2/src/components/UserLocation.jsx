import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const UserLocation = ({ userLocation, setUserLocation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [buttonText, setButtonText] = useState('Узнать');
  const onChange = ({ coords }) => {
    setUserLocation({
      ...userLocation,
      coords: {
        latitude: coords.latitude,
        longtitude: coords.longitude
      }
    });
  };
  const onError = () => {
    setButtonText('(._. )');
    setTimeout(setButtonText('Узнать'), 2000);
  };
  const getLocation = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      onError();
      return;
    }
    geo.getCurrentPosition(
      position => {
        onChange(position);
        setIsFetching(false);
      },
      error => {
        onError(error);
        setIsFetching(false);
      }
    );
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line consistent-return
    return () => geo.clearWatch(watcher);
  }, []);

  if (isFetching) {
    return <div>Мое местоположение: ...</div>;
  }
  return (
    <div>
      Мое местоположение:{' '}
      {userLocation ? (
        <p>{userLocation.name}</p>
      ) : (
        <button type="button" onClick={getLocation}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

UserLocation.propTypes = {
  userLocation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.shape({})
  }),
  setUserLocation: PropTypes.func.isRequired
};

UserLocation.defaultProps = {
  userLocation: null
};

export default UserLocation;
