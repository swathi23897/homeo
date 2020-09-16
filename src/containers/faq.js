import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, Accordion } from 'react-bootstrap';

import './css/faq.css'
import m2 from '../assets/faq.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap'

export class FaqComponent extends React.Component {

  state = {
    showMenu: false,
    menu: "breakfast",
    items: [{ id: 1, name: "Cappuccion", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "breakfast" },
    { id: 2, name: "Americano", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "breakfast" },
    { id: 4, name: "Macchiato", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "lunch" },
    { id: 5, name: "Piccolo Latte", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "lunch" },
    { id: 6, name: "Mocha", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "dinner" },
    { id: 7, name: "Piccolo Latte", desc: "Usage of the Internet is becoming more common due to rapid advance.", price: "49", type: "dinner" },

    ],


  }
  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
}

//do not forget to remove it after destroyed
componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
}

//our function which is called anytime document is scrolling (on scrolling)
isInViewport = () => {
    //get how much pixels left to scrolling our ReactElement
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    Array.prototype.forEach.call(elementsToShow, function(element){
     
    const rect = element.getBoundingClientRect();

  const result =(rect.top <= 0 && rect.bottom >= 0)
  ||
  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
  ||
  (rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    console.log(result)
        if (result) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });


    //here we check if element top reference is on the top of viewport
    /*
    * If the value is positive then top of element is below the top of viewport
    * If the value is zero then top of element is on the top of viewport
    * If the value is negative then top of element is above the top of viewport
    * */


    // if(top <= 0 && bottom){
    //     console.log("Element is in view or above the viewport",top);
    // }else{
    //     console.log("Element is outside view");
    // }
     
};


  render() {
    return (
      <div>

        <div className="container-fluid" style={{ filter: 'brightness(100%)', backgroundImage: `url(${m2})`, backgroundSize: '100% 100%', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", objectFit: 'cover', backgroundSize: '100% 100%', backgroundColor: '#a6dcef', height: 'auto', width: "100%", paddingBottom: '3%', overflow: 'hidden', border: '0px solid white' }}  >
          <div className="container" style={{ display: 'block', height: 'auto' }}>
            <h3 style={{ fontFamily: '', textAlign: "center", fontWeight: 'bold', paddingTop: '5%', paddingBottom: '3%', color: 'white' }}>FAQ</h3>
            <div className="wrapperf flexf">
              {this.state.items.map(i => (
                <div className="faqsec show-on-scroll">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <div style={{ display: "inline-flex" }}>
                          <div style={{ width: "80%" }}>
                            <p style={{ color: "black" }}>
                              Q: Is it safe for children, pregnant women, elderly women to take homeopathic remedies?</p></div>
                          <div style={{ width: "20%" }}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={i.id} style={{ float: 'right' }}>
                              <span><i className="fa fa-1x fa-plus" style={{ color: 'black' }} aria-hidden="true"></i></span>
                            </Accordion.Toggle></div>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey={i.id}>
                        <Card.Body style={{ color: "black" }}>Hello! I'm the body</Card.Body>
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
