import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import food from '../assets/food.jpg'
import about from '../assets/about.jpg'
import buffet from '../assets/buffet.jpg'
export class HomeComponent extends React.Component {

  render()
  {
   return<div className="wrapper2" style={{padding:'0%',margin:'0%'}}>
 
      <div style={{ Width:'100vw'}}>
      <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food}
      style={{height:'90vh'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={about}
      alt="Third slide"
      style={{maxheight:'50vh'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={buffet}
      style={{maxheight:'50vh'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   </div>
    
    
    
  }
}
