/*
export const SET_YEAR = 'SET_YEAR';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  };
}
*/
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const getPhotos = ({ year, onComplete }) => {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      });
      if (typeof onComplete === 'function') onComplete();
    }, 3000);
  };
};
/*
export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_ERROR = 'GET_LOCATION_ERROR';
export const getLocation = () => dispatch => {
  dispatch({ type: GET_LOCATION_REQUEST });
  const geo = navigator.geolocation;
  if (!geo) {
    dispatch({
      type: GET_LOCATION_ERROR,
      payload: 'Геолокация не поддерживается браузером'
    });
  }
  geo.getCurrentPosition(
    ({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch({
        type: GET_LOCATION_SUCCESS,
        payload: { latitude, longitude }
      });
    },
    error => {
      dispatch({ type: GET_LOCATION_ERROR, payload: error });
    }
  );
};
*/
