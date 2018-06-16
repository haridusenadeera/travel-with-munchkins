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
  }
];

class Montenegro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Montenegro</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Montenegro</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4"><small>(October 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We went on a day trip to Montenegro from Dubrovnik by bus and visited two beautiful cities in that tiny nation (Kotor and Budva). We had the worst weather ever. It was raining cats and dogs all day. Mountains were covered with clouds and bays were all foggy. Even so, without any doubt it's an absolutely beautiful place. A must-do when in Dubrovnik. Our guide was very informative. Even though we didn't get to see the most postcard-perfect views, we enjoyed the trip. Kotor to Budva was a scary drive and our guide told us all about the breathtaking views that we could see if it was a sunny day. We simply believed him. The girls made no noise until the hardest part of the drive was over. They heard the guide and didn't want to distract the driver.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Montenegro;
