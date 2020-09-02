import React from 'react';
import './css/footer.css';
import r1 from '../assets/r1.jpg'
import {Row,Col,Divider,Card} from 'react-bootstrap'
import {SocialMediaIconsReact} from 'social-media-icons-react';
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
    
      <div align="center"> <i className="fa fa-2x fa-clock-o" aria-hidden="true" style={{color:'#DD2D79'}} ></i></div>  
       
      
    </li>
    <li>
    
    <div align="center"><i className="fa fa-2x fa-phone" aria-hidden="true" style={{color:'blue'}} ></i></div>  
    
    </li>
    <li>

    <div align="center"><i className="fa fa-2x fa-envelope" aria-hidden="true"style={{color:'purple'}} ></i></div>  
        
    </li>
    <li>
   
    <div align="center"><i className="fa fa-2x fa-map-marker" aria-hidden="true" style={{color:'green'}} ></i></div>  
        <h2></h2>
    
    
    </li>
    <li>
     
      {/* <div align="center"><SocialMediaIconsReact icon="instagram" url="" align="center" borderColor="white" /></div>   */}
      <div align="center"><i className="fa fa-2x fa-instagram" aria-hidden="true" style={{color:'#DD2D79'}} ></i></div>  
        
      
      </li>
      <li>
      {/* <div align="center"><SocialMediaIconsReact icon="facebook" url="" borderColor="white"/></div> */}
      <div align="center"><i className="fa fa-2x fa-facebook" aria-hidden="true" style={{color:'#0C88EF'}} ></i></div>  
        </li>
   </ul>
    </div>
    
    
    
</div>
          
     

       
    }
}