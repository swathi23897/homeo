import React from 'react';

import './css/about.css'
import forest from '../assets/forest.jpg'
import about from '../assets/about.jpg'
export class AboutComponent extends React.Component {
  render()
  {
    return(

  
  <div  className="container-fluid"  style={{backgroundColor:'whitesmoke',paddingBottom:'5%',paddingtop:'0%',border:'2px solid white'}}  >
  <div  className="" style={{marginTop:"3%",display:'block',}}>
  <h3 style={{textAlign:'center',fontWeight:'bold',fontFamily:'Marker Felt, fantasy',color:'#d54062'}}>About Me</h3>
     
     <div className="bgwhite box container" style={{}}>
       
     <div className="wrapper flex ">
    <div >
     <p style={{textAlign:'left',marginTop:"25px",fontSize:'15px'}}>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
  
    {/* <div style={{maxHeight:'40%',maxWidth:'30%'}}> <img height="100%" className="type" width="100%" src={about} alt="" style={{marginBottom:'0px',borderRadius:'50%',boxShadow:"0px 10px 30px 0px rgba(153,153,153,0.2)"}}></img></div> */}
     </div>
     <ul>
    <li>
      <a href="#">
        <h2>Title #1</h2>
       
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #2</h2>
        
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #3</h2>
        
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #4</h2>
    
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #5</h2>
      
      </a></li>
   </ul>
    </div>
    
    
    
    </div>
    <div>
   

 </div>

    
    
</div>
   





    );
  }
  }
