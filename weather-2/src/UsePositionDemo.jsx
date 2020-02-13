import React from 'react';
import usePosition from './usePosition';

const UsePositionDemo = () => {
  const { latitude, longitude, error, getLocation } = usePosition();

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
