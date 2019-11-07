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

export function getSuccessResponse(response, city) {
  return {
    type: 'GET_SUCCESS_RESPONSE',
    payload: {
      response,
      city
    }
  }
}

export function getErrorResponse(error, city) {
  return {
    type: 'GET_ERROR_RESPONSE',
    payload: {
      error,
      city
    }
  }
}
