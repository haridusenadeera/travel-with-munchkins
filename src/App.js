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

import Russia from './routes/Trips/Asia/Russia';
import SriLanka from './routes/Trips/Asia/Sri-Lanka';

import Andorra from './routes/Trips/Europe/Andorra';
import Austria from './routes/Trips/Europe/Austria';
import Belgium from './routes/Trips/Europe/Belgium';
import Bosnia from './routes/Trips/Europe/Bosnia';
import Croatia from './routes/Trips/Europe/Croatia';
import CzechRepublic from './routes/Trips/Europe/Czech-Republic';
import Denmark from './routes/Trips/Europe/Denmark';
import Estonia from './routes/Trips/Europe/Estonia';
import Finland from './routes/Trips/Europe/Finland';
import France from './routes/Trips/Europe/France';
import Germany from './routes/Trips/Europe/Germany';
import Greece from './routes/Trips/Europe/Greece';
import Hungary from './routes/Trips/Europe/Hungary';
import Ireland from './routes/Trips/Europe/Ireland';
import Italy from './routes/Trips/Europe/Italy';
import Latvia from './routes/Trips/Europe/Latvia';
import Liechtenstein from './routes/Trips/Europe/Liechtenstein';
import Lithuania from './routes/Trips/Europe/Lithuania';
import Luxembourg from './routes/Trips/Europe/Luxembourg';
import Malta from './routes/Trips/Europe/Malta';
import Montenegro from './routes/Trips/Europe/Montenegro';
import Netherlands from './routes/Trips/Europe/Netherlands';

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

          <Route path="/russia" component={Russia} />
          <Route path="/sri-lanka" component={SriLanka} />

          <Route path="/andorra" component={Andorra} />
          <Route path="/austria" component={Austria} />
          <Route path="/belgium" component={Belgium} />
          <Route path="/bosnia" component={Bosnia} />
          <Route path="/croatia" component={Croatia} />
          <Route path="/czech-republic" component={CzechRepublic} />
          <Route path="/denmark" component={Denmark} />
          <Route path="/estonia" component={Estonia} />
          <Route path="/finland" component={Finland} />
          <Route path="/france" component={France} />
          <Route path="/germany" component={Germany} />
          <Route path="/greece" component={Greece} />
          <Route path="/hungary" component={Hungary} />
          <Route path="/ireland" component={Ireland} />
          <Route path="/italy" component={Italy} />
          <Route path="/latvia" component={Latvia} />
          <Route path="/liechtenstein" component={Liechtenstein} />
          <Route path="/lithuania" component={Lithuania} />
          <Route path="/luxembourg" component={Luxembourg} />
          <Route path="/malta" component={Malta} />
          <Route path="/montenegro" component={Montenegro} />
          <Route path="/netherlands" component={Netherlands} />

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
