import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import castle1 from './img/castle-1.jpeg';

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
  }
];

class Slovakia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Slovakia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Slovakia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Bratislava <small>(June 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Bratislava is a charming small city with a tiny old town. It's well worth a visit when in Vienna or Budapest. We visited this city in a late spring on our way back home from Budapest by train and strolled along narrow pedestrian streets admiring the beauty of this cute city. Nikini was so busy taking photos. Whenever the kids saw something interesting and unique, we stopped and let them experience. The city has a very relaxing vibe.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6">
            <img src={castle1} className="img-fluid" alt="Bratislava Castle" />
          </Col>
          <Col xs="12" md="6">
            <p className="lead">
              Bratislava Castle grounds (the castle is located on top of a hill) -- A great place to enjoy the beautiful views of the city over the Danube.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slovakia;
