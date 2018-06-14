import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const headerImg = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    captionText: 'Kids had so much fun here',
    captionHeader: 'Grand Place'
  },
  {
    src: require('./img/img-2.jpeg'),
    altText: '',
    captionText: 'Nikini had enough questions about Manneken Pi!',
    captionHeader: 'Manneken Pi'
  },
  {
    src: require('./img/img-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Grand Place'
  }
];

const mnEu = [
  {
    src: require('./img/nikini.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Nikini\'s reward'
  },
  {
    src: require('./img/mneu-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Mini-Europe'
  },
  {
    src: require('./img/mneu-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'Atomium'
  },
  {
    src: require('./img/mneu-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mneu-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mneu-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mneu-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/mneu-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'The European Parliament'
  },
  {
    src: require('./img/mneu-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class Belgium extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Belgium</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Belgium</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Brussels <small>(April 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={headerImg}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            One diverse city! Brussels is big and we had to use public transport to visit some attractions. The Grand Place is a very beautiful square. The girls just spent hours running around. We stayed in a hotel close to the main train station (midi) due to our travel arrangements. Not a very smart idea! As in any big city, some areas of Brussels look bit messy. Locals are friendly but not as friendly as Dutches for sure.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12">
            <p className="lead">
              <strong>Atomium and mini-Europe.</strong> I wasn't impressed with the mini Europe to be honest, but the kids loved it. We helped a little girl from Ireland who accidently separated from her family to find her mom and Nikini had been talking about it all day. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={mnEu}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">Nikini walked more than 15 km (about 10 miles) on our first day in Brussels and earned this dinner: a waffle loaded with chocolate sauce and ice cream!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Belgium;
