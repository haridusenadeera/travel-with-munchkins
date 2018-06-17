import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import architecture1 from './img/architecture-1.jpeg';
import architecture2 from './img/architecture-2.jpeg';

import fountain1 from './img/fountain-1.jpeg';
import fountain2 from './img/fountain-2.jpeg';

import tapas1 from './img/tapas-1.jpeg';
import tapas2 from './img/tapas-2.jpeg';

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
    captionText: 'Some traditional Catalonian dances @ Montjuïc',
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
    src: require('./img/cable-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Cable car'
  }
];

const madrid = [
  {
    src: require('./img/madrid-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-13.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-15.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-16.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/madrid-17.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Spain extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Spain</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Spain</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Barcelona <small>(June 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We love Barcelona! What a city. Beautiful architecture, beaches, parks, delicious food, wine, culture and entertainment. Locals are so friendly. They love children. They don't stare when kids are loud instead they encourage them to be louder. ha ha! It was very hot when we were in Barcelona. Sayuri could not stand the heat. So we had to take many breaks. We stayed in a hotel close to the Olympic Village and often used public transport. It's a big city. Taxis are not so expensive too.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead"><strong>Cable cars:</strong> We rode in Montjuïc Cable Car and also port cable car and enjoyed the views. Good choice during hot weather.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              Love the architecture.  Gaudí's Sagrada Familia is so beautiful. Nikini was just busy with taking photos of different shapes and patterns. Güell Park is beautiful, but it was very hot when we visited the park and the girls were exhausted and wanted to leave.
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={architecture1} className="img-fluid" alt="architecture" />
          </Col>
          <Col xs="12" md="4">
            <img src={architecture2} className="img-fluid" alt="architecture" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4">
            <p className="lead">
              The Magic Fountain of Montjuïc: A must see with kids. We watched the show almost until 10:30pm. The girls didn't want to leave!
            </p>
          </Col>
          <Col xs="12" md="4">
            <img src={fountain1} className="img-fluid" alt="The Magic Fountain" />
          </Col>
          <Col xs="12" md="4">
            <img src={fountain2} className="img-fluid" alt="The Magic Fountain" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              We love tapas! Spanish people eat late lunches (around 2 pm) and late dinners. Our kids eat lunch around noon and dinner around 7 pm. So we were almost the very first customers at restaurants. Some dishes on the regular menu were not available that early but we still got some really good food including tapas.
            </p>
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={tapas1} className="img-fluid" alt="Tapas" />
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={tapas2} className="img-fluid" alt="Tapas" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Madrid <small>(February 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={madrid} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We visited Madrid in mid-February and spent 4 nights in this beautiful city. I think winter is not the best time to visit Madrid, but there are some pros like fewer crowds, empty city squares, and  most importantly almost empty fantastic cafes to eat churros de chocolate. Regardless, we had so much fun and enjoyed the city peacefully. We kept umbrellas with us at all times! Obviously, the girls enjoyed the food. Our visit to the Madrid Royal Palace was fantastic. There were not many people in the palace too. We stayed in a hotel close to Gran Via and explored the city on foot.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Spain;
