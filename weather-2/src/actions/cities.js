import { API_KEY } from '../config';

// export function itemsHasErrored(city) {
//  return {
//    type: 'ITEMS_HAS_ERRORED',
//    city
//  };
// }

// export function itemsFetchDataSuccess(items, city) ({
//     type: 'ITEMS_FETCH_DATA_SUCCESS',
//     items: {
//       city: city,
//       data: items
//     }
//   })

export const CITIES_ADD = 'CITIES_ADD';
export const citiesAdd = city => ({
  type: CITIES_ADD,
  payload: city
});

// export function changeCityInpit(item) {
//  return {
//    type: 'CHANGE_INPUT',
//    item
//  };
// }

export const CITIES_REMOVE = 'CITIES_REMOVE';
export const citiesRemove = city => ({
  type: CITIES_REMOVE,
  payload: city
});

// export function loading(city) {
//  return {
//    type: 'IS_LOADING',
//    city
//  };
// }

//  export function doDeleteItem(city) {
//    return dispatch => {
//      dispatch(deleteItem(city));
//    };
//  }
//
//  export function doChangeInput(item) {
//    return dispatch => {
//      dispatch(changeCityInpit(item));
//    };
//  }
//
//  export function doAddItem(item) {
//    return dispatch => {
//      dispatch(itemsAddItem(item));
//    };
//  }

export const CITIES_FETCH_DATA = 'CITIES_FETCH_DATA';
export const CITIES_FETCH_DATA_ERROR = 'CITIES_FETCH_DATA_ERROR';
export const CITIES_FETCH_DATA_SUCCESS = 'CITIES_FETCH_DATA_SUCCESS';
export const citiesFetchData = city => async dispatch => {
  dispatch({
    type: CITIES_FETCH_DATA,
    payload: city
  });
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
    );
    if (!response.ok) {
      // throw Error(response.statusText);
    }
    const info = await response.json();

    dispatch({
      type: CITIES_FETCH_DATA_SUCCESS,
      payload: { ...city, info }
    });
  } catch (err) {
    dispatch({
      type: CITIES_FETCH_DATA_ERROR,
      payload: city
    });
  }
};
/* export const citiesFetchData = city => dispatch => {
  dispatch({
    type: CITIES_FETCH_DATA,
    payload: city
  });
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
  )
    .then(response => {
      if (!response.ok) {
        // throw Error(response.statusText);
      }

      return response;
    })
    .then(response => response.json())
    .then(info =>
      dispatch({
        type: CITIES_FETCH_DATA_SUCCESS,
        payload: { ...city, info }
      })
    )
    .catch(() =>
      dispatch({
        type: CITIES_FETCH_DATA_ERROR,
        payload: city
      })
    );
}; */
/*
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
*/
