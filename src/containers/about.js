import React from 'react';
import about from '../assets/about.jpg'
import './css/about.css'
import forest from '../assets/forest.jpg'
import l2 from '../assets/l2.jpg'
export class AboutComponent extends React.Component {
  render()
  {
    return(

  
  <div  className="container-fluid"  style={{backgroundColor:'white',paddingBottom:'5%',paddingtop:'0%',border:'1px solid white'}}  >
  <div  className="bgwhite box" style={{marginTop:"3%",display:'block',}}>
  <h3 style={{textAlign:'center',fontWeight:'bold',fontFamily:'',color:'black'}}>About Me</h3>
     
     <div className=" container" style={{}}>
       
     <div className="wrapper flex">
    
     <p style={{textAlign:'left',marginTop:"25px",fontSize:'15px'}}>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
  
    {/* <div style={{maxHeight:'40%',maxWidth:'30%'}}> <img height="100%" className="type" width="100%" src={about} alt="" style={{marginBottom:'0px',borderRadius:'50%',boxShadow:"0px 10px 30px 0px rgba(153,153,153,0.2)"}}></img></div> */}
     
    </div>
    
     
    <div className="wrappera flexa container" style={{ justifyContent:'center'}}>
   
  <div className="col-sm-12  col-md-3"> <img  width="100%" src={l2} alt="" style={{marginBottom:'25px',padding:'10px',}}></img><p>hiii</p></div>
  <div  className="col-sm-12 col-md-3"><img  width="100%"  src={l2} alt=""style={{marginBottom:'25px',padding:'10px'}}></img></div>
  <div  className="col-sm-12 col-md-3"><img  width="100%"  src={l2} alt=""style={{marginBottom:'25px',padding:'10px'}}></img></div>
 
</div>
    
</div>

</div>
   





    );
  }
  }
