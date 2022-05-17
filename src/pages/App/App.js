import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../components/HomePage/HomePage'
// import NavBar from '../../components/Nav/Nav.jsx'
import { Button } from 'react-bootstrap'

function App() {

  return (
    <div className="App">
        <HomePage/>
        <Button bsStyle="primary">Primary</Button>
        
    </div>
   
  );
}

export default App;

  // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <Routes> 
    //     <Route exact path='/' render={() =>
    //           <HomePage/>
    //         }
    //     />
    //     <Route exact path='/swap' render={() =>
    //           <h1> Dex App </h1>
    //         }
    //     />

    //   </Routes> 
  
    // </div>