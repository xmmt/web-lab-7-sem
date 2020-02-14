import { combineReducers } from 'redux';
import locationReducer from './location';
import citiesReducer from './cities';
import mainCityReducer from './main';

export const rootReducer = combineReducers({
  userLocation: locationReducer,
  citiesList: citiesReducer,
  mainCity: mainCityReducer
});

export default rootReducer;
