import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCoords, getErrorResponse } from '../../actions/GeoAction';
import { getWeatherByCoords } from '../../fetch/GetWeatherByCoords';
import Weather from '../Weather/Weather';

class App extends React.Component {
  componentDidMount() {
    this.getGeo();
  }

  render() {
    return (
      <div className="App">
      <div className="head">
        <div className="headText">Погода здесь</div>
        <button className="headButton" onClick={this.getGeo()}>Обновить геолокацию</button>
      </div>
      {this.props.weather && <Weather weather={this.props.weather}/>}
      {this.props.error && <div className="error">Error: {this.props.error}</div>}
      {!this.props.weather && !this.props.error && <div>Данные загружаются...</div>}
      </div>
    );
  }

  getGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        this.props.setCoords(coords);
        this.props.getWeatherByCoords(this.props.coords);
      },
      () => {
        const coords = {
          lat: 10,
          lon: 10
        }
        this.props.setCoords(coords);
        this.props.getWeatherByCoords(this.props.coords);
      });
    } else {
      this.props.getErrorResponse('your browser does not support geolocation');
    }
  }
}


function mapStateToProps(state) {
return {
  coords: state.geo.coords,
  weather: state.geo.weather,
  error: state.geo.error
};
}


function mapDispatchToProps(dispatch) {
return {
  setCoords: (coords) => {
    dispatch(setCoords(coords));
  },

  getWeatherByCoords: (coords) => {
    dispatch(getWeatherByCoords(coords));
  },

  getErrorResponse: (error) => {
    dispatch(getErrorResponse(error));
  }
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
