import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const images = [
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
  }
];


class USA extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/north-america">North America</Link></BreadcrumbItem>
              <BreadcrumbItem active>USA</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">USA</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Chicago, Midland and Detroit <small>(December 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={images}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            We went on vacation for three weeks in the USA. It was mainly to visit friends and family and not meant for sightseeing. The girls had a fantastic time at Chicago planetarium, though. I think it's an amazing place to go with young kids.
            </p>
            <Alert color="info">The girls made us so surprised by behaving so incredibly well in the long-haul flights (Dresden to Chicago and back). Sayuri slept for hours. Nikini concluded long-haul flights as boring. However, she said it was ok because she got, at least, three things to do: 1) watch TV; 2) eat and 3) sleep. It took about two days for the girls to recover from jet-lag (both ways).
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default USA;
