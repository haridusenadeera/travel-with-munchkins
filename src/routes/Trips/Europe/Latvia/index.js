import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const riga1 = [
  {
    src: require('./img/riga-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const riga2 = [
  {
    src: require('./img/riga-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-13.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/riga-15.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Latvia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Latvia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Latvia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Riga <small>(November 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
            We did a weekend trip to this cute small city. The days were already short. We had mostly cloudy weather with scattered rain. The girls loved the city squares. We explored the old town and the surrounding area on foot. There are so many parks in Riga, but we didn't have enough time and the right weather condition to visit all of them. This city must be very pretty in Summer. The kids enjoyed the city strolls and shopping in small handicraft shops.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={riga1} />
          </Col>
          <Col xs="12" lg="6">
            <Carousel items={riga2} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Latvia;
