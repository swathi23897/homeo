import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutComponent } from './about';
import { MainComponent } from './main';
import { GalleryComponent } from './gallery';
import { HomeComponent } from './home';
import {FaqComponent } from './faq';
import {ContactComponent } from './contact';


export class RoutesComponent extends React.Component{

    render(){
      
      return  <Switch>
              <Route exact path="/" component={()=><MainComponent />} ></Route>
            
              <Route path="/home" component={()=><HomeComponent />}></Route>
              
             
              <Route path="/faq" component={()=><FaqComponent />}></Route>
              <Route path="/about" component={()=><AboutComponent />}></Route>
              <Route path="/contact" component={()=><ContactComponent />}></Route>
              <Route path="/gallery" component={()=><GalleryComponent />}></Route>
              
          </Switch>
        
    }
}