import React, { useEffect } from 'react';
import usePosition from './usePosition';

const UsePositionDemo = getLocation => {
  const { latitude, longitude, error /* , getLocation */ } = usePosition();

  useEffect(() => {}, []);

  return (
    <>
      latitude: {latitude}, longitude: {longitude}, error: {error}
      <button className="btn" type="button" onClick={getLocation}>
        Узнать местоположение
      </button>
    </>
  );
};

export default UsePositionDemo;
