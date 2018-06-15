import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import square1 from './img/square-1.jpeg';
import square2 from './img/square-2.jpeg';

import food1 from './img/food-1.jpeg';
import food2 from './img/food-2.jpeg';

import explore1 from './img/explore-1.jpeg';
import explore2 from './img/explore-2.jpeg';

import nikini1 from './img/nikini-1.jpeg';
import nikini2 from './img/nikini-2.jpeg';
import nikini3 from './img/nikini-3.jpeg';

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
    captionText: 'The girls loved the constitution bridge.',
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
];


const rome1 = [
  {
    src: require('./img/rome-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const rome2 = [
  {
    src: require('./img/rome-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-13.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-15.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-16.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-17.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/rome-18.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const milan = [
  {
    src: require('./img/milan-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/milan-9.jpeg'),
    altText: '',
    captionText: 'Creamy risottos is a must eat when in Milan',
    captionHeader: ''
  }
];

class Italy extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Italy</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Italy</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Venice <small>(October 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            A must visit! Venice is a great destination to go with kids. Parents must be very careful when traveling with young kids though because of unprotected channel edges. We were in Venice in early October. Instead of gondola rides, we took passenger ferries along the Grand canal to explore Venice from the water. The kids didn't enjoy it because the ferries were so crowded. The girls loved strolling in the city than the ferry rides. We went inside a few beautiful churches and relaxed and rested. The girls really love churches and take hundreds of photos.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>St. Mark's Square:</strong> We spent hours here, so many things going on at any time of the day and crowded. We stayed at a bed and breakfast very close to St. Mark's Square and it saved us a lot of time.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={square1} className="img-fluid" alt="St. Mark's Square" />
          </Col>
          <Col xs="12" md="4">
            <img src={square2} className="img-fluid" alt="St. Mark's Square" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              Venetian food was nice, but I think Venice is not a good destination for food.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={food1} className="img-fluid" alt="Food" />
          </Col>
          <Col xs="12" md="4">
            <img src={food2} className="img-fluid" alt="Food" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              Exploring Venice on foot was so entertaining for the kids. Nikini loved eating fresh fruits from street vendors.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={explore1} className="img-fluid" alt="Exploring" />
          </Col>
          <Col xs="12" md="4">
            <img src={explore2} className="img-fluid" alt="Exploring" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Rome <small>(February 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <strong>(Yeay! the girls are 5 and 3 now)</strong>
            <p className="lead">
              What a wonderful place! The whole city is a big museum. There are historical monuments everywhere in the city.  Locals are amazingly friendly and helpful. They love children and enjoy the presence of kids around them. Italian food is just out of this world delicious. Even Nikini said, “this city has the best food in the whole wide world.” Sayuri ordered pasta carbonara for lunch and dinner many times and finished regular sized servings a few times. Nikini loved eating pasta and Roman pizza. Because we visited Rome in February, the restaurants were not so crowded and the girls received some extra special treatments -- chefs came out to say hi; a waiter changed TV to a kids’ program.  We stayed in a hotel room with a great view of the Roman Forum at a fraction of their spring/summer rates.  The days were mostly sunny! The girls enjoyed our walk from Colosseum to Vatican and back! Rome is a great city to explore on foot with children. The kids especially Nikini never got tired of exploring Rome. I think good food and friendly people can do magic!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={rome1} />
          </Col>
          <Col xs="12" lg="6">
            <Carousel items={rome2} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Milan <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={milan} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Close family members visited us in Dresden and we took them to show some beautiful places in Europe that we hadn't been to before. We wanted to fly directly from Berlin to Bucharest, but the tickets were so expensive. So we traveled via Milan. We stayed only two nights in Milan and explored popular areas of the city on foot. It's a nice city to stop by and spend a day. The Milan Cathedral (Duomo di Milano) and the surrounding area is very active and fun. This cathedral is the largest cathedral in Italy.  The girls had so much fun wandering in Sforzesco Castle and castle grounds.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              Nikini loves taking photos of flowers, churches and street arts/artists. She approached the street artist who painted the above paintings and complimented him for his great work! Picking rocks is Sayuri's thing!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <img src={nikini1} className="img-fluid" alt="nikini" />
          </Col>
          <Col xs="12" md="4">
            <img src={nikini2} className="img-fluid" alt="nikini" />
          </Col>
          <Col xs="12" md="4">
            <img src={nikini3} className="img-fluid" alt="nikini and sayuri" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Italy;
