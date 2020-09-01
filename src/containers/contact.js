import React from 'react';
import './css/footer.css';
import {Row,Col,Divider,Card} from 'react-bootstrap'

export class ContactComponent extends React.Component{
    render(){
        return <div className="container-fluid"  style={{backgroundColor:'lavender',height:'auto',border:'1px solid #a6dcef'}}  >
            <div claasName="container" style={{textAlign:'CENTER'}}>
           <h3> Contact/Connect with me</h3>
           <p>Good Health is just a call away</p>
            </div>
           <div class="wrapper1 flexc">
       <Row> 
           <Col>
  <div>
      
      <Card style={{padding:'10px'}}>
          {/* <p>For queries & Appoinments</p> */}
          
      <span align="center"  style={{padding:"2px",borderRadius:'50%'}}><i  className="fa fa-2x fa-phone"  style={{color:'black'}} aria-hidden="true"></i></span>
  <div align="center">
  <p>91+1234567890</p>

  </div>
  
      </Card>
  </div>
  </Col>
  <Col>
  <div>
      
      <Card style={{padding:'10px'}} >
      <span align="center" style={{padding:"2px"}}><i className="fa fa-2x fa-envelope"  style={{color:'black'}} aria-hidden="true"></i></span>
      <div align="center">
  <p>abc@gmail.com</p>
  </div>
      </Card>
  </div>
  </Col>
  <Col>
  <div>
      
      <Card style={{padding:'10px'}}>
      <span align="center" style={{padding:"2px"}}><i className="fa fa-2x fa-map-marker"  style={{color:'black'}} aria-hidden="true"></i></span>
      <div align="center">
   <p>12,abc street,andra</p>
   </div>
      </Card>
  </div>
  </Col>
  <Col>
  <div>
      
      <Card style={{padding:'10px'}}>
      <div align="center" style={{padding:"2px"}}>
      <span align="center"><i className="fa fa-2x fa-instagram"  style={{color:'black'}} aria-hidden="true"></i></span>
 <p>home_pathy</p>
 </div>
      </Card>
  </div>
  </Col>
  <Col>
  <div>
      
      <Card style={{padding:'10px'}}>

      <span align="center" style={{padding:"2px"}}><i className="fa fa-2x fa-facebook"  style={{color:'black'}} aria-hidden="true"></i></span>
  <div align="center"> <p>homeo</p></div>
      </Card>
  </div>
  </Col>
  </Row>   
</div>
          
        </div>

       
    }
}