import { getSuccessResponse, getErrorResponse } from '../action/CitiesAction';

export function getWeatherByCityName(city) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(getSuccessResponse(json));
            } else {
              let error = json.message;
              dispatch(getErrorResponse(error, city));
            }
          });
      },
      error => dispatch(getErrorResponse(error, city)))
  }
}
