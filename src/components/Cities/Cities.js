import React from "react";
import { connect } from "react-redux";
import Weather from '../Weather/Weather';
import { addCity, deleteCity } from '../../actions/сitiesAction';
import { getWeatherByCity } from '../../fetch/getWeatherByCity';


class Cities extends React.Component {
  render() {
    return (
      <div>
      <div>
        <div>Избраное</div>
        <form onSubmit={(e) => this.addNewCity(e)}>
          <input type="text" name="city" required />
          <input type="submit" value="Добавить"/>
        </form>
      </div>
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="forecasts">
          {
            [...this.props.cities.entries()].map((entry) => {
              return (
                <Weather
                  key={entry[0]}
                  getWeather={() => this.props.getWeatherByCity(entry[0])}
                  onDelete={() => this.props.deleteCity(entry[0])}
                  weather={entry[1]}/>
              );
            })
          }
        </div>
      </div>
    );
  }

  addNewCity(e) {
    e.preventDefault();
    this.props.addCity(e.currentTarget.elements.city.value);
  }
}


function mapStateToProps(state) {
  return {
    cities: state.fav_cities.cities,
    error: state.fav_cities.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => {
      dispatch(addCity(city));
    },

    deleteCity: (city) => {
      dispatch(deleteCity(city));
    },

    getWeatherByCity: (city) => {
      dispatch(getWeatherByCity(city));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
