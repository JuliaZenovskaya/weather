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
    type: 'GET_SUCCESS_RESPONSE',
    payload: {
      response,
      city
    }
  }
}

export function fetchAddedCitiesError(error, city) {
  return {
    type: 'GET_ERROR_RESPONSE',
    payload: {
      error,
      city
    }
  }
}
