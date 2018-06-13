import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

import yala1 from './img/yala-1.jpeg';
import yala2 from './img/yala-2.jpeg';

import beach1 from './img/beach-1.jpeg';
import beach2 from './img/beach-2.jpeg';

import plain1 from './img/plain-1.jpeg';
import plain2 from './img/plain-2.jpg';

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
  }
];

const wilpattu = [
  {
    src: require('./img/wil-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/wil-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/wil-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/wil-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/wil-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const kalutara = [
  {
    src: require('./img/kalutara-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalutara-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const kalpitiya = [
  {
    src: require('./img/kalpitiya-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/kalpitiya-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
];

class SriLanka extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/asia">Asia</Link></BreadcrumbItem>
              <BreadcrumbItem active>Sri Lanka</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">Sri Lanka</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4"><small>(September 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              My husband and I are originally from Sri Lanka and we visit there every other year. This was Nikini's second time (she was only one-year-old  when she was there before and she had no memory of the place) and Sayuri's first. We were there only for a little over two weeks and spent most of our time with the family. Everything was new and exotic for the girls. They hated mosquitos and often complained about the heat and sweating. However, they enjoyed this completely different environment -- tropical plants, trees, birds, animals. Note, One-way trip Sri Lanka from Dresden took more than 20 hours with one transit. In both flights (to Sri Lanka and back), we requested kids' meal and did no other special preparations. The girls enjoyed watching cartoons and slept for hours. Of course, there were many times that they were not happy and didn't want to be in their seats at all.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              Our visit to Yala national park was a major disappointment. This amazingly beautiful national park was closed due to severe drought conditions. Yet, we were able to see some elephants in other areas and the girls couldn't believe their eyes. Also, they overheard discussions about animals dying due to dried up water holes and were very concerned about poor animals.
            </p>
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={yala1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={yala2} className="img-fluid" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="4">
            <img src={beach1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={beach2} className="img-fluid" />
          </Col>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              We took the girls to Pasikuda beach, one of the most beautiful beaches I have ever been to. The girls stayed in water more than 4 hours in a day! We think Sayuri's compassionate love for beaches began after this visit!
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="6" lg="4" className="text-center">
            <img src={plain1} className="img-fluid" />
          </Col>
          <Col xs="12" md="6" lg="4">
            <img src={plain2} className="img-fluid" />
          </Col>
          <Col xs="12" md="12" lg="4">
            <p className="lead">
              <strong>Horton Plain:</strong> The hike is about 10 km in difficult footpaths. Sayuri was too tired and didn't want to walk. Nikini surprised us by completing the hike. Before 3 km to the end of the hike, it started pouring rain. We all got soaking wet. Nikini enjoyed walking in the cold rain. Sayuri looked so sick by the time we reached the end, but with the help of some heat and dry clothes she recovered fairly quickly.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4"><small>(March 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              We visited our family in Sri Lanka during the Easter break. It was abnormally hot during our stay in Sri Lanka and Sayuri suffered a lot from a heat rash. However, the girls enjoyed being with their grandparents, cousins and family. In addition to visiting family, we made sure to show parts of this beautiful country to the girls. They had so much fun watching wild animals in Wilpattu National Park. We went on a full day safari which started at 6am. Also, the kids enjoyed swimming in the Indian ocean and making sand castles at a beautiful sandy beach in Kalpitiya. While in Kalpitiya, we went on a dolphin watching tour and saw hundreds of spinner dolphins. That was an amazing experience. Sayuri enjoyed the boat ride but was not so interested in the look out for dolphins. She said the dolphins swam away too fast before she could get a good glance. Nikini didn't like the boat ride at all and was too seasick by the time we spotted a super pod of spinner dolphins. However, Nikini was amazed by the sights of so many different tropical animals, insects, fruits, and plants. I think they enjoyed the beaches more than anything. The girls had so many "whys" when visited a Buddhist temple for the first time. Their curiosity in different cultures is remarkable! All our long-haul flights were uneventful! (more than 20 hours one-way)
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={wilpattu}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              <strong>Wilpattu National Park:</strong> We went on a full day safari and had a fantastic experience. We didn't see many animals but enjoyed the landscape and diversity of trees and plants.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={kalpitiya}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              <strong>Kalpitiya and dolphin watching</strong>
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={kalutara}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              <strong>Kalutara Buddhist temple and a beautiful beach near grandma</strong>
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={img}/>
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              <strong>Enjoying time with family and getting exposed to the Sri Lankan way of life!</strong>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SriLanka;
