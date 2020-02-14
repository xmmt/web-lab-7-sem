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
export const fetchDataAction = location => ({
  type: FETCH_DATA,
  payload: location
});

export const FETCH_DATA_WITH_UID = 'FETCH_DATA_WITH_UID';
export const FETCH_DATA_WITH_UID_SUCCESS = 'FETCH_DATA_WITH_UID_SUCCESS';
export const FETCH_DATA_WITH_UID_ERROR = 'FETCH_DATA_WITH_UID_ERROR';
export const fetchDataWithUidAction = uid => ({
  type: FETCH_DATA,
  payload: uid
});
