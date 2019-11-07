export function addCity(cityName) {
  return {
    type: 'ADD_CITY',
    payload: cityName
  };
}

export function deleteCity(cityName) {
  return {
    type: 'DELETE_CITY',
    payload: cityName
  };
}

export function fetchAddedCitiesSuccess(response, cityName) {
  return {
    type: 'FETCH_ADDED_CITY_SUCCESS',
    payload: {
      response,
      cityName
    }
  }
}

export function fetchAddedCitiesError(error, cityName) {
  return {
    type: 'FETCH_ADDED_CITY_ERROR',
    payload: {
      error,
      cityName
    }
  }
}
