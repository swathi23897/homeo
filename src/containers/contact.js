import React from 'react';
import './css/contact.css';
import r1 from '../assets/r1.jpg'

export class ContactComponent extends React.Component{
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
    render(){
        return <div className="container-fluid"  style={{backgroundImage:`url(${r1})`,objectfit:'cover',backgroundSize:'100% 100%',border:'0.5px solid black',paddingBottom:'0%',marginBottom:'0px'}}  >
            <div claasName="container" style={{textAlign:'CENTER',color:'white',paddingTop:'3%',align:'center',paddingBottom:'0px'}}>
           <h3> Contact/Connect with me</h3>
           <p>Good Health is just a call away</p>
            </div>
           <div align="center" style={{padding:'3%'}} >
          
     <ul className="">
    <li >
    
      <div className="hii show-on-scroll" > <i className="fa fa-2x fa-clock-o" aria-hidden="true" style={{color:'#DD2D79'}} ></i>
      <p >Mon-Sat
    <br/> 10am - 6pm</p>
      </div>  
      
       
      
    </li>
    <li >
    
    <div className="hii1 show-on-scroll"  align="center"><i className="fa fa-2x fa-phone" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
    <p style={{paddingTop:'1vh'}}>+91 9876543210</p>
    </div>  
    
    </li>
    <li >

    <div className="hii show-on-scroll"  align="center"><i className="fa fa-2x fa-envelope" aria-hidden="true"style={{color:'#DD2D79'}} ></i><p>drpavani <br/>@gmail.com</p></div>  
        
    </li>
    <li >
   
    <div className="hii1 show-on-scroll"  align="center"><i className="fa fa-2x fa-map-marker" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
    {/* <p><a style={{color:'black'}} href="#">View Map</a></p> */}
    <p>View Map</p>
    
    </div>  
       
    
    
    </li>
    <li >
     
      {/* <div align="center"><SocialMediaIconsReact icon="instagram" url="" align="center" borderColor="white" /></div>   */}
      <div className="hii show-on-scroll"  align="center"><i className="fa fa-2x fa-instagram" aria-hidden="true" style={{color:'#DD2D79'}} ></i>
      
     {/* <p><a style={{color:'black'}} href="#">View Profile</a></p> */}
     <p>View Instagram Profile</p>
      </div>  
  
      
      </li>
      <li >
      {/* <div align="center"><SocialMediaIconsReact icon="facebook" url="" borderColor="white"/></div> */}
      <div className="hii1 show-on-scroll"  align="center" ><i className="fa fa-2x fa-facebook" aria-hidden="true" style={{color:'#0C88EF'}} ></i>
      {/* <p><a style={{color:'black'}} href="#">View Profile</a></p> */}
      <p>View facebook Profile</p>
      </div>  
     
        </li>
   </ul>
    </div>
    
    
    
</div>
          
     

       
    }
}