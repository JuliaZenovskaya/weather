import getAddedCitiesFromStorage from "../localStorage";

const initialState = {
  cities: getAddedCitiesFromStorage()
};

export default function citiesReducer(state = initialState, action) {
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
    case 'FETCH_ADDED_CITY_SUCCESS':
      state.cities.delete(action.payload.city);
      state.cities.set(action.payload.response.name, action.payload.response);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload.error;
      state.cities.delete(action.payload.city);
      break;
    default:
      break;
  }
  return state;
}
