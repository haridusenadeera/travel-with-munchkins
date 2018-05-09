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
import Tips from './routes/Tips';

import Continent from './routes/Trips/Continent';
// import Asia from './routes/Trips/Asia';

import Trips from './routes/Trips';

import USA from './routes/Trips/North-America/USA';

import Andorra from './routes/Trips/Europe/Andorra';
import Austria from './routes/Trips/Europe/Austria';
import Belgium from './routes/Trips/Europe/Belgium';
import Bosnia from './routes/Trips/Europe/Bosnia';
import Croatia from './routes/Trips/Europe/Croatia';

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
          <Route path="/europe" render={()=><Continent continent="Europe" />} />
          <Route path="/north-america" render={()=><Continent continent="North America" />} />
          <Route path="/south-america" component={Trips} />
          <Route path="/australia" component={Trips} />
          <Route path="/asia" render={()=><Continent continent="Asia" />} />

          <Route path="/germany" component={Tips} />

          <Route path="/andorra" component={Andorra} />
          <Route path="/austria" component={Austria} />
          <Route path="/belgium" component={Belgium} />
          <Route path="/bosnia" component={Bosnia} />
          <Route path="/croatia" component={Croatia} />

          <Route path="/usa" component={USA} />

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
