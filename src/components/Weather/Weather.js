import React from "react";

class Weather extends React.Component {
  componentDidMount() {
    if (this.props.getWeather) this.props.getWeather();
  }

  render() {
    if (!this.props.weather) {
        return <div>Данные загружаются...</div>
    }

    return (
      <div className="WeatherBlock">
      <div className="City">{this.props.weather.name}</div>
        <div className="leftWeather">
          <img className="Icon" src={`https://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}.png`} />
          <div className="Temp">{Math.round(this.props.weather.main.temp)} °C</div>
          {this.props.onDelete && <button className="button" onClick={this.props.onDelete}>Delete</button>}
        </div>

        <div className="rightWeather">
          <div className="Pressure">Pressure: {this.props.weather.main.pressure} hPa</div>
          <div className="Humidity">Humidity: {this.props.weather.main.humidity}%</div>
          <div className="Clouds">Clouds: {this.props.weather.weather[0].description}</div>
          <div className="Wind">Wind: {this.props.weather.wind.speed} m/s</div>
          <div className="Coords">Coordinates: [{this.props.weather.coord.lon}, {this.props.weather.coord.lat}]</div>
        </div>

      </div>
    );
  }
}

export default Weather
