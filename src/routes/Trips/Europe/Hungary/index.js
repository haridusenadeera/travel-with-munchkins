import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import img4 from './img/img-4.jpeg';
import img7 from './img/img-7.jpeg';
import img5 from './img/img-5.jpeg';
import img9 from './img/img-9.jpeg';
import img12 from './img/img-12.jpeg';

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
    src: require('./img/img-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-8.jpeg'),
    altText: '',
    captionText: '2014 Football world cup',
    captionHeader: ''
  },
  {
    src: require('./img/img-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-13.jpeg'),
    altText: '',
    captionText: 'Kids\' drinks for the girls.',
    captionHeader: 'Dunabe cocktail cruise.'
  },
  {
    src: require('./img/img-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Hungary extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Hungary</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Hungary</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Budapest <small>(June 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            Budapest is a beautiful Eastern European city. We visited this city in late spring by train (almost 8-hours by train) and spent days exploring the city and admiring the beauty of streets and neighborhoods. People in Budapest are friendly to tourists and welcoming. Hungarian food is so delicious and even the girls ate really well. We usually don't order food from Kids' menu so that kids also can get a feel of different food. They always find something fascinating for them to eat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              <strong>Our favorite place in Budapest:</strong> Buda castle. We spent hours just enjoying the views of Pest and Danube from up on Buda Castle.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="3">
            <img src={img7} alt="Buda castle" className="img-fluid" />
          </Col>
          <Col xs="12" md="4">
            <img src={img4} alt="Buda castle" className="img-fluid"/>
          </Col>
          <Col xs="12" md="4">
            <img src={img5} alt="Buda castle" className="img-fluid" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              We took the girls to Aquapark and they enjoyed it very much. This place is located a bit far from the from the city.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={img9} alt="Buda castle" className="img-fluid" />
          </Col>
          <Col xs="12" md="4">
            <img src={img12} alt="Buda castle" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hungary;
