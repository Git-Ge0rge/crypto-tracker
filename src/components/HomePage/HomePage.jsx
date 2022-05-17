import React from 'react'
import NavBar from '../NavBar/NavBar'
import CryptoTable from '../CryptoTable/CryptoTable'
import './HomePage.css'

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <NavBar /> 
            <div>
                <h1> Home Page </h1>
            </div>
            <CryptoTable /> 
        </div>
    )
  };
  
export default HomePage;