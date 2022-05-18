import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CryptoPage from '../../components/CryptoPage/CryptoPage'
import HomePage from '../../components/HomePage/HomePage'
// import NavBar from '../../components/Nav/Nav.jsx'
import { Button } from 'react-bootstrap'
import NavBar from '../../components/NavBar/NavBar'


function App() {

  return (
    <Router> 
      <div>
        <NavBar/>
        <HomePage/> 
       
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