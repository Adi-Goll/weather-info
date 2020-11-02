import React, { Component } from 'react';
import './App.css';

class CityInfo extends Component {
  render() {
    return (
      <div className='info-page'>
        <p id=''>City Name: {this.props.info.name}</p>
        <p>Current Temperature: {this.props.info.temperature}</p>
        <p>Feels Like: {this.props.info.feelsLike}</p>
        <p>Weather Description: {this.props.info.description}</p>
      </div>
    );
  }
}

export default CityInfo;
