import React from "react";

class WeatherData extends React.Component {
  componentDidMount() {
    if (this.props.getWeather) this.props.getWeather();
  }

  render() {
    if (!this.props.weather) {
        return <div>Загрузка...</div>
    }

    return (
      <div>
      <div>{this.props.weather.name}</div>
      {this.props.onDelete && <button className="button" onClick={this.props.onDelete}>Удалить</button>}
      <img src={`https://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}.png`} />
      <div>{Math.round(this.props.weather.main.temp)} °C</div>
      <div>Давление: {this.props.weather.main.pressure} hPa</div>
      <div>Влажность: {this.props.weather.main.humidity}%</div>
      <div>Облачность: {this.props.weather.weather[0].description}</div>
      <div>Ветер: {this.props.weather.wind.speed} м/с</div>
      <div>Координаты: [{this.props.weather.coord.lon}, {this.props.weather.coord.lat}]</div>
      </div>
    );
  }
}

export default WeatherData
