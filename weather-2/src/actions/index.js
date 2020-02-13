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
