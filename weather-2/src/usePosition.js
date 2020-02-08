import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    const { latitude, longitude } = coords;
    setPosition({ latitude, longitude });
  };

  const onError = err => {
    setError(err.message);
  };

  const getLocation = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line consistent-return
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error, getLocation };
};

export default usePosition;
