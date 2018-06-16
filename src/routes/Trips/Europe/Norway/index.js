import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

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
    captionHeader: 'Akershus Castle and Fortress'
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
  }
];

class Norway extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Norway</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Norway</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Oslo <small>(March 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              One of the most expensive cities in the world! It's a modern city with some dull Architecture in my opinion. We visited Oslo on our way to Stockholm on a late winter day (Berlin-Oslo-Stockholm-Berlin). It had been raining during our entire stay. Yet, we managed to see a little bit of the city and Akershus. This city is very expensive and everything costs a lot. A basic hotel room that could accommodate our family was over $250 per night. Locals are incredibly friendly, helpful and almost everyone speaks English. Credit cards are accepted almost everywhere. The kids enjoyed the Akershus area.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Norway;
