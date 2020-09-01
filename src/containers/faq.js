import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown,Accordion } from 'react-bootstrap';

import './css/faq.css'
import forest from '../assets/forest.jpg'
import {Container,Row,Col,Card} from 'react-bootstrap'

export class FaqComponent extends React.Component {

  state={
    showMenu:false,
    menu:"breakfast",
    items:[{id:1,name:"Cappuccion",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"breakfast"},
    {id:2,name:"Americano",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"breakfast"},
    {id:4,name:"Macchiato",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:5,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:6,name:"Mocha",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:7,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:8,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"buffet"},
    
],
     

}

  render()
  {
    return(
<div>
  
  <div className="container-fluid"  style={{backgroundRepeat:"no-repeat",objectFit:'cover',backgroundSize:'100% 100%',backgroundColor:'#a6dcef',height:'auto',width:"100vw",paddingBottom:'3%',overflow:'hidden'}}  >
  <div  className="container" style={{display:'block',width:"90vw",height:'auto'}}>
    <h3 style={{fontFamily:'Marker Felt, fantasy',textAlign:"center",fontWeight:'bold',paddingTop:'5%',paddingBottom:'3%',color:'white'}}>FAQ</h3>
    <div className="wrapper flex">
    {this.state.items.map(i=>(
        <div className="anim" >
        <Accordion>
        <Card>
          <Card.Header>
              <Row>
                  <Col >
            <p>
Q: Is it safe for children, pregnant women, elderly women to take homeopathic remedies?</p></Col>
             <Col >
            <Accordion.Toggle as={Button} variant="link" eventKey={i.id} style={{float:'right'}}>
           <span><i className="fa fa-1x fa-plus"  sty le={{color:'black'}} aria-hidden="true"></i></span>
            </Accordion.Toggle></Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey={i.id}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
      </div>
    ))}

</div>

 </div>
</div>

  </div>
 
  



    );
  }
  
 }
