import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import gediminas1 from './img/gediminas-1.jpeg';
import gediminas2 from './img/gediminas-2.jpeg';

import vilnius1 from './img/vilnius-1.jpeg';
import vilnius2 from './img/vilnius-2.jpeg';

import bernardine1 from './img/bernardine-1.jpeg';
import bernardine2 from './img/bernardine-2.jpeg';

import church1 from './img/church-1.jpeg';
import church2 from './img/church-2.jpeg';
import church3 from './img/church-3.jpeg';

import uzupis1 from './img/uzupis-1.jpeg';
import uzupis2 from './img/uzupis-2.jpeg';
import uzupis3 from './img/uzupis-3.jpeg';

import sayuri1 from './img/sayuri-1.jpeg';

import girls1 from './img/girls-1.jpeg';

import food1 from './img/food-1.jpeg';
import food2 from './img/food-2.jpeg';

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

class Lithuania extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Lithuania</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Lithuania</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Vilnius <small>(July 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              What a beautiful city! When we visited Vilnius, it was raining and forecast for the next couple of days was not promising too. However, we got lucky and had one full day with relatively good weather to explore this cute place. We visited most of the attractions on foot within a day. I love Riga and Tallinn, but I think Vilnius is prettier than those two Baltic capitals and really worth visiting. The locals we met and talked with were super friendly and helpful. Vilnius is inexpensive compared to neighboring Riga or Tallinn. For example, airport shuttles only charged 1 euro per adults and a family of four could eat at a very good restaurant for less than 30 euros (including a glass of wine and a beer).
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className="lead">
              <strong>Note:</strong> The girls have new looks because about a week before this trip the girls had been playing hairdressers at home and Nikini cut her hair and Sayuri's hair off.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4" lg="4">
            <img src={gediminas2} className="img-fluid" alr="Gediminas Tower" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={gediminas1} className="img-fluid" alr="Gediminas Tower" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <p className="lead">
              <strong>Gediminas Tower:</strong> We took the cable car up the hill and walked down. The views from the castle grounds is beautiful. The girls enjoyed the walk down the hill.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4" lg="4">
            <p className="lead">
              The Vilnius cathedral is stunning inside out. Walk along Gediminas Avenue was quite interesting.
            </p>
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={vilnius1} className="img-fluid" alr="Vilnius cathedral" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={vilnius2} className="img-fluid" alr="Vilnius cathedral" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4" lg="4">
            <img src={bernardine1} className="img-fluid" alr="Bernardine Garden " />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={bernardine2} className="img-fluid" alr="Bernardine Garden " />
          </Col>
          <Col xs="12" md="4" lg="4">
            <p className="lead">
              The girls loved Bernardine Garden and the surrounding area.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12">
            <p className="lead">
              There are so many churches in Vilnius. The girls wanted to visit them all! St. Anne's Church and Orthodox Church of St. Nicholas are stunning.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4" lg="4">
            <img src={church1} className="img-fluid" alr="Church" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={church2} className="img-fluid" alr="Church" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={church3} className="img-fluid" alr="Church" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12">
            <p className="lead">
              Uzupis (a self-declared independent republic): It has a unique atmosphere. We walked in to Uzupis from the Bernardine garden side. The kids also enjoyed the stroll in Uzupis.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4" lg="4">
            <img src={uzupis1} className="img-fluid" alr="Uzupis" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={uzupis2} className="img-fluid" alr="Uzupis" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={uzupis3} className="img-fluid" alr="Uzupis" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="3">
            <p className="text-info lead">
              <strong>My happy girl:</strong> We took a taxi to the cathedral square from the hotel because of the morning downpour and Sayuri had forgotten her favorite Elsa bag and camera in the taxi. Three hours later a taxi stopped and the driver rushed to us with Sayuri's bag. What an amazing experience!
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={sayuri1} className="img-fluid" alr="Sayuri" />
          </Col>
          <Col xs="12" md="6" lg="3">
            <p className="lead">
              The girls had so much fun exploring new things in the old town and surrounding area. Vilnius Old Town is truly beautiful.
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={girls1} className="img-fluid" alr="Girls" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="4" lg="4">
            <p className="lead">
              Delicious traditional Lithuanian food. The girls loved Cepelinai.
            </p>
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={food1} className="img-fluid" alr="Food" />
          </Col>
          <Col xs="12" md="4" lg="4">
            <img src={food2} className="img-fluid" alr="Food" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lithuania;
