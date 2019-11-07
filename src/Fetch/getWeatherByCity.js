import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from '../actions/сitiesAction';

export function getWeatherByCity(cityName) {
 return function(dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchAddedCitiesSuccess(json, cityName));
            } else {
              let error = json.message;
              dispatch(fetchAddedCitiesError(error, cityName));
            }
          });
      },
      error => dispatch(fetchAddedCitiesError(error, cityName)))
  }
}
