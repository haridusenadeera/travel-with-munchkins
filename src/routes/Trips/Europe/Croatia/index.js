import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const images = [
  {
    src: require('./img/bay-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/bay-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const bayArea = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    captionText: 'We rode the cable car and enjoyed the great views over Dubrovnik.',
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
  }
];

const cityWall = [
  {
    src: require('./img/hst-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: 'City Wall'
  },
  {
    src: require('./img/hst-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/hst-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/twn-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/twn-2.jpeg'),
    altText: '',
    captionText: 'Old Town',
    captionHeader: ''
  },
  {
    src: require('./img/twn-3.jpeg'),
    altText: '',
    captionText: 'Old Town',
    captionHeader: ''
  }
];

class Croatia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Croatia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Croatia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Dubrovink <small>(October 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={images}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
            What a beautiful Croatian city! It was raining in most of the days when we were in Dubrovnik. However, we got very lucky to have two sunny days to explore the city. The old town is gorgeous. The city wall is really impressive.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <br />
            <p className="lead">
            <strong>Historical City Wall:</strong> We started in mid morning and saw the beautiful views of Adriatic sea and the old town! Nikini was determined to go to the highest point. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="4">
            <Carousel items={cityWall}/>
          </Col>
          <Col xs="12" lg="4">
            <p className="lead">
              <strong>Old Town:</strong>  Its a small and beautiful town with so many small, narrow streets. The girls had so much fun in the Old Town.
            </p>
            <p className="lead">
              <strong>Lapad Bay area:</strong> The sea temperature was about 18 C and girls braved it. Nikini enjoyed experiencing the surrounding vegetation.
            </p>
          </Col>
          <Col xs="12" lg="4">
            <Carousel items={bayArea}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Croatia;
