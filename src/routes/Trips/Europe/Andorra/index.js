import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../../../../components/Carousel';
// import './styles.css';


const items = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    caption: ''
  },
  {
    src: require('./img/img-2.jpeg'),
    altText: '',
    caption: ''
  },
  {
    src: require('./img/img-3.jpeg'),
    altText: '',
    caption: ''
  },
    {
    src: require('./img/img-4.jpeg'),
    altText: '',
    caption: ''
  },
    {
    src: require('./img/img-5.jpeg'),
    altText: '',
    caption: ''
  },
    {
    src: require('./img/img-6.jpeg'),
    altText: '',
    caption: ''
  },
      {
    src: require('./img/img-7.jpeg'),
    altText: '',
    caption: ''
  }
];

class Andorra extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <h1 className="display-3">Andorra</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Andorra la Vella <small>(June 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <p className="lead">
              We visited Andorra from Barcelona by bus. It's a very clean small city. This tiny nation is known for its ski resorts and duty-free shopping. We just did some sightseeing in the city. We visited this place because Hiroshan really wanted to have a quick peek at Andorra while in Barcelona. I think it's a beautiful place for hiking and winter sports rather than city sightseeing.
            </p>
          </Col>
          <Col xs="12" lg="6">
            <Carousel items={items}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Andorra;
