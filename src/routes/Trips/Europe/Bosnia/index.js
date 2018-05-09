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
    captionHeader: ''
  },
  {
    src: require('./img/img-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Bosnia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Bosnia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Bosnia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Mostar <small>(October 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={images}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            We did a day trip from Dubrovnik to Mostar in Bosnia on a rainy day!  It took about 3 hrs by bus and we started the journey around 7:30 am. It's a beautiful small city in Bosnia and Herzegovina, a war-torn country. Scars of the recent war can be seen everywhere. The current unemployment rate is more than 40%. It was pouring rain in Mostar when we toured the city. Well worth the visit, though! Nikini enjoyed walking in the rain. Sayuri didn't want to get wet and we had to carry her.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bosnia;
