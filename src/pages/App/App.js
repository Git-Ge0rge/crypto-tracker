import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import CryptoPage from '../CryptoPage/CryptoPage'

function App() {

  return (
    <Router>
      <div>
        <header className="appHeader"></header> 
          <NavBar/>
          <Switch>
              <Route exact path={["/home", "/", "/welcome"]} render={() =>
              <HomePage/> 
              }/>
          </Switch>
          <Switch>
              <Route path='/coins' render={() =>
              <CryptoPage/> 
              }/>
          </Switch>
      </div>
    </Router>    
   
  );
}

export default App;
