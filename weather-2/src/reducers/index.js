import { combineReducers } from 'redux';
import { items, newCityValue } from './items';

export const rootReducer = combineReducers({
  items,
  newCityValue
});

export default rootReducer;

// import { combineReducers } from 'redux';
// import citiesReducer from './cities';
// import mainCityReducer from './main';
//
// export const rootReducer = combineReducers({
//   citiesList: citiesReducer,
//   mainCity: mainCityReducer
// });
//
// export default rootReducer;
//
