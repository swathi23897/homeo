import React from 'react';
import about from '../assets/about.jpg'
import './css/about.css'
import forest from '../assets/forest.jpg'
import l2 from '../assets/l2.jpg'
export class AboutComponent extends React.Component {

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
  render()
  {
    return(

  
  <div  className="container"  style={{backgroundColor:'white',paddingBottom:'0%',paddingtop:'0%',border:'1px solid white'}}  >
  <div  className="bgwhite box about show-on-scroll  " style={{marginTop:"3%",display:'block'}}>
  <h3  className="" style={{textAlign:'center',fontWeight:'bold',fontFamily:'',color:'black'}}>About Me</h3>
     
     {/* <div className=" container" style={{}}> */}
       
     <div className="wrappera flexa ">
    
     <p className="" style={{textAlign:'left',marginTop:"25px",fontSize:'15px',color:"black"}}>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
  
    {/* <div style={{maxHeight:'40%',maxWidth:'30%'}}> <img height="100%" className="type" width="100%" src={about} alt="" style={{marginBottom:'0px',borderRadius:'50%',boxShadow:"0px 10px 30px 0px rgba(153,153,153,0.2)"}}></img></div> */}
     
    {/* </div> */}
    
     
  
    
</div>
<div className="wrappera flexa container" style={{ justifyContent:'center'}}>
   
   <div> <img  className="inline-photo show-on-scroll" width="100%" height="70%"  src={l2} alt="" style={{marginBottom:'25px',padding:'10px'}}></img></div>
   <div ><img  className=" inline-photo show-on-scroll"  width="100%" height="70%" src={l2} alt=""style={{marginBottom:'25px',padding:'10px'}}></img></div>
   <div><img  className="inline-photo show-on-scroll"  width="100%" height="70%" src={l2} alt=""style={{marginBottom:'25px',padding:'10px'}}></img></div>
  
 </div>
</div>
   





    );
  }
  }
