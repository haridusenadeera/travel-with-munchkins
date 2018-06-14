import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import old1 from './img/old-1.jpeg';
import old2 from './img/old-2.jpeg';

import clock1 from './img/clock-1.jpeg';
import clock2 from './img/clock-2.jpeg';

import food1 from './img/food-1.jpeg';

import castle1 from './img/castle-1.jpeg';

import entrance1 from './img/entrance-1.jpeg';

import eating1 from './img/eating-1.jpeg';

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
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/img-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class CzechRepublic extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Czech Republic</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Czech Republic</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Prague <small>(February 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              Prague, the capital of Czech republic is located 150 km from Dresden, Germany -- about 2.5 hr by train. This beautiful city has so much to offer and is one of our favorite European cities. We visited Prague in 2014 for the first time and then a few more times when we got visitors. We have been to Prague in mid spring and mid summer times. In our opinion, spring is the best time to explore Prague with kids because of the mild weather they don't get so exhausted. Summer is also very good, but our kids wanted to stop and rest very often.  We visited Prague by train from Dresden in 2014 on a bright winter day, cold but bearable. The kids thoroughly enjoyed the almost 3-hour long train ride.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              <strong>Old Town Square: </strong> The girls had fun popping bubbles at the Old Town Square -- yes, there are bubble men/women even in winter! It's a great place to eat, relax, admire history and architecture, people-watch. The children enjoyed chasing pigeons off. There were many talented street musicians in the square and the girls danced to their tune.
            </p>
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={old1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={old2} className="img-fluid" />
          </Col>
        </Row>

        <br />

        <Row>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              <strong>Astronomical clock: </strong> We went to the astronomical clock 10 minutes before the starting of the 12-noon show and it was already very crowded. It was a beautiful, very short show and definitely worth watching. Now, whenever we see a clock tower, Nikini wants to know if there is a show coming up.
            </p>
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={clock1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="4" >
            <img src={clock2} className="img-fluid" />
          </Col>
        </Row>

        <br />

        <Row>
          <Col xs="12" md="6" lg="4" >
            <img src={food1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="8" >
            <p className="lead">
              <strong>Street food: </strong> We all enjoyed eating street food: Trdelnik (a traditional Czech/Slovak sweet pastry); hot dogs (yummy Czech sausages!); hot wine for the grownups. The girls enjoyed watching how Trdelnik was made. It's made from rolled dough that is wrapped around a stick, then roasted over the open fire and topped with sugar or crushed nuts. The kids loved sugar coated Trdelnik -- no surprise there!
            </p>
          </Col>
        </Row>

        <br />

        <Row>
          <Col xs="12">
            <p className="lead">
              <strong>Charles Bridge: </strong>Walk from Old Town Square to Prague castle via Charles Bridge is a must-do when in Prague. Charles Bridge is a beautiful traffic free very old bridge -- usually very crowded. There are vendors, musicians, artists, and dancers on the bridge. Holding hands is a must in here when traveling with young kids. The views of the river and surrounding are breathtaking. Nikini didn't like it so much because there were too many people and she had to hold on to one of the parents' hand. Yet, she wanted to give money to her favorite musicians on the bridge! The Bridge Band is quite good. Sayuri stayed in the stroller most of the time.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" lg="4" className="text-center">
            <img src={castle1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="8" >
            <p className="lead">
              <strong>Prague Castle: </strong> Uphill walk to the Prague Castle and St. Vitus Cathedral from Charles Bridge is fun.  Pushing strollers can be difficult but totally doable and we have done it a couple of times. In our first time, we carried our double stroller hoping Nikini could rest in if she got tired by walking. She was not used to walking so much before. Downhill walk was more challenging with the stroller!!!   We had to push the stroller uphill with both kids in and yet didn't hurt our backs!  View of the City from Prague Castle Hill is so beautiful. You can spend hours there just admiring the beauty of this city. We didn't go inside the castle.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="4">
            <img src={entrance1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="8" >
            <p className="lead">
              The castle entrance got Nikini's attention and she had enough questions. The open area in front of the castle entrance is a perfect place to let kids move around.  A visit to St. Vitus Cathedral is well worth. Nikini had so much fun walking down hill. She thought it's like walking on a slide.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="4">
            <img src={eating1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="8" >
            <p className="lead">
              <strong>Eating:</strong> There are so many good restaurants in Prague. We usually don't order food from Kid's menu for children and believe trying local food is another way of experiencing the country. The girls loved Goulash and dumplings.
            </p>
            <p className="lead">
              Walk from the Old Town Square to the Municipal House Hall along the incredibly active touristic road is lovely when the streets are lit up with street lights.
            </p>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <h1 className="display-4">Cesky Krumlov <small>(May 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" md="12" lg="6">
            <p className="lead">
              We spent a day in Cesky Krumlov our way to Dresden from Bled. A day is just enough to see most of the attractions. We walked in almost every back alley and corners. Cesky Krumlov is a charming city! The girls just enjoyed sightseeing and window shopping. We stayed in a hotel very near the castle. The castle and its surrounding look amazing at night time. This city gets very busy around noon onwards. Tour buses bring in thousands of tourists to this small town. We started very early and had more than 4 hours to see the city leisurely before it got swamped by tourists.
            </p>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default CzechRepublic;
