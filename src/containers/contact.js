import React from 'react';
import './css/footer.css';
import r1 from '../assets/r1.jpg'
import {Row,Col,Divider,Card} from 'react-bootstrap'

export class ContactComponent extends React.Component{
    render(){
        return <div className="container-fluid"  style={{backgroundImage:`url(${r1})`,height:'auto',objectfit:'cover',backgroundSize:'100% 100%',border:'0.5px solid white'}}  >
            <div claasName="container" style={{textAlign:'CENTER',color:'white',paddingTop:'3%',align:'center'}}>
           <h3> Contact/Connect with me</h3>
           <p>Good Health is just a call away</p>
            </div>
           <div >
          
     <ul >
    <li>
      <a href="#">
        <h2></h2>
       
      </a>
    </li>
    <li>
      <a href="#">
        <h2></h2>
        
      </a>
    </li>
    <li>
      <a href="#">
        <h2></h2>
        
      </a>
    </li>
    <li>
      <a href="#">
        <h2></h2>
    
      </a>
    </li>
    <li>
      <a href="#">
        <h2></h2>
      
      </a></li>
      <li>
      <a href="#">
        <h2></h2>
      
      </a></li>
   </ul>
    </div>
    
    
    
</div>
          
     

       
    }
}