import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
// import './css/header.css'
import { Link } from 'react-router-dom';

import DropdownItem from 'react-bootstrap/DropdownItem';

export class HeaderComponent extends React.Component {
  

  render() {
    return <Navbar id="home" fixed="top" expand="lg" style={{color:'white',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
      <Navbar.Brand href="/" style={{color:'white'}}><span></span>MAA RESTAURANT</Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="m-auto">
          <Nav.Link style={{color:'white'}} className="ml-5" href="">Home</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#about">About</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">FAQ</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">Contact</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">Footer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  }
}