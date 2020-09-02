import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ingredients from '../assets/ingredients.jpg'
import l1 from '../assets/l1.jpg'
import h2 from '../assets/h2.jpg'
export class HomeComponent extends React.Component {

  render()
  {
   return<div className="wrapper" style={{padding:'0%',margin:'0%'}}>
 
      <div style={{ width:'100%',margin:'0',padding:'0'}}>
      <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={h2}
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
      src={l1}
      alt="Third slide"
      style={{height:'90vh'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ingredients}
      style={{height:'90vh'}}
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
