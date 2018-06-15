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
  }
];

class Greece extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Greece</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Greece</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Athens <small>(January 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            Our trip to Athens was very short. We spent only three nights in this one of the world's oldest cities. Our kids are still too young to comprehend the significance of ancient greek civilization. However, Nikini understood that the ancient ruins are some evidence of the historical presence of very old "castles". The girls had so much fun walking in the historical area. Our visit to the Acropolis Museum was very nice, but the kids got bored in less than an hour. We took some city trams to not so popular neighborhoods to get a feeling of the city life. The girls loved eating Greek food. Locals were amazingly friendly. They love children. At a restaurant, Nikini noted a waiter smoking inside while there was a non-smoking sign posted on the main door at the entrance. She explained that to our waiter and he complimented her good observation with some free ice cream. She was very proud!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Greece;
