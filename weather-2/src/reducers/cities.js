import { ADD_CITY, REMOVE_CITY } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_CITY: {
      state.push({ uid: action.payload });
      return state;
    }
    case REMOVE_CITY: {
      state.slice(state.findIndex(current => current.uid === action.payload));
      return state;
    }
    /*
        case 'ITEMS_FETCH_DATA_SUCCESS': {
            return state.map((current) => {
                return current.city === action.items.city ?
                    {
                        ...action.items,
                        isLoaded: true,
                        isErrored: false
                    }
                    : current;
            });
        }

        case 'ADD_ITEM': {
            state.push({city: action.item, data: {}, isLoaded: false, isErrored: false});
            return state;
        }

        case 'DELETE_ITEM': {
            let index = state.findIndex(current => current.city === action.city);
            var copy = state.slice();
            copy.splice(index, 1);
            return copy;
        }

        case 'IS_LOADING': {
            return state.map((current) => {
                return current.city === action.city ?
                    {
                        ...current,
                        isLoaded: false,
                        isErrored: false
                    }
                    : current;
            });
        }

        case 'ITEMS_HAS_ERRORED': {
            return state.map((current) => {
                return current.city === action.city ?
                    {
                        ...current,
                        isErrored: true
                    }
                    : current;
            });
        }
        */
    default:
      return state;
  }
}
