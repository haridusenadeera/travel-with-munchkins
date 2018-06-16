import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import gozo1 from './img/gozo-1.jpeg';
import gozo2 from './img/gozo-2.jpeg';

const gozo = [
  {
    src: require('./img/gozo-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/gozo-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Azure window'
  },
  {
    src: require('./img/food-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const vallettha = [
  {
    src: require('./img/vallettha-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vallettha-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const comino = [
  {
    src: require('./img/comino-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/comino-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/comino-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const baggiba = [
  {
    src: require('./img/baggiba-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/baggiba-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/baggiba-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const madina = [
  {
    src: require('./img/madina-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madina-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Malta extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Malta</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Malta</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4"><small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
            We went to Malta from Bucharest and spent 6 nights in this island nation. It was not long enough to see everything, but we visited the major attractions. It's a beautiful place. The locals we met were very friendly. However, there were so many tourists at every place we visited and some of them were acting a bit rude toward others. We stayed in Buġibba and did day trips to Comino Island, Gozo Island, Valletta, and Mdina. Public transport is very inexpensive and most of the attractions are well connected by buses. We used a tour bus company when in Gozo Island.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              Because we had only one day for Gozo Island, we went directly to Azure window from the ferry terminal. The girls had so much fun at the rough shoreline and tasting salt!
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={gozo1} className="img-fluid" alt="Gozo" />
          </Col>
          <Col xs="12" md="4">
            <img src={gozo2} className="img-fluid" alt="Gozo" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={gozo} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              The kids enjoyed the Xlendi beach and watching fish in shallow water very near the beach. Gozo salad and fresh seafood are must-try foods.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={vallettha} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Vallettha, the capital city of Malta is small, but jam packed with sights. Nikini was busy taking photos and Sayuri loved steps. One can easily spend a couple of days exploring this historical city.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={comino} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We took a boat ferry from Cirkewwa to the Comino Island and spent more than 6 hours in the blue lagoon. The girls had a blast!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={baggiba} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Baggiba is also a very nice area with lots of hotels and restaurants.
            </p>
            <p className="lead">
              The girls really liked olive beef. At a restaurant Nikini ordered a traditional drink and got Kinnie, a Maltese soft drink. She loved it.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={madina} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Our day trip to Mdina was fantastic. Mdina was the old capital of Malta. The girls enjoyed walking the narrow streets and passages of Mdina.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Malta;
