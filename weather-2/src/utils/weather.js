import { API_KEY } from '../config';

export const fetchWeatherByName = (name, onSuccess, onError) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric&lang=ru`
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => onSuccess(response))
    .catch(error => onError(error));
};

export const fetchWeatherByCoords = (coords, onSuccess, onError) => {
  const { latitude, longitude } = coords;
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
    .then(response => onSuccess(response))
    .catch(error => onError(error));
};
