import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import img2 from './img/img-2.jpeg';
import img3 from './img/img-3.jpeg';
import img5 from './img/img-5.jpeg';
import img6 from './img/img-6.jpeg';

const img = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Poland extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Poland</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Poland</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Wroclaw <small>(April 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              What a beautiful cute kids' friendly city! Polish people are really friendly and their food is delicious. It's a relatively inexpensive European city. We did a weekend trip to Wroclaw in early spring-time. It was a 3.5-hour long journey by train. We had perfect weather to stroll the city. No more double strollers!!!! We carried only a single stroller and the girls took turns. That was a big achievement. Nikini walked at least 5 km (little over 3 miles) each day during our stay in Wroclaw.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <img src={img2} className="img-fluid" alt="Market Square" />
          </Col>
          <Col xs="12" md="4">
            <img src={img3} className="img-fluid" alt="Market Square" />
          </Col>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Market Square:</strong> We spent most of our time walking and exploring the Market Square. It's full of history, good restaurants, street artists and entertainers. Everything really happens in this square. The kids just loved running around freely.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              <strong>Wroclaw Dwarfs:</strong> The biggest hit for kids was  Wroclaw dwarfs that are scattered in and around the city. They kept the kids so busy.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={img5} className="img-fluid" alt="Wroclaw Dwarfs" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              <strong>Cathedral Island:</strong> Cathedral Island is a lovely place. We spent a one-half day wandering in this beautiful Island.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={img6} className="img-fluid" alt="Cathedral Island" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Poland;
