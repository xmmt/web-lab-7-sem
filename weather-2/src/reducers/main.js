const initialState = {
  uid: null,
  weather: null,
  loading: false,
  location: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
