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
    captionHeader: ''
  },
  {
    src: require('./img/img-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Liechtenstein extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Liechtenstein</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Liechtenstein</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Vaduz <small>(August 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Vaduz is the capital of one of the smallest countries in the world, Liechtenstein. It is a constitutional monarchy headed by the Prince of Liechtenstein. When we visited Vaduz, it was raining and couldn't see the Alps because of the clouds and the sights were not so gorgeous as we have seen in photos. Vaduz is very small and the walk to the Vaduz Castle is really nice. The views from the castle are known to be breathtaking, but we were unlucky with the rain and we couldn't see the mountains at all. Nikini enjoyed the uphill and downhill walks so much! Sayuri started collecting pretty stones when we were up on the hill.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Liechtenstein;
