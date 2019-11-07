import getCitiesFromStorage from "../index";

const stateCities = {
  cities: getCitiesFromStorage()
};

export default function CitiesReducer(state = stateCities, action) {
  state = {
    ...state,
    error: false,
    cities: new Map(state.cities)
  };

  switch (action.type) {
    case 'ADD_CITY':
      if (!state.cities.has(action.payload))
        state.cities.set(action.payload);
      break;
    case 'DELETE_CITY':
      state.cities.delete(action.payload);
      break;
    case 'GET_SUCCESS_RESPONSE':
      state.cities.delete(action.payload.city);
      state.cities.set(action.payload.response.name, action.payload.response);
      break;
    case 'GET_ERROR_RESPONSE':
      state.error = action.payload.error;
      state.cities.delete(action.payload.city);
      break;
    default:
      break;
  }
  return state;
}
