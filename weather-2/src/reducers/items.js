import {
  FETCH_DATA_SUCCESS,
  ADD_CITY,
  REMOVE_CITY,
  IS_LOADING,
  HAS_ERROR,
  CHANGE_INPUT
} from '../actions/items';

export const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return state.map(current =>
        current.city === action.items.city
          ? {
              ...action.items,
              isLoaded: true,
              isErrored: false
            }
          : current
      );
    }

    case ADD_CITY: {
      state.push({
        city: action.city,
        data: {},
        isLoaded: false,
        isErrored: false
      });
      return state;
    }

    case REMOVE_CITY: {
      let index = state.findIndex(current => current.city === action.city);
      var copy = state.slice();
      copy.splice(index, 1);
      return copy;
    }

    case IS_LOADING: {
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

    case HAS_ERROR: {
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
};

export const newCityValue = (state = '', action) => {
  switch (action.type) {
    case ADD_CITY: {
      return '';
    }
    case CHANGE_INPUT: {
      return action.city;
    }
    default:
      return state;
  }
};
