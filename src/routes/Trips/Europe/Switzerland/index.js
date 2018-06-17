import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const zurich = [
  {
    src: require('./img/zurich-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zurich-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
];

const basel = [
  {
    src: require('./img/basel-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/basel-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/basel-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/basel-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/basel-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const zermatt = [
  {
    src: require('./img/zermatt-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/zermatt-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Switzerland extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Switzerland</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Switzerland</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Zurich <small>(August 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={zurich} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Zurich is one of the most expensive cities in the world. Undoubtedly, it's an incredibly clean, a beautiful city. We visited Zurich in August and the temperature was just perfect to explore the city on foot. We flew to Basel from Dresden and took a night train to Zurich and followed the same route on our way back. Even though we spent a few nights in Zurich, we had only one full day for Zurich due to our other plans. It was not enough. We had to rush from one attraction to the other. Nikini didn't seem to mind the fast pace at all. She walked all the way and enjoyed everything. Her photos are so good by now. She uses her camera and sometimes my phone to take photos. Lake Zurich is a perfect area for the kids to run around. Sayuri too got out of her stroller and enjoyed the surrounding.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Basel <small>(August 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={basel} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Basel is a cute not so touristic city. It's located very close to Mulhouse, a small French city and Freiburg, a small German city. When in Basel, one must visit Freiburg. It's one of the most beautiful cities in Germany. We visited Basel in mid-August and had only a day to explore the city. One day is really enough for Basel. We all had a good relaxed time. The city is not expensive as Zurich but very expensive compared to most of the other European cities. We strolled along the river and in the old town.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Zermatt <small>(February 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Carousel items={zermatt} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              Zermatt is a beautiful car-free mountain town located at the foot of the iconic Matterhorn. We were not there for any winter sports. We just wanted to take the girls to the Alps in wintertime when everything is covered with snow and ride on Glacial Express train from Zermatt to St. Moritz.
            </p>
            <p className="lead">
              While in Zermatt, we took cogwheel railway from the city to Gornergrat which is at about 3,000m (approx. 10,000ft)  elevation. We all enjoyed this spectacular train ride and the views from Gornergrat. On our way down, we got off at Riffelberg (about 2,500m or 8,250ft elevation) and let the girls play in the snow. They had so much fun and didn’t want to leave!
            </p>
            <p className="lead">
              Glacier Express train from Zermatt to St. Moritz: We were lucky to have some perfect weather for this seven (7) hour journey. The train has huge windows and provides a panoramic view. The girls too enjoyed the ride very much. We reserved seats for them so that they had their own seats. Kids under 6 travel free on the Glacier Express. Even though expensive, we decided to go for set lunch onboard. It turned out to be a smart decision because the kids enjoyed the meal. The girls were tired and bored when we reached Chur. Nikini fell asleep and Sayuri started playing her games on the iPad.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Switzerland;
