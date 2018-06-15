import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
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
  },
  {
    src: require('./img/img-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class France extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>France</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">France</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Paris <small>(August 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              Everyone knows about Paris. It's amazing! Who says it's not a kid-friendly place? Paris is a great place to travel with kids and have fun. There are so many things to see and you need weeks to explore this beautiful city. We visited Paris in mid-August and just strolled in the city this time to get an overview. We flew to Basel/Mulhouse from Dresden and then took the French fast train, TGV to Paris (it went at 300 km/hour) and followed the same route back so that we got a day to see Basel. TGV train takes only 3 hours to go from Basel to Paris. This is one of the cities that we are going to visit again!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Carousel items={img} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12">
            <Alert color="info">
              <ul>
                <li>
                  We spent hours at Jardin des Tuileries, Louvre and Eiffel Tower. The children had so much fun!
                </li>
                <li>
                  Everyone enjoyed walking along lovely streets and exploring in cute neighbourhoods.
                </li>
                <li>
                  The girls were warmly welcome in restaurants. They loved eating french food - who doesn't like french food anyway. A cafe made lemonade just for Nikini (She ordered some lemonade and it was not on their menu). How sweet! Kids loved french pastries so much. Macaroon was a big hit.
                </li>
                <li>
                  We took a river cruise and everyone enjoyed it initially. However, the kids got bored after some time.
                </li>
              </ul>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default France;
