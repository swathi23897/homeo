import React from 'react';
import './css/footer.css';
import {Row,Col,Divider} from 'react-bootstrap'

export class FooterComponent extends React.Component{
    render(){
        return <div className="container-fluid"  style={{backgroundColor:'whitesmoke',height:'auto',border:'1px solid #a6dcef'}}  >
            
        <div class="wrapperfo flexfo">
         <div className="col-md-3 col-sm-3" ><h4  style={{fontFamily:'Marker Felt, fantasy',aligh:'left',color:'black'}}>Opening Hours</h4>
         
         <Row style={{marginTop:"30px"}}>
           <Col style={{color:'black'}}>All days &nbsp; &nbsp; 11.00 AM - 10.30 PM </Col>
          
         
         </Row>
         <Row style={{marginTop:"10px"}}>
           <Col><span><i align="center" className="fa fa-2x fa-map-marker" aria-hidden="true"></i></span>&nbsp;  &nbsp; &nbsp;<a style={{textDecoration:'underline',color:'black'}} href="https://www.google.com/maps/place/MAA+Restaurant/@13.2758022,78.7164505,17z/data=!3m1!4b1!4m5!3m4!1s0x3bad7fa6f90b0ac7:0xf6df2da5c06a3a20!8m2!3d13.275797!4d78.7186392">View location on google map</a>
         </Col>
         </Row>
          
         
        
         
         </div>
<div className="col-md-4 col-sm-4"> <h4  style={{fontFamily:'Marker Felt, fantasy',color:'black'}} >Contact Us</h4>
         <Row style={{marginTop:"30px",textAlign:''}}>
         <p style={{color:'black'}}>Kallupalle, Chowdepalle - Kallu Palli Rd, near Kallupalle,</p> 

         <p style={{color:'black'}} >Andhra Pradesh 517408</p>   
         </Row>
         <Row style={{marginTop:"10px",textAlign:''}}>
         <span><i className="fa fa-2x fa-phone" aria-hidden="true" ></i></span>
         </Row>
         <Row style={{marginTop:"30px",textAlign:''}}>
         <span><i className="fa fa-2x fa-envelope" aria-hidden="true"></i></span>
         </Row>
   </div>
<div className="col-md-3 col-sm-3"><h4  style={{fontFamily:'Marker Felt, fantasy',color:'black'}}>Connect with us</h4>
         <Row style={{marginTop:"30px",textAlign:''}}>
        <span><i className="fa fa-2x fa-instagram" aria-hidden="true"></i></span>
         </Row>
         <Row style={{marginTop:"30px",textAlign:''}}>
        <span><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></span>
         </Row></div>

</div>
       
     </div>

     // </div>
 }
}

  