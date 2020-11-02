import React, { Component } from 'react';
import './App.css';

class SearchPage extends Component {
  render() {
    return (
      <div className='searchPage'>
        <marquee id='header'>Global Weather Reporter</marquee>
        <input
          type='text'
          id='input'
          onChange={(e) => this.props.change(e.target.value)}
        ></input>
        <button id='submit' onClick={() => this.props.click()}>
          search
        </button>
        <p id='description'>
          Welcome to the Global Weather Reporter! Enter any city and we'll tell
          you what the weather is like there
        </p>
      </div>
    );
  }
}

export default SearchPage;
