import { ADD_CITY, REMOVE_CITY } from '../actions';

export function citiesReducer(state = [], action) {
  switch (action.type) {
    case ADD_CITY: {
      state.push({ uid: action.payload });
      return state;
    }
    case REMOVE_CITY: {
      state.slice(state.findIndex(current => current.uid === action.payload));
      return state;
    }
    default:
      return state;
  }
}

export default citiesReducer;
