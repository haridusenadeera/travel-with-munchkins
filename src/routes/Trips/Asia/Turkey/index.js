import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import costumes1 from './img/costumes-1.jpeg';
import costumes2 from './img/costumes-2.jpeg';

import island1 from './img/island-1.jpeg';
import island2 from './img/island-2.jpeg';

import hagia1 from './img/hagia-1.jpeg';
import hagia2 from './img/hagia-2.jpeg';

import spice1 from './img/spice-1.jpeg';
import spice2 from './img/spice-2.jpeg';

import food1 from './img/food-1.jpeg';
import food2 from './img/food-2.jpeg';

import eu1 from './img/eu-1.jpeg';
import eu2 from './img/eu-2.jpeg';
import eu3 from './img/eu-3.jpeg';

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
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-11.jpeg'),
    altText: '',
    captionText: 'Popular Istiklal Street',
    captionHeader: ''
  },
  {
    src: require('./img/img-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-13.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-14.jpeg'),
    altText: '',
    captionText: 'Anadolu Kavağı,',
    captionHeader: ''
  },
  {
    src: require('./img/img-15.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Turkey extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/asia">Asia</Link></BreadcrumbItem>
              <BreadcrumbItem active>Turkey</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Turkey</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Istanbul <small>(August 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              What a beautiful city! Locals are super friendly and helpful. A great place for people who love history. Turkish food is delicious and there are so many good restaurants everywhere in the city. It's a very diverse place where people live in harmony. Incredible! I love Istanbul! We had 5 full days to explore Istanbul this time and will definitely visit this amazing city again. We stayed in a hotel very close to Taksim Square and popular Istiklal Street. It is a great area to stay. Istanbul is a big city and we had to depend on public transport to visit Sultanahmet (old town).
            </p>
            <p className="lead">
              <strong>Grand Bazaar:</strong> It's a super crowded bazaar. We bought some colorful fans for the girls.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Basilica Cistern:</strong> A beautiful historical place. The girls had so much fun taking photos in Turkish Ottoman princess costumes!
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={costumes1} className="img-fluid" alt="nikini" />
          </Col>
          <Col xs="12" md="4">
            <img src={costumes2} className="img-fluid" alt="sayuri" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Büyükada Island:</strong> It's the largest of Istanbul's Princes Islands. We visited the Island on a Friday (started very early) to avoid the crowd. The ferry was still full of people! It was very hot when we visited the island and we had a good cooling off dip in one of the tiny beaches in this car-free island.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={island1} className="img-fluid" alt="Büyükada Island" />
          </Col>
          <Col xs="12" md="4">
            <img src={island2} className="img-fluid" alt="Büyükada Island" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Hagia Sophia church and Blue Mosque:</strong> A beautiful part of the old town. I had to cover my head with a scarf before entering the Blue Mosque. Seeing me with a head scarf, Nikini wanted to know why. I told her when women enter a mosque, they cover their heads and it's more like a rule of the Muslim religion. It might not be the perfect answer, but she accepted my explanation.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={hagia1} className="img-fluid" alt="church and mosque" />
          </Col>
          <Col xs="12" md="4">
            <img src={hagia2} className="img-fluid" alt="church and mosque" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Spice Bazaar:</strong> The kids loved the colors and aromas of the spices.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={spice1} className="img-fluid" alt="Spice Bazaar" />
          </Col>
          <Col xs="12" md="4">
            <img src={spice2} className="img-fluid" alt="Spice Bazaar" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              <strong>Spice Bazaar:</strong> The kids loved the colors and aromas of the spices.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={food1} className="img-fluid" alt="Turkish food" />
          </Col>
          <Col xs="12" md="4">
            <img src={food2} className="img-fluid" alt="Turkish food" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead"><strong>Bosphorus tour (by Şehir Hatları):</strong> The cruise took us to all the way to the Black Sea (Anadolu Kavağı).</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">We took a ferry to the Asian side of Istanbul and enjoyed the views of the European side over Bosphorus strait.</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <img src={eu1} className="img-fluid" alr="Asian side of Istanbul" />
          </Col>
          <Col xs="12" md="4">
            <img src={eu2} className="img-fluid" alr="Asian side of Istanbul" />
          </Col>
          <Col xs="12" md="4">
            <img src={eu3} className="img-fluid" alr="Asian side of Istanbul" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Turkey;
