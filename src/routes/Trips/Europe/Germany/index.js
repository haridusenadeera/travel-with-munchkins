import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import freiburg6 from './img/freiburg-6.jpeg';
import freiburg7 from './img/freiburg-7.jpeg';
import freiburg11 from './img/freiburg-11.jpeg';
import freiburg12 from './img/freiburg-12.jpeg';
import freiburg13 from './img/freiburg-13.jpeg';

const berlin1 = [
  {
    src: require('./img/berlin-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-2.jpeg'),
    altText: '',
    captionText: 'The Memorial to the Murdered Jews of Europe',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-3.jpeg'),
    altText: '',
    captionText: 'Everyone knows about the Berlin wall',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const berlin2 = [
  {
    src: require('./img/berlin-21.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-22.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-23.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-24.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-25.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/berlin-26.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const hamburg = [
  {
    src: require('./img/hamburg-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hamburg-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hamburg-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hamburg-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hamburg-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hamburg-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'On ICE train'
  },
  {
    src: require('./img/hamburg-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const neuschwanstein = [
  {
    src: require('./img/neuschwanstein-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/neuschwanstein-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const frankfurt = [
  {
    src: require('./img/frankfurt-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/frankfurt-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/frankfurt-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/frankfurt-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const meissen = [
  {
    src: require('./img/meissen-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/meissen-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const freiburg = [
  {
    src: require('./img/freiburg-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freiburg-15.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const leipzig = [
  {
    src: require('./img/leipzig-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/leipzig-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/leipzig-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/leipzig-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/leipzig-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/leipzig-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const saxon = [
  {
    src: require('./img/saxon-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/saxon-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const warnemünde = [
  {
    src: require('./img/warnemünde-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/warnemünde-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/warnemünde-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/warnemünde-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/warnemünde-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/warnemünde-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const freizeitpark = [
  {
    src: require('./img/freizeitpark-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/freizeitpark-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Germany extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Germany</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Germany</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Berlin <small>(March 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={berlin1} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            Berlin is about 200 km from Dresden, Germany -- about 2 hr by bus or train. Berlin is one of the largest cities in Europe and difficult to explore on foot especially when traveling with kids. We decided to explore Berlin a little at a time because it's located not so far from Dresden and easy to do multiple visits. So our first visit was to the Holocaust Memorial and Legoland. The girls had so much fun at the Legoland.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Berlin <small>(July 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={berlin2} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              This is our second weekend trip to Berlin. We visited the parliament of Germany, aquarium, sightseeing in and around Brandenburg Gate. The girls had an amazing time at the aquarium.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Hamburg <small>(July 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={hamburg} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We had only a day in Hamburg. It's certainly a beautiful city. Port area is active and a good place to relax. We explored only the harbor area this time. There are so many good playgrounds for kids in this area. We Visited Hamburg in mid-summer on our way to Copenhagen by train. We took the Intercity Express (ICE) train from Hamburg to Copenhagen. This train crosses Baltic Sea in a Train Ferry! The train Ferry experience was really unique.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Neuschwanstein Castle <small>(October 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={neuschwanstein} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We visited this famous castle in mid-October by train via Munich. It's a beautiful castle and well worth a visit when in Munich. Nikini loved the castle and often talks about it. We didn't intend to explore Munich but had a half a day to have a quick peek at Munich old town. It's an amazing city and we will have to visit again.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Frankfurt <small>(May 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={frankfurt} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              There should be plenty to see and do in Frankfurt, but we were only interested in sightseeing in and around the old town this time. The Old Town area was very active and fun. We all had a pleasant time.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Meissen <small>(May 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={meissen} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We did a day trip to Meissen with family. Meissen is located about 20 km from Dresden and can be easily reached by train in about 30 minutes. This small city is famous for European porcelain manufacturing. It's a good place to visit when in Dresden. The girls enjoyed the porcelain factory tour.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Freiburg im Breisgau <small>(May 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={freiburg} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              What a beautiful city! I think Freiburg is one of the most beautiful cities in Germany.  We visited this cute city with family  and all six of us enjoyed the city strolls a lot. Around noon, we took the cable car up Schauinsland mountain and enjoyed the fantastic view of Freiburg and short easy hikes. The girls had a very relaxed fun time in Freiburg.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <img src={freiburg6} className="img-fluid" alt="city"/>
          </Col>
          <Col xs="12" md="4">
            <img src={freiburg7} className="img-fluid" alt="city" />
          </Col>
          <Col xs="12" md="4">
            <p className="lead">
              A fantastic city to explore on foot with kids
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="3">
            <img src={freiburg11} className="img-fluid" alt="views" />
          </Col>
          <Col xs="12" md="3">
            <img src={freiburg12} className="img-fluid" alt="views" />
          </Col>
          <Col xs="12" md="3">
            <img src={freiburg13} className="img-fluid" alt="views" />
          </Col>
          <Col xs="12" md="3">
            <p className="lead">
              Fantastic views of the surrounding from Schauinsland mountain. A great place for kids.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Leipzig <small>(June 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={leipzig} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We took the girls to Leipzig zoo in summer. It was just a day trip. Leipzig is less than 1.5hrs from Dresden by train. It's a really good zoo with several fun things for kids to see and enjoy.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Saxon Switzerland <small>(June 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={saxon} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              This national park is located just 30 minutes from Dresden by train. The area has a rocky canyon landscape. There are several hiking trails of varying degrees of difficulty. We all had so much fun. Nikini loved the hike.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Warnemünde <small>(July 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={warnemünde} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We did a long weekend trip to Warnemünde, a Baltic beach city. All of the hotels near Warnemünde were fully booked for the weekend and we had to stay in Rostock -- about 30 minutes by train. Warnemünde is a beautiful touristic fishing village. The beach is clean, wide, sandy and beautiful. We rented one of those funny looking lockable German beach chairs (full-day rental was 12 Euros) -- very useful to store kids' toys and etc. We loved eating seafood including Baltic flatfish. Most of the stores accept credit cards (we have been to some places in Germany where we could only use cash). The children had so much fun at the beach.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Freizeitpark Plohn, Lengenfeld <small>(September 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={freizeitpark} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We took the girls to Freizeitpark Plohn theme park. It's a really good theme park for kids located about an hour from Dresden by train. The girls had so much fun. We booked a Plohn suite and that was a big hit. The girls didn't want to vacate the room.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Germany;
