import { SET_LOCATION } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_LOCATION: {
      return { userLocation: action.payload };
    }
    default:
      return state;
  }
}
