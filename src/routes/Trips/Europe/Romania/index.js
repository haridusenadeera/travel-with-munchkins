import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import sayuri1 from './img/sayuri-1.jpeg';
import girls1 from './img/girls-1.jpeg';

import food1 from './img/food-1.jpeg';
import church1 from './img/church-1.jpeg';

import village1 from './img/village-1.jpeg';
import village2 from './img/village-2.jpeg';
import village3 from './img/village-3.jpeg';

import drinks1 from './img/drinks-1.jpeg';
import mountain1 from './img/mountain-1.jpeg';

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
  },
  {
    src: require('./img/img-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-10.jpeg'),
    altText: '',
    captionText: 'First time seeing a hedgehog and a small chicken farm at the village museum.',
    captionHeader: ''
  },
  {
    src: require('./img/img-11.jpeg'),
    altText: '',
    captionText: 'Sayuri helped Hiroshan find our way!',
    captionHeader: ''
  },
  {
    src: require('./img/img-12.jpeg'),
    altText: '',
    captionText: 'The girls loved eating "Ciorba” (sour soups) and drinking freshly made lemonade.',
    captionHeader: ''
  }
];

const brasov = [
  {
    src: require('./img/brasov-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-2.jpeg'),
    altText: '',
    captionText: 'Very cute city streets and squares',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/brasov-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Romania extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Romania</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Romania</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Bucharest <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We are glad we visited Bucharest and to know why it was nicknamed "Little Paris". Bucharest pleasantly made us surprised. It's a vibrant city. We allocated only two days to Bucharest and wasted a full day at the hotel because of the torrential rain. That left us only one full day for sightseeing and honestly it was not enough at all. We explored the city mostly on foot. We walked to the Palace of Parliament and then to the Village Museum. The Palace of Parliament is gigantic -- It's the second-largest building in the world. We strolled along Victory Avenue (Calea Victoriei), which is one of the oldest and one of the most beautiful streets in Bucharest. Most of the iconic architectural buildings are located on this street. It is fair to say I fell love with this city mainly because of the people of Bucharest. The people we met were amazingly friendly and helpful.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <img src={sayuri1} className="img-fluid" alt="sayuri" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              Sayuri said "Hey, look, there's a mini magic fountain". She still remembers the magic fountain in Barcelona!
            </p>
            <p className="lead">
              I loved the contrast of the streets.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={girls1} className="img-fluid" alt="girls" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              They made many people laugh at the statue!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <img src={food1} className="img-fluid" alt="food" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              Our favorite Romanian food is: Stuffed cabbage rolls and cornmeal porridge (sarmale cu mamaliguta)
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={church1} className="img-fluid" alt="church" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              Beautiful cute little churches are scattered everywhere in and around Bucharest
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              Village museum is a must visit when in Bucharest with children. It has a very relaxing atmosphere. The kids had so much fun wandering around in the museum.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={village1} className="img-fluid" alt="village" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={village2} className="img-fluid" alt="village" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={village3} className="img-fluid" alt="village" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Brașov <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={brasov} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We were quite unlucky with the weather this time and gave up visiting Peles Castle and Bran Castle (also known as Dracula Castle) due to bad weather. We reserved the best day available to visit beautiful Brașov in Transylvania (a province in the central part of Romania). We took an early morning express train to Brasov from Bucharest. The train ride was very nice and comfortable. Then we took a bus to the city and explored the city on foot.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              We wanted to take the cable car to the peak of Tampa Mountain, but it was not in operation that day. The girls were too tired to do the uphill hike.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={mountain1} className="img-fluid" alt="Tampa Mountain" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              The girls loved freshly made lemonade and bread spreads!
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={drinks1} className="img-fluid" alt="drinks and snacks" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Romania;
