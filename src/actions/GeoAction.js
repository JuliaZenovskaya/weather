export function setCoords(coords) {
  return {
    type: 'SET_COORDS',
    payload: coords
  }
}

export function getSuccessResponse(response) {
  return {
    type: 'GET_SUCCESS_RESPONSE',
    payload: response
  }
}

export function getErrorResponse(error) {
  return {
    type: 'GET_ERROR_RESPONSE',
    payload: error
  }
}
