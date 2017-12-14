import React, { Component } from 'react';
import WorldMap from './WorldMap.js';
import './styles.css';

class Home extends Component {
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
      <div className="home">
        <WorldMap parentCallback={this.continentClicked} />
        <h1>{this.state.activeContinent}</h1>
      </div>
    );
  }
}

export default Home;
