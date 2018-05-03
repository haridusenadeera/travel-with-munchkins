import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Home from './routes/Home';
import Trips from './routes/Trips';
import Tips from './routes/Tips';

import Europe from './routes/Trips/Europe';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar dark expand="md" style={{backgroundColor: '#1289A7', marginBottom: '1rem'}}>
            <NavbarBrand tag={Link} to="/">Travel With Munchkins</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  Trips
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem tag={Link} to="/europe">
                    Europe
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/north-america">
                    North America
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/asia">
                    Asia
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={Link} to="/tips">
                    Tips
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>


          <Route exact path="/" component={Home}/>
          <Route path="/tips" component={Tips} />
          <Route path="/europe" component={Europe} />
          <Route path="/north-america" component={Trips} />
          <Route path="/south-america" component={Trips} />
          <Route path="/australia" component={Trips} />
          <Route path="/asia" component={Trips} />

          <Route path="/germany" component={Tips} />

          <footer className="footer">
            <div className="container">
              <div className="text-muted">© 2018. All rights reserved.</div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
