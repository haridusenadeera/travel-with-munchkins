import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

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
  }
];

const nyhavn = [
  {
    src: require('./img/nyhavn-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/nyhavn-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const castle = [
  {
    src: require('./img/castle-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/castle-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/castle-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const mermaid = [
  {
    src: require('./img/mermaid-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mermaid-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mermaid-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Denmark extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Denmark</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Denmark</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Copenhagen <small>(July 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              What a beautiful city! We visited Copenhagen in mid-summer and were blessed with some perfect weather. We arrived Copenhagen by train from Dresden (ICE train from Hamburg to Copenhagen takes a Train Ferry to cross the Baltic Sea). We flew back from Copenhagen to Berlin to save time and money. There are so many things to do in this city. However, our goal was to get an overview of the city and see major attractions. It's a very kids' friendly city and there are so many open areas where kids can run around. Nikini loved eating fresh fruits from street vendors. She walked so much on this trip reaching at least 10 km on the second day in Copenhagen. Well done Nikini! We packed so lightly that we had to wash our clothes almost every day on this trip.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={nyhavn} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
             Nyhavn is a spectacular place, so crowded, full of cafes and restaurants. It's colorful and active. We spent hours just enjoying the views.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={castle} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
             Rosenborg Castle grounds is another place where kids can freely run around and play. The park itself is so beautiful. Sayuri had so much fun feeding ducks and picking stones!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={mermaid} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
             The walk to the Little Mermaid from the city was very nice. This little statue is a very popular attraction, but I think the surrounding park is more fun for the kids. Nikini had enough questions about this statue because it doesn't have a distinctive mermaid tail.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Denmark;
