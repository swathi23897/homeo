import React from 'react';
import './App.css';
import { RoutesComponent } from "./containers/routes";
import {withRouter} from 'react-router-dom';

class App extends React.Component{
  render(){
    return  <RoutesComponent {...this.props}></RoutesComponent>
  }
}

export default withRouter(App)
