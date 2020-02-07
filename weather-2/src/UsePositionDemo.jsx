import React from "react";
// Импортируем наш хук здесь.
import usePosition from "./usePosition";

const UsePositionDemo = () => {
  // Получаем позицию браузера (или ошибку) здесь.
  const { latitude, longitude, error, getLocation } = usePosition();

  // Выводим координаты на экран одной строкой (красота пока не нужна).
  return (
    <>
      latitude: {latitude}, longitude: {longitude}, error: {error}
      <button type="button" onClick={getLocation}>
        Узнать местоположение
      </button>
    </>
  );
};

export default UsePositionDemo;
