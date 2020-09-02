import React from 'react';
// import './css/home.css'
import {AboutComponent} from './about'
import {HomeComponent} from './home'
import {GalleryComponent} from './gallery'
import {FaqComponent} from './faq'
import {ContactComponent} from './contact'
import {FooterComponent} from './footer'
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
      <Navbar.Brand href="/" style={{color:'white'}}><span></span>Dr.Pavani</Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{cursor:'pointer'}}>
      
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'home')}>Home</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'about')}>About</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'faq')}>FAQ</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'contact')}>Contact</Navbar.Text>
      
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
  <div id="faq">
  <FaqComponent></FaqComponent> 
  </div>
  <div id="contact">
      <ContactComponent></ContactComponent>
      </div>
  {/* <div id="fc">
  <GalleryComponent></GalleryComponent> 
  </div> */}
      </main>
      <div id="footer">
      <FooterComponent></FooterComponent>
      </div>
    </div>



  }
}