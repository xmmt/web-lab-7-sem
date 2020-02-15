import { API_KEY } from '../config';

export const REMOVE_CITY = 'REMOVE_CITY';
export const removeCityAction = city => dispatch => {
  dispatch({
    type: REMOVE_CITY,
    city
  });
};

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const inputChangeAction = city => dispatch => {
  dispatch({
    type: CHANGE_INPUT,
    city
  });
};

export const ADD_CITY = 'ADD_CITY';
export const addCityAction = city => dispatch => {
  dispatch({
    type: ADD_CITY,
    city
  });
};

export const IS_LOADING = 'IS_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const HAS_ERROR = 'HAS_ERROR';
export const fetchDataAction = city => async dispatch => {
  dispatch({
    type: IS_LOADING,
    city
  });
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const items = await response.json();
    dispatch({
      type: FETCH_DATA_SUCCESS,
      items: {
        city: city,
        data: items
      }
    });
  } catch (e) {
    dispatch({
      type: HAS_ERROR,
      city
    });
  }
};
