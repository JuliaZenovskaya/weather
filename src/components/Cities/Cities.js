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
          <input type="text" name="cityName" required />
          <input type="submit" value="Добавить"/>
        </form>
      </div>
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="forecasts">
          {
            [...this.props.favorites.entries()].map((entry) => {
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
    this.props.addCity(e.currentTarget.elements.cityName.value);
  }
}


function mapStateToProps(state) {
  return {
    favorites: state.fav.favorites,
    error: state.fav.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (cityName) => {
      dispatch(addCity(cityName));
    },

    deleteCity: (cityName) => {
      dispatch(deleteCity(cityName));
    },

    getWeatherByCity: (cityName) => {
      dispatch(getWeatherByCity(cityName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
