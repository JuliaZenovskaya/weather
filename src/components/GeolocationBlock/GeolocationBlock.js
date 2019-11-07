import React from 'react';
import { connect } from 'react-redux';
import { setCoords, getErrorResponse } from '../../actions/GeoAction';
import { getWeatherByCoords } from '../../fetch/GetWeatherByCoords';

class GeolocationBlock extends React.Component {
  componentDidMount() {
    this.getGeo();
  }

  render() {
    return (
      <div>
      <div className="head">
        <div className="headText">Погода здесь</div>
        <button className="headButton" onClick={this.getGeo()}>Обновить геолокацию</button>
      </div>
      </div>
    );
  }

  getGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
        this.props.getWeatherByCoords(this.props.coords);
      },
      () => {
        this.props.setCoords({lat: 10, lon: 10});
        this.props.getWeatherByCoords(this.props.coords);
        alert('Permission denied. Load weather from default coordinates');
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

export default connect(mapStateToProps, mapDispatchToProps)(GeolocationBlock);
