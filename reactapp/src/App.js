import React, { Component } from 'react';
import './App.css';
import SearchPage from './SearchPage';
import CityInfo from './CityInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submitted: false,
      info: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(city) {
    this.setState({
      ...this.state,
      input: city,
    });
  }

  handleClick() {
    fetch(`http://localhost:5000/?city=${this.state.input}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          submitted: true,
          info: data,
        });
      });
  }

  render() {
    if (this.state.submitted === false) {
      return <SearchPage change={this.handleChange} click={this.handleClick} />;
    } else {
      return <CityInfo info={this.state.info} />;
    }
  }
}

export default App;
