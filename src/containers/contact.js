import React from 'react';
import './css/footer.css';
import r1 from '../assets/r1.jpg'
import {Row,Col,Divider,Card} from 'react-bootstrap'
import {SocialMediaIconsReact} from 'social-media-icons-react';
export class ContactComponent extends React.Component{
    render(){
        return <div className="container-fluid"  style={{backgroundImage:`url(${r1})`,height:'auto',objectfit:'cover',backgroundSize:'100% 100%',border:'0.5px solid black',paddingBottom:'0%'}}  >
            <div claasName="container" style={{textAlign:'CENTER',color:'white',paddingTop:'3%',align:'center'}}>
           <h3> Contact/Connect with me</h3>
           <p>Good Health is just a call away</p>
            </div>
           <div align="center" style={{padding:'3%'}} >
          
     <ul >
    <li>
    
      <div > <i className="fa fa-2x fa-clock-o" aria-hidden="true" style={{color:'#DD2D79'}} ></i>
      <p >Mon-Sat
    <br/> 10am - 6pm</p>
      </div>  
      
       
      
    </li>
    <li>
    
    <div align="center"><i className="fa fa-2x fa-phone" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
    <p style={{paddingTop:'1vh'}}>9876543210</p>
    </div>  
    
    </li>
    <li>

    <div align="center"><i className="fa fa-2x fa-envelope" aria-hidden="true"style={{color:'#DD2D79'}} ></i><p>drpavani <br/>@gmail.com</p></div>  
        
    </li>
    <li>
   
    <div align="center"><i className="fa fa-2x fa-map-marker" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
    <p><a style={{color:'black'}} href="#">View Map</a></p>
    </div>  
       
    
    
    </li>
    <li>
     
      {/* <div align="center"><SocialMediaIconsReact icon="instagram" url="" align="center" borderColor="white" /></div>   */}
      <div align="center"><i className="fa fa-2x fa-instagram" aria-hidden="true" style={{color:'#DD2D79'}} ></i>
      
     <p><a style={{color:'black'}} href="#">View Profile</a></p>
      </div>  
  
      
      </li>
      <li>
      {/* <div align="center"><SocialMediaIconsReact icon="facebook" url="" borderColor="white"/></div> */}
      <div align="center" className="fb"><i className="fa fa-2x fa-facebook" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
      <p><a style={{color:'black'}} href="#">View Profile</a></p>
      </div>  
     
        </li>
   </ul>
    </div>
    
    
    
</div>
          
     

       
    }
}