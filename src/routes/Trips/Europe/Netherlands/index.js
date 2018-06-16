import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import food1 from './img/food-1.jpeg';
import food2 from './img/food-2.jpeg';

const img = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-3.jpeg'),
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
    src: require('./img/img-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Anne Frank House'
  },
  {
    src: require('./img/img-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Netherlands extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Netherlands</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Netherlands</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Amsterdam <small>(April 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            A beautiful city full of colorful buildings, bridges and canals. Dutches are amazingly friendly and helpful. The sight of the Anne Frank House made me very emotional. Bikers are everywhere and they ride fast. Beware! We explored the city on foot. The girls didn't like the boat tour at all and gave us a really hard time! There were so many other fun things to do for the girls. At the end of our two days short stay in Amsterdam, we headed to Brussels by train.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              We found a fantastic Chongqing restaurant and ate some really hot food. The girls had "dim sum".
            </p>
            <p className="lead">
              Also, we all loved Rijsttafel (rice table) too.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={food1} className="img-fluid" alt="food" />
          </Col>
          <Col xs="12" md="4">
            <img src={food2} className="img-fluid" alt="food" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Netherlands;
