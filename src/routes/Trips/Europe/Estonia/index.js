import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const img = [
  {
    src: require('./img/img-1.jpeg'),
    altText: '',
    captionText: 'Our cabin',
    captionHeader: ''
  },
  {
    src: require('./img/img-2.jpeg'),
    altText: '',
    captionText: 'Old Town',
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
  }
];

class Estonia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>Estonia</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Estonia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Tallinn <small>(September 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
            We did a day trip to Tallinn from Helsinki. It was a smart decision because it was raining in Helsinki that day while mostly sunny weather in Tallinn. After all, Tallinn is a charming small city which can be easily explored on foot. We took Viking Line night ferry and everyone slept really well in a relatively comfortable cabin. We had to vacant the cabin by 6 am so everyone woke up very early. We had a good breakfast on the ferry and got off the boat around 7 am. We had about 8 hours to explore Tallinn because our return ferry left Tallinn around 4:30 pm. We had dinner on the ferry which saved us some time for sightseeing. Dinner on the ferry was quite good -- way better than the breakfast.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Old town square is really cute and has many restaurants and cafes. It was not crowded when we were there and the girls ran around freely. Estonian blood sausages are a must eat when in Tallinn.
            </p>
            <p className="lead">
              The girls enjoyed our strolls in and around Alexander Nevsky Cathedral, Toompea Hill and Town Wall.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Estonia;
