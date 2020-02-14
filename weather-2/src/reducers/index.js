import { combineReducers } from 'redux';
import locationReducer from './location';
import citiesReducer from './cities';

export default combineReducers({
  userLocation: locationReducer,
  citiesList: citiesReducer
});
