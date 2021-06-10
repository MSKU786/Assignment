import React from 'react';
import { Nav, Navbar, NavDropdown} from "react-bootstrap"

function Topbar(props) {
    
    return (
        <Navbar>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5">
            <Nav.Link className="ml-4" > </Nav.Link>
            <Navbar.Brand className="ml-4">Image</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link className="mr-4 text-white" >  Search </Nav.Link>
            <Nav.Link className="mr-4 text-white">Help</Nav.Link>
            <Nav.Link className="mr-4 text-white">  Account </Nav.Link>
            <Nav.Link className="mr-5 text-white"> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Topbar;