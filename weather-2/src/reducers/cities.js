import {
  CITIES_ADD,
  CITIES_REMOVE,
  CITIES_FETCH_DATA
} from '../actions/cities';

export function citiesReducer(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS': {
      return state.map(current => {
        return current.city === action.payload.city
          ? {
              ...action.items,
              isLoaded: true,
              isErrored: false
            }
          : current;
      });
    }

    case CITIES_FETCH_DATA: {
      return state;
    }

    case CITIES_ADD: {
      state.push({
        city: action.payload,
        data: {},
        isLoaded: false,
        isErrored: false
      });
      return state;
    }

    case CITIES_REMOVE: {
      const index = state.findIndex(current => current.city === action.payload);
      const copy = state.slice();
      copy.splice(index, 1);
      return copy;
    }

    case 'IS_LOADING': {
      return state.map(current => {
        return current.city === action.city
          ? {
              ...current,
              isLoaded: false,
              isErrored: false
            }
          : current;
      });
    }

    case 'ITEMS_HAS_ERRORED': {
      return state.map(current => {
        return current.city === action.city
          ? {
              ...current,
              isErrored: true
            }
          : current;
      });
    }

    default:
      return state;
  }
}

export function newCityValue(state = '', action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return '';
    }
    case 'CHANGE_INPUT': {
      return action.item;
    }
    default:
      return state;
  }
}

/* import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS , GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR 
} from '../actions/PageActions';

const initialState = {
  year: 2018,
  photos: [],
  //  isFetching: false,
  getPhotos: () => {},
  getLocation: () => {}
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload  , isFetching: true };

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload  , isFetching: false };
    
      case GET_LOCATION_REQUEST:
        return {...state, fetchingLocation: true}

    default:
      return state;
  }
}

export default pageReducer;

 */
