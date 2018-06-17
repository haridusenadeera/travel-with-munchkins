import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import castle1 from './img/castle-1.jpeg';
import castle2 from './img/castle-2.jpeg';
import castle3 from './img/castle-3.jpeg';

import island1 from './img/island-1.jpeg';
import island2 from './img/island-2.jpeg';

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

const ljubljana = [
  {
    src: require('./img/ljubljana-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/ljubljana-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Slovenia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Slovenia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Slovenia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Lake Bled and Ljubljana <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We went on a road trip from Dresden to Slovenia. It was amazing. Packing was a piece of cake and the drive was easy. The girls thoroughly enjoyed the drive. We stayed in Bled and made a day trip to Ljubljana which is less than an hour from Bled. We spend a lot of time exploring the surrounding area of the gorgeous lake Bled. The walk around the lake is so relaxing. The girls had so much fun watching swans, ducks, and wildflowers. The Bled island is a must visit.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="3">
            <p className="lead">
              We hiked straight up to the Bled castle and the girls made it in a breeze. The walk back down was just super easy. The castle looks amazingly beautiful at sunset.
            </p>
          </Col>
          <Col xs="12" md="3">
            <img src={castle1} className="img-fluid" alt="Bled castle" />
          </Col>
          <Col xs="12" md="3">
            <img src={castle2} className="img-fluid" alt="Bled castle" />
          </Col>
          <Col xs="12" md="3">
            <img src={castle3} className="img-fluid" alt="Bled castle" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              The Bled island is quite beautiful and the boat ride to the island was very good. The church is not extraordinary, but the girls loved ringing the church bell and the belltower.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={island1} className="img-fluid" alt="Bled island" />
          </Col>
          <Col xs="12" md="4">
            <img src={island2} className="img-fluid" alt="Bled island" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={ljubljana} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Ljubljana is Slovenia's capital and one of Europe's greenest capitals (Green Capital of Europe - 2016). Ljubljana’s old town is beautiful and very active. We took the short funicular ride to go to Ljubljana castle. It's also great for views of the city. We went up the steep 200 steps to the tower for the best views of the city.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Slovenia;
