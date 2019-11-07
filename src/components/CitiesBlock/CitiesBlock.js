import React from 'react';
import { connect } from 'react-redux';
import { addCity, deleteCity } from '../../actions/CitiesAction';
import { getWeatherByName } from '../../fetch/GetWeatherByName';
import Weather from '../Weather/Weather';

class CitiesBlock extends React.Component {
  render() {
    return (
    <div>
      <div className="CitiesPanel">
        <div className="CitiesText">Избранное</div>
        <form className="add_city" onSubmit={(e) => this.addNewCity(e)}>
          <input className="CitiesInput" type="text" name="cityName" required />
          <input className="CitiesButton" type="submit" value="Добавить"/>
        </form>
      </div>

      <div className="favorites">
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="forecasts">
          {
            [...this.props.cities.entries()].map((entry) => {
              return (
                <Weather
                  key={entry[0]}
                  getWeather={() => this.props.getWeatherByName(entry[0])}
                  onDelete={() => this.props.deleteCity(entry[0])}
                  weather={entry[1]}/>
              );
            })
          }
          </div>
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
    cities: state.cities.cities,
    error: state.cities.error
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

    getWeatherByName: (city) => {
      dispatch(getWeatherByName(city));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesBlock);
