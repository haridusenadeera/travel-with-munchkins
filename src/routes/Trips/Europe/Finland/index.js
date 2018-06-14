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
    captionHeader: 'Senate Square (Senaatintori)'
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
    captionHeader: 'Uspenskin Cathedral'
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
    captionHeader: 'Kaivopuisto park'
  },
  {
    src: require('./img/img-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'fried vendace'
  }
];

class Finland extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Finland</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Finland</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Helsinki <small>(September 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              Helsinki is a beautiful city. We had really bad luck with the weather and it was raining when we were there. This is a city well worth visiting in July or early August. September is not really the time to visit Helsinki. Poor planning!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Senate Square (Senaatintori) is a great place for kids to run around and enjoy.
            </p>
            <p className="lead">
              The surrounding area of the Uspenskin Cathedral is so beautiful and our kids had so much fun exploring.
            </p>
            <p className="lead">
              We took a sightseeing boat tour due to the rainy weather and it was boring for the kids.
            </p>
            <p className="lead">
              The walk in Kaivopuisto park was lovely.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Finland;
