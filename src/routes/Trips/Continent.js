import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardImg,
  CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import trips from '../../country-list';

class Continent extends Component {
  render() {
    const { continent } = this.props;
    const countryCards = trips[continent.replace(" ", "_")].map((name) => {
      const country = name.replace(" ", "-").toLowerCase();
      return (
        <Col xs="12" sm="4" lg="3" key={country}>
          <Card style={{margin: '1rem 0'}}>
            <CardImg
              top
              width="400"
              height="200"
              src={require(`../../img/${country}.jpg`)}
              alt={country} 
            />
            <CardBody>
              <CardTitle>{name}</CardTitle>
                <Link to={`/${country}`} style={{textDecoration: 'none'}}>
                  <Button outline color="info" block>Explore</Button>
                </Link>
            </CardBody>
          </Card>
        </Col>
      )
    });
    return (
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>{continent}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3">{continent}</h1>
            <p className="lead">Explore our travels in {continent}.</p>
          </Col>
        </Row>
        <Row>
          {countryCards}
        </Row>
      </Container>
    );
  }
}

export default Continent;
