import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const museum = [
  {
    src: require('./img/msm-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/msm-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/msm-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const images = [
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
    captionText: '',
    captionHeader: ''
  },

];

const fort = [
  {
    src: require('./img/fort-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/fort-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/fort-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/fort-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
];

const church = [
  {
    src: require('./img/church-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/church-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/church-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/church-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
];

const food = [
  {
    src: require('./img/food-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/food-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/food-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/food-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/food-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];


class Russia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/asia">Asia</Link></BreadcrumbItem>
              <BreadcrumbItem active>Russia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Russia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">St. Petersburg <small>(July 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={images}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Nikini was so excited about visiting Russia. We took a visa-free cruise from Helsinki to St. Petersburg. There is a downside to visa-free cruise: travellers can visit only St. Petersburg for 72 hours. The girls love cruise trips. Nikini started singing the only Russian song that she had learned at school from her Latvian teacher the minute we stepped in Russia. We went to St. Issac square by a shuttle bus from the port and walked directly to the hotel to drop our bags. Our room was ready even 4 hours before the check-in time. The hotel staff recommended a fantastic place to eat traditional Russian food. After lunch, we started exploring the city on foot regardless of the wet weather.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Carousel items={museum}/>
          </Col>
          <Col xs="12" md="6">
            <p className="lead">
              The Hermitage museum and winter palace are amazing with some stunning interior. The open square is gigantic! The girls didn't want to leave this place.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6">
            <Carousel items={food}/>
          </Col>
          <Col xs="12"  md="6">
            <p className="lead">
              St. Petersburg is packed with beautiful sights.
              We all enjoyed Russian food such as pelmeny, porridge, beef stroganoff and borsch.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6">
            <Carousel items={church}/>
          </Col>
          <Col xs="12" md="6">
            <br />
            <p className="lead">
              Church of the savior on the spilled blood is stunning. Nikini said it was the most beautiful church she has ever seen. The surrounding area is also quite beautiful.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" >
            <Carousel items={fort}/>
          </Col>
          <Col xs="12" md="6">
            <p className="lead">
              <strong>At Peter and Paul fortress:</strong> Watched this military show and cannon fire with a Russian family we met at the fortress. We spent the rest of the day with that lovely family.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Russia;
