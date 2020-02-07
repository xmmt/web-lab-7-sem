import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    const { latitude, longitude } = coords;
    // Здесь мы могли бы сохранить весь объект position, но для
    // ясности давайте явно перечислим, какие свойства нас интересуют.
    setPosition({ latitude, longitude });
  };

  const onError = err => {
    setError(err.message);
  };

  const getLocation = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Геолокация не поддерживается браузером");
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Геолокация не поддерживается браузером");
      return;
    }

    // Подписываемся на изменение геопозиции браузера.
    const watcher = geo.watchPosition(onChange, onError);

    // В случае, если компонент будет удаляться с экрана
    // производим отписку от слежки, чтобы не засорять память.
    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error, getLocation };
};

export default usePosition;
