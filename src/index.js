import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss";
import Navbar from './components/features/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends React.Component{
  render(){
      return(
        <BrowserRouter>
          <div> 
            <Navbar/>
            <Switch>
              
            </Switch>
          </div>
        </BrowserRouter>
         
      )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();
