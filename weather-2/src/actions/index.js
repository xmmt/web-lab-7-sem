import { getLocation } from '../utils/location';
import { fetchDataByLocation, fetchDataByName } from '../utils/data';

export const ADD_CITY = 'ADD_CITY';
export const addCityAction = uid => ({
  type: ADD_CITY,
  payload: uid
});

export const REMOVE_CITY = 'REMOVE_CITY';
export const removeCityAction = uid => ({
  type: REMOVE_CITY,
  payload: uid
});

export const SET_LOCATION = 'SET_LOCATION';
export const setLocationAction = (uid, location) => ({
  type: SET_LOCATION,
  payload: { uid, location }
});

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataAction = (location, onComplete) => dispatch => {
  dispatch({
    type: FETCH_DATA,
    payload: null
  });
  const onSuccess = data => {
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data
    });
  };
  const onError = error => {
    dispatch({
      type: FETCH_DATA_ERROR,
      payload: error
    });
  };
  fetchDataByLocation(location, onSuccess, onError);
  onComplete();
};

export const FETCH_DATA_WITH_UID = 'FETCH_DATA_WITH_UID';
export const FETCH_DATA_WITH_UID_SUCCESS = 'FETCH_DATA_WITH_UID_SUCCESS';
export const FETCH_DATA_WITH_UID_ERROR = 'FETCH_DATA_WITH_UID_ERROR';
export const fetchDataWithUidAction = (uid, name, onComplete) => dispatch => {
  dispatch({
    type: FETCH_DATA,
    payload: uid
  });
  const onSuccess = data => {
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: { uid, data }
    });
  };
  const onError = error => {
    dispatch({
      type: FETCH_DATA_ERROR,
      payload: { uid, error }
    });
  };
  fetchDataByName(name, onSuccess, onError);
  onComplete();
};

export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const GET_USER_LOCATION_SUCCESS = 'GET_USER_LOCATION_SUCCESS';
export const GET_USER_LOCATION_ERROR = 'GET_USER_LOCATION_ERROR';
export const getUserLocationAction = onComplete => dispatch => {
  dispatch({
    type: GET_USER_LOCATION,
    payload: null
  });
  const onSuccess = coords => {
    dispatch({
      type: GET_USER_LOCATION_SUCCESS,
      payload: coords
    });
  };
  const onError = error => {
    dispatch({
      type: GET_USER_LOCATION_ERROR,
      payload: error
    });
  };
  getLocation(onSuccess, onError);
  onComplete();
};
