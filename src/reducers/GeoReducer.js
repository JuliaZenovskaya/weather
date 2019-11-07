export default function geoReducer (state, action) {
  state = {
    ...state,
    error: false
  };
  switch (action.type) {
    case 'SET_COORDS':
      state.coords = action.payload;
      break;
    case 'GET_SUCCESS_RESPONSE':
      state.forecast =  action.payload;
      break;
    case 'GET_ERROR_RESPONSE':
      state.error = action.payload;
      break;
    default:
      break;
  }
  return state;
}
