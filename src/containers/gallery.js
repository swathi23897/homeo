import React from 'react';

 import './css/gallery.css';


export class GalleryComponent extends React.Component {

  state={
      
      images:[{name:require('../assets/breakfast.jpg')},
      {name:require('../assets/breakfast1.jpg')},
      {name:require('../assets/breakfast2.jpg')},
      {name:require('../assets/buffet.jpg')},
      {name:require('../assets/dessert.jpg')},
      {name:require('../assets/dinner.jpg')},
      {name:require('../assets/dinner1.jpg')},
      {name:require('../assets/diner2.jpg')},
      {name:require('../assets/lunch.jpg')},]
   
     

}
onMenuSelect(event)
    { console.log(event.target.id)
    
    this.setState({menu:event.target.id},()=>{
        console.log(this.state.menu)
       
    })
  
    }
  render()
  {
    return(
<div>
  
  <div className="container-fluid"  style={{backgroundColor:'',height:'auto',padding:'4% 10%' }}  >
  {/* <div  className="container" style={{marginTop:"40px",maxWidth:'auto',display:'block',overflow:'hidden'}}> */}
    <h3 style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',fontFamily:'Marker Felt, fantasy'}}>Food and Customer Gallery</h3>
    <div  className="gallery-area" align="center" style={{marginTop:'10px',paddingBottom:'60px'}}>

 



</div>

<ul  style={{}}>

{this.state.images.map(i=>(

    <li style={{}}>
         
       <img style={{maxWidth:'100%',height:'auto',display:'block'}} src={i.name} alt={i.type}></img>
    </li>
))}




</ul> 





</div>
  </div>
  // </div>
  



    );
  }
  
 }
