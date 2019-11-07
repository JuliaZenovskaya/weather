import React from 'react';
import Weather from '../Weather/Weather'
import Cities from '../Cities/Cities'
import { connect } from "react-redux";
import { setCoords, getErrorResponse } from '../../actions/geoAction';
import { getWeatherByCoords } from '../../fetch/getWeatherByCoords';

class App extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>Погода здесь</div>
          <button className="headerButton" onClick={this.getGeolocation}>Обновить местоположение</button>
        </div>
        {this.props.forecast && <Weather weather={this.props.forecast}/>}
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        {!this.props.forecast && !this.props.error && <div>Загрузка...</div>}
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
        this.props.setCoords({lat: 51.51, lon: -0.13});
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
  forecast: state.geo.forecast,
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
