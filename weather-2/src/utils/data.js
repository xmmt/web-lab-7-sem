import { API_KEY } from '../config';

export const fetchDataByName = (name, onSuccess, onError) => {
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

export const fetchDataByLocation = (location, onSuccess, onError) => {
  const { latitude, longitude } = location.coords;
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
