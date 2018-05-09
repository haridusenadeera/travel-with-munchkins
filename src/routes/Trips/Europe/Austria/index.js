import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const historyPalace = [
  {
    src: require('./img/hst-1.jpeg'),
    altText: '',
    captionText: 'Historical Area',
    captionHeader: ''
  },
  {
    src: require('./img/hst-2.jpeg'),
    altText: '',
    captionText: 'Historical Area',
    captionHeader: ''
  },
  {
    src: require('./img/plc-1.jpeg'),
    altText: '',
    captionText: 'Schönbrunn Palace',
    captionHeader: ''
  },
  {
    src: require('./img/plc-2.jpeg'),
    altText: '',
    captionText: 'Schönbrunn Palace',
    captionHeader: ''
  }
];

const hallstatt = [
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

const vienna = [
  {
    src: require('./img/vna-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vna-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/vna-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
    {
    src: require('./img/vna-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
    {
    src: require('./img/vna-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
    {
    src: require('./img/vna-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
    {
    src: require('./img/vna-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Austria extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Austria</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Austria</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Hallstatt <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={hallstatt}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            We spent about 8 hours in Hallstatt on our way to Cesky Krumlov from Bled. Eight hours was barely enough for sightseeing. I wish we had another day to visit the salt mine and relax in this beautiful picture perfect fairytale town. The town gets very crowded around noon onwards. The best view of the village is from the lake. We got on to a boat going to the train station on the other side of the lake and took the same boat back. If you wanna take beautiful photos, start in the morning instead of the afternoon (especially on sunny days). We just enjoyed the views.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Vienna <small>(April 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={vienna}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            Vienna has everything -- History, restaurants, cafes, architecture, museums, parks. It's so fun to explore the city on foot. But, Vienna is large and attractions are not so close together. So we often used public transport in Vienna. We visited this amazing city in mid-April, 2014 -- mild temperature, sunny skies, periods of rainfall. Hats off to all of us, we made it to Vienna from Dresden and back by train (almost 9 hrs one-way in the train). The girls did so great. There are tons of things to do in Vienna. If you want to visit museums, orchestras and etc, you need weeks. But we don't visit museums. The kids get so bored so fast. Maybe when they are a little older and understand the history, we will visit those fascinating museums. We all had a very relaxed amazing time in this lovely city of music! Most importantly, Nikini hardly wanted to rest in the stroller.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <p className="lead">
              <strong>Schönbrunn Palace:</strong> We spent an entire day at Schönbrunn Palace. Nikini loved the castle tour. Even Sayuri kept her headphone on and listened to the guide. The palace gardens are amazing. The kids enjoyed every bit of it.
            </p>
            <p className="lead">
              <strong>Historical Area:</strong> We spent the rest of our time in Vienna exploring Historical Area. Nikini was so busy taking photos of interesting patterns, street artists and flowers.
            </p>
          </Col>
          <Col xs="12" lg="6">
            <Carousel items={historyPalace}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Austria;
