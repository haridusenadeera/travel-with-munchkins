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

class Sweden extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Sweden</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Sweden</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Stockholm <small>(March 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Another expensive Scandinavian city! We visited Stockholm in late-winter and the weather was better than what we had expected. However, it was not the ideal time to visit this city. We did it because we wanted to visit some good friends (who used to be our travel partners a few years ago) before they left Stockholm. We had some great times with catching up and also an overview of the city. Our friends made sure to show us the best of Stockholm during our short stay. This is a city well worth visiting in summer! We carried the double stroller on this trip too. The double stroller came in handy this time because Nikini was sick on the second day in Stockholm.
            </p>
          </Col>
          <Col xs="12">
            <p className="lead">
              We spent an entire day at Skansen Open-Air Museum. The girls had so much fun with their new friends.
            </p>
            <p className="lead">
              There is so much to see in the old town. We spent another day exploring the city on foot.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sweden;
