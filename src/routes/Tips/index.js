import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Collapse, Alert } from 'reactstrap';
import data from './data';
// import './styles.css';

class Trips extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      // transBooking: false,
      // hotelBooking: false,
      packing: false,
      travel: false,
      exploring: false,
      eating: false,
      entertained: false,
      sick: false
    };
  }

  toggle(tip, event) {
    event.preventDefault();
    this.setState({
      [tip]: !this.state[tip]
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Travel Tips</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">
              We used to travel a lot before the kids. We have seen most of Western Canada and parts of the USA and never thought it would be possible to do such travels with kids. Our travels in North America with kids was quite different from our travels in Europe with kids. In North America, we often drove and carried a car full of stuff even for a couple of days. Other times we flew to a major city, took a rental car, and drove to our attractions. We had to revisit our travel strategies when we temporary moved to Dresden. We don't own a car in Dresden because the city has an excellent public transport network and also we live in the city close to several tram stops and a train station. We thought it would be fun and a nice change to use the excellent public transport system in Europe and we have been correct with our decision so far. If you check our travels from 2014 and 2015, you will see that we have visited so many new places already. Our goal is to see most part of Europe. This was possible because of some luxuries that we don't have in the USA.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert color="info">
            <ul>
              <li>Europe, especially Germany has a generous vacation policy! Thirty (30) vacation days is something we rarely hear in the USA. We make the full use of the vacation days by planning trips around weekends and public holidays,</li>
              <li>Budget travel is possible in Europe. We usually travel on a budget, but our travels are very comfortable.</li>
              <li>Europeans travel so much. There are so many budget airlines which offer tickets at a very low price to many European destinations. For example, we flew to Rome from Berlin and back for 60 Euros! </li>
              <li>Europe has a well connected excellent train network. We use trains whenever it's convenient. Kids under 6 years usually travel free of charge. There are kids' compartments in some fast trains and regional trains.</li>
            </ul>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">The best travel tips for traveling with kids usually come from parents. Here are some tips for traveling with kids based on our family's travel experience.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {
                data.topics.map((topic)=>{
                  return (
                    <ListGroupItem key={topic.id}>
                      <a href="#" onClick={(e) => this.toggle(topic.id, e)}><h4>{topic.title}</h4></a>
                      <Collapse isOpen={this.state[topic.id]}>
                        <ul>
                          {
                            topic.tips.map((tip, i) => <li key={i}>{tip}</li>)
                          }
                        </ul>
                      </Collapse>
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Trips;
