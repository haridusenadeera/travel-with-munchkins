import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Carousel from '../../../../components/Carousel';

const newcastle = [
  {
    src: require('./img/newcastle-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/newcastle-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const york = [
  {
    src: require('./img/york-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/york-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const scotland = [
  {
    src: require('./img/scotland-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/scotland-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

const birmingham = [
  {
    src: require('./img/birmingham-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/birmingham-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/birmingham-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/birmingham-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
];

const london = [
  {
    src: require('./img/london-1.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-2.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-3.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-4.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-5.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-6.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-7.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-8.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-9.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-10.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-11.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-12.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-13.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-14.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-15.png'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-16.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-17.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-18.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-19.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  },
  {
    src: require('./img/london-20.jpeg'),
    altText: '',
    captionText: '',
    captionHeader: ''
  }
];

class UK extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/europe">Europe</Link></BreadcrumbItem>
              <BreadcrumbItem active>UK</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">UK</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-4">Newcastle <small>(May 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={newcastle} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              Why did we visit Newcastle? It was not on our wish list at all. We visited some family who was there for short-term. We spent four days in Newcastle mostly catching up with the family and sightseeing. Marsden Rock in South Shields is beautiful and we wish we visited that place on a sunny warm day.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">York <small>(May 2014)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={york} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              I visited some good friends in York with the girls when my husband, Hiroshan was on a business trip. It was challenging, but the girls behaved so well. We went to Berlin by bus and flew to London and my friend picked us up at the airport. We drove to York from London. On our way back, we took the bus to Leeds and flew from their to Prague in the Czech Republic. Because we arrived in Prague at night, we stayed in a hotel close to the main train station and took a train next day to Dresden. It's was really tough, but we made it all the way. We spent some quality time catching up and sightseeing in York. It is a beautiful small city. We explored the historical area on foot. Nikini didn't even ask to rest in the stroller. Sayuri napped in the stroller and walked a little bit too. We also did a day trip to Bingham Rocks during our stay in York with our friends and had an amazing time. The children had a great time climbing rocks.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Scotland <small>(March 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Carousel items={scotland} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              We visited Scottland with good family friends. Our group had 3 kids including ours. Our friends planned the whole trip and we just had to relax and enjoy the beauty of Scotland. We flew from Berlin to Manchester and took a train to York where our friends live. After resting a day at our friends' house, we rented a minivan and started driving from York to Inverness via Edinburgh.
            </p>
            <p className="lead">
              Stopped in Edinburgh for lunch and had a quick peek at the Edinburgh castle
            </p>
            <p className="lead">
              Our two families stayed in a cottage in Inverness, a lovely Scottish town. The weather was bad -- It was raining most of the days! However, we packed raincoats and boots for the kids this time and were well prepared to go out in the rain. Relaxed and explored Inverness in the first few days. The girls still talk about the "Loch Ness Monster". Our hike to see some waterfalls in the rain was fun. The children love walking in the rain and getting dirty.
            </p>
            <p className="lead">
              Drove to see Fairy pools in the Isle of Skye. The drive was really beautiful -- love the landscape. Again, we had bad weather. It was raining really bad on our hike to fairy pools. The temperature was only about 5c. Nikini made all of us impressed by walking all the way up to the pools and back. She enjoyed the hike to the fullest. Nikini loved walking in the rain on the marshy areas. Thanks to all her good rain gear, she stayed very dry and warm inside.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">Birmingham <small>(May 2015)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Carousel items={birmingham} />
          </Col>
          <Col xs="12" lg="6">
            <p className="lead">
              We visited some of our good friends in Birmingham. It was just a weekend trip and we spent most of our time catching up. It sure is a very diverse city. Our friends took us to the city and showed some of the major attractions. The girls had been very busy playing with their new friends.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h1 className="display-4">London <small>(March 2016)</small></h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Carousel items={london} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="lead">
              We visited London in early March. The weather was not ideal, but we enjoyed our stay regardless of the rain and cloudy skies. We all had so much fun visiting famous landmarks such as Big Ben, Tower Bridge, Buckingham Palace, Hyde Park, the London Eye and etc. When it was raining, we took shelter inside a nearby museum or art gallery. I don't know how they do it, but most of London's fantastic museums have no entrance fee. We went to the London eye early and spent less than 30 minutes from buying the tickets to getting in a car. There was no line at the ticketing counter. Guess we were just lucky! The London eye is very kid-friendly and the girls loved the ride. We stayed in a hotel very close to Westminster Abbey. Staying close to major attractions saved us a lot of time and money. We visited most of the attractions (excluding museums) in two full days! On the first day of our stay in London, we walked all the way to the tower bridge from our hotel and visited many sights on the way. It was a record breaker. Nikini walked almost 20 km based on my phone, but I think it was at least 2 km more -- her new personal record!!!
            </p>
            <p className="lead">
              The girls couldn't wait until the changing of the guards ceremony started at the Buckingham Palace. However, at the end, they especially Nikini were quite disappointed about the whole thing. Nikini was expecting "the princess" to come out of the palace and greet all the people who had come to see them!!! She had been thinking to send a postcard to the palace telling if the queen and princess don't come out to say hi, the people will soon stop coming to see them. According to Nikini, there is no point of visiting the palace just to see some guards and horses. Something to think about!!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UK;
