import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';
// import './styles.css';


const items = [
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

class Andorra extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Andorra</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Andorra</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Andorra la Vella <small>(June 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={items}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We visited Andorra from Barcelona by bus. It's a very clean small city. This tiny nation is known for its ski resorts and duty-free shopping. We just did some sightseeing in the city. We visited this place because Hiroshan really wanted to have a quick peek at Andorra while in Barcelona. I think it's a beautiful place for hiking and winter sports rather than city sightseeing.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Andorra;
