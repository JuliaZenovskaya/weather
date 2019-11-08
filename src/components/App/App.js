import React from 'react';
import Weather from '../Weather/Weather'
import Cities from '../Cities/Cities'
import { connect } from "react-redux";
import { setCoords, getErrorResponse } from '../../actions/geoAction';
import { getWeatherByCoords } from '../../fetch/getWeatherByCoords';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className='header_text'>Погода здесь</div>
          <button className='header_button' onClick={this.getGeolocation.bind(this)}>Обновить местоположение</button>
        </div>
        <div className='geo_weather'>
        {this.props.weather && <Weather weather={this.props.weather}/>}
        {this.props.error && <div className='error'>Error: {this.props.error}</div>}
        {!this.props.weather && !this.props.error && <div>Загрузка...</div>}
        </div>
        <Cities/>
      </div>
    );
  }

   getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
        this.props.getWeatherByCoords(this.props.coords);
      },
      () => {
        this.props.setCoords({lat: 59.94, lon: 30.32});
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
