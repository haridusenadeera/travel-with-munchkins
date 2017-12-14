import React, { Component } from 'react';
import WorldMap from './WorldMap.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeContinent: ''};
    this.continentClicked = this.continentClicked.bind(this)
  }

  continentClicked(continent) {
    this.setState({
      activeContinent: continent
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WorldMap parentCallback={this.continentClicked} />
        <h1>{this.state.activeContinent}</h1>
      </div>
    );
  }
}

export default App;
