import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../../components/HomePage/HomePage'
import CryptoPage from '../../components/CryptoPage/CryptoPage'

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

// function About() {
//   return <h2>About</h2>;
// }

{/* <Router>
<div className="App">
<Switch>
  <Route path="/">
    <CryptoPage/>
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
</div>
</Router> */}


{/* <Router>
<div className="App">
    <HomePage/>
    <Button variant="primary">Primary</Button>{' '}
</div>
</Router> */}