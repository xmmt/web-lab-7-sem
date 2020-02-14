export const getLocation = (onSuccess, onError) => {
  const geo = navigator.geolocation;
  if (!geo) {
    onError('Геолокация не поддерживается браузером');
    return;
  }
  geo.getCurrentPosition(({ coords }) => onSuccess(coords), onError);
};

export default getLocation;
