import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import CryptoPage from '../CryptoPage/CryptoPage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService'

function App() {
  const [user, setUser] = useState(userService.getUser())

  const handleLogout = () => {
    userService.logout();
    setUser(null)
  }

  const handleSignupOrLogin = () => {
    console.log('handle sign up called')
    console.log(`Get User: ${userService.getUser()}`)
    setUser(userService.getUser())
  }

  return (
    <Router>
      <div>
        <header className="appHeader"></header> 
          <NavBar user={user} handleLogout={handleLogout}/>
          <Switch>
              <Route exact path={["/home", "/", "/welcome"]} render={() =>
              <HomePage
              /> 
              }/>
          </Switch>
          <Switch>
              <Route path='/coins' render={() =>
              <CryptoPage user = {user} setUser = {setUser}
              /> 
              }/>
          </Switch>
          <Switch>
              <Route path='/watchlist' render={() =>
              <CryptoPage user = {user} setUser = {setUser}
              /> 
              }/>
          </Switch>
          <Switch>
              <Route path='/signup' render={(props) =>
              <SignupPage
                handleSignup = {handleSignupOrLogin}
                history = {props.history}
              /> 
              }/>
          </Switch>
          <Switch>
              <Route path='/login' render={(props) =>
              <LoginPage
                handleLogin={handleSignupOrLogin}
                history = {props.history}
              /> 
              }/>
          </Switch>
      </div>
    </Router>    
   
  );
}

export default App;
