import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import CryptoPage from '../CryptoPage/CryptoPage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'

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
          <Switch>
              <Route path='/signup' render={() =>
              <SignupPage/> 
              }/>
          </Switch>
          <Switch>
              <Route path='/login' render={() =>
              <LoginPage/> 
              }/>
          </Switch>
      </div>
    </Router>    
   
  );
}

export default App;
