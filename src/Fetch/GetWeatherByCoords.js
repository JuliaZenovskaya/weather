import { getSuccessResponse, getErrorResponse } from '../actions/GeoAction';

export function getWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(getSuccessResponse(json));
            } else {
              let error = json.message;
              dispatch(getErrorResponse(error));
            }
          });
      },
      error => dispatch(getErrorResponse(error)))
  }
}
