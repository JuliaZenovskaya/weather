import { getSuccessResponse, getErrorResponse } from '../actions/geoAction';

export function getWeatherByCoords(coords) {
  return function(dispatch) {
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=e972dcd233bab1ebce419c370711921f`)
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
