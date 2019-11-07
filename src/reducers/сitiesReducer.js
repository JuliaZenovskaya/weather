import getAddedCitiesFromStorage from "../localStorage";

const initialState = {
  favorites: getAddedCitiesFromStorage()
};

export default function favReducer(state = initialState, action) {
  state = {
    ...state,
    error: false,
    favorites: new Map(state.favorites)
  };

  switch (action.type) {
    case 'ADD_CITY':
      if (!state.favorites.has(action.payload))
        state.favorites.set(action.payload);
      break;
    case 'DELETE_CITY':
      state.favorites.delete(action.payload);
      break;
    case 'FETCH_ADDED_CITY_SUCCESS':
      state.favorites.delete(action.payload.cityName);
      state.favorites.set(action.payload.response.name, action.payload.response);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload.error;
      state.favorites.delete(action.payload.cityName);
      break;
    default:
      break;
  }
  return state;
}
