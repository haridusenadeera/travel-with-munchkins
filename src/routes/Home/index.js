import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import WorldMap from './WorldMap.js';
import trips from '../../country-list';
import './styles.css';

import family from './img/family.jpeg';
import nikiniMasquerade from './img/nikini-masquerade.jpeg';
import hiroSayuri from './img/hiroshan-sayuri.jpeg';
import nikiniSayuri from './img/nikini-sayuri.jpeg';
import sayuri from './img/sayuri.jpeg';
import nikini from './img/nikini.jpeg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {activeContinent: 'North_America', popoverOpen: false};
    this.continentClicked = this.continentClicked.bind(this);
    this.toggle = this.toggle.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  continentClicked(continent) {
    if(continent === 'none'){
      this.setState({
        popoverOpen: false
      });
    } else {
      this.setState({
        popoverOpen: true,
        activeContinent: continent
      });
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  renderPopover() {
    const { activeContinent } = this.state;
    const continentName = activeContinent.replace("_", " "); // remove underscore from id name
    const countryList = trips[activeContinent].map((name) => {
      return <li key={name}>{name}</li>;
    });
    return (
      <Popover placement="bottom" isOpen={this.state.popoverOpen} target={activeContinent}>
        <PopoverHeader>{continentName}</PopoverHeader>
        <PopoverBody>
          <ul>{countryList}</ul>
        </PopoverBody>
      </Popover>
    );
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <WorldMap parentCallback={this.continentClicked} />
            { this.renderPopover() }
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <h1 className="display-4">International travel with children</h1>
              <p className="lead">
                Thanks for visiting Travelwithmunchkins! My husband and I think that traveling with children is a must and decided to share our experience with other families who like to explore the world with kids. You might find some best travel tips that you need for international travel with children on a budget.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid rounded" src={family} alt="family" />
          </div>
          <div className="col-md-8">
            <p>
              When we started writing our family travel journal we realized that we have learned so much about comfortably traveling with kids. Usually, we don't visit museums, zoos, fun parks and aquariums. However, those are recommended by many travelers for kids. Our trips are usually short and we have only a few days to explore. So, we skip places such as zoos and museums and find alternatives to keep them entertained.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <p>
              Our travels are a bit unique because we don't plan our trips around kids and yet try our best to keep them entertained. So, we thought our travel experience might be helpful for parents like us who want to explore the world with young kids.
            </p>
            <p>
              We temporary moved to Germany from the USA in early 2014 and decided to use this opportunity to explore Europe as much as we can. Most of the trips you see in our diary are within Europe. However, you will also see one or two trips to other continents. 
            </p>
          </div>
          <div className="col-md-3">
            <img className="img-fluid img-thumbnail" src={nikiniMasquerade} alt="nikini-masquerade" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <img className="img-fluid rounded" src={hiroSayuri} alt="hiroshan and sayuri" />
          </div>
          <div className="col-md-6 col-lg-3">
            <img className="img-fluid rounded" src={nikini} alt="nikini" />
          </div>
          <div className="col-md-12 col-lg-6">
            <p className="text-info lead">
              We travel on a budget when we travel within Europe, but our travels are comfortable. We travel light. We explore new places with kids and enjoy our times together. Our girls already love traveling! When we started our travels in Europe, Nikini was 4 yrs and Sayuri was 2 yrs.   
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              It's certainly challenging to travel with kids especially when they are very young. However, they get used to it when you start early.  It's fun to travel with kids. You get to see their exploding knowledge about the world. 
            </p>
            <p>
              We don't use a professional camera. Our photos are either taken with a smartphone or Nikini's kids' friendly small camera.
            </p>
            <blockquote className="blockquote">
              <p className="mb-0">You don't have to be rich to travel well.</p>
              <footer className="blockquote-footer">Eugene Fodor</footer>
            </blockquote>
          </div>
          <div className="col-md-3">
            <img className="img-fluid rounded" src={nikiniSayuri} alt="sisters playing" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid rounded" src={sayuri} alt="sayuri" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
