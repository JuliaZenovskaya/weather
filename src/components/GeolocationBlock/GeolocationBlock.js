import React from 'react';

class Geolocation extends React.Component {
  componentDidMount() {
    this.props.getGeo();
  }

  render() {
    return (
      <div>
      <div className="head">
        <div className="headText">Погода здесь</div>
        <button className="headButton" onClick={this.props.getGeo}>Обновить геолокацию</button>
      </div>
      </div>
    );
  }

}

export default Geolocation;
