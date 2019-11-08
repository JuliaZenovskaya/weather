export default function geoReducer (currentState, action) {
  let state = {
    ...currentState,
    error: false
  };
  switch (action.type) {
    case 'SET_COORDS':
      state.coords = action.payload;
      break;
    case 'GET_SUCCESS_RESPONSE':
      state.weather =  action.payload;
      break;
    case 'GET_ERROR_RESPONSE':
      state.error = action.payload;
      break;
    default:
      break;
  }
  return state;
}
