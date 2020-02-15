import { API_KEY } from '../config';

export const getName = (latitude, longitude, onSuccess, onError) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      onSuccess({ latitude, longitude }, response.name);
    })
    .catch(error => onError(error));
};

export const getCoords = (onSuccess, onError) => {
  const geo = navigator.geolocation;
  if (!geo) {
    onError('Геолокация не поддерживается браузером');
    return;
  }
  const handle = ({ coords }) => {
    const { latitude, longitude } = coords;
    getName(latitude, longitude, onSuccess, onError);
  };
  geo.getCurrentPosition(handle, onError);
};
