import React from 'react';
// import './css/home.css'
import {AboutComponent} from './about'
import {HomeComponent} from './home'
import {GalleryComponent} from './gallery'
import {FaqComponent} from './faq'
import {ContactComponent} from './contact'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
export class MainComponent extends React.Component {
  scroll(id,event)
  {
    var pos=document.getElementById(id)
    console.log(pos.offsetTop)
   window.scrollTo(0,pos.offsetTop)
  }
  render() {
   
    return <div >
        <div>
     <Navbar id="home" fixed="top" expand="lg" style={{color:'white',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
      <Navbar.Brand href="/" style={{color:'white'}}><span></span>MAA RESTAURANT</Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav  className="m-auto">
          <Nav.Link style={{color:'white'}} className="ml-5" href="#home">Home</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#about">About</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">Menu</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">Gallery</Nav.Link>
          <Nav.Link style={{color:'white'}} className="ml-5" href="#link">Contact</Nav.Link>
        </Nav> */}
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'home')}>Home</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'about')}>About</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'menu')}>Menu</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'fc')}>Gallery</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'footer')}>Contact</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </div>
      <main  role="main" height="100%" 
    width="100%" >
    <div   id="home">
   <HomeComponent ></HomeComponent>
   </div>
  <div id="about">
  <AboutComponent ></AboutComponent> 
  </div> 
  <div id="menu">
  <FaqComponent></FaqComponent> 
  </div>
  <div id="footer">
      <ContactComponent></ContactComponent>
      </div>
  <div id="fc">
  <GalleryComponent></GalleryComponent> 
  </div>
      </main>
      {/* <div id="footer">
      <FooterComponent></FooterComponent>
      </div> */}
    </div>



  }
}