export function addCity(city) {
  return {
    type: 'ADD_CITY',
    payload: city
  };
}

export function deleteCity(city) {
  return {
    type: 'DELETE_CITY',
    payload: city
  };
}

export function fetchAddedCitiesSuccess(response, city) {
  return {
    type: 'FETCH_ADDED_CITY_SUCCESS',
    payload: {
      response,
      city
    }
  }
}

export function fetchAddedCitiesError(error, city) {
  return {
    type: 'FETCH_ADDED_CITY_ERROR',
    payload: {
      error,
      city
    }
  }
}
