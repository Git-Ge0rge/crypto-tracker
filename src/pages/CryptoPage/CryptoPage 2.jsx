import React from 'react'
import NavBar from '../NavBar/NavBar'
import CryptoTable from '../CryptoTable/CryptoTable'
import './CryptoPage.css'

const CryptoPage = (props) => {
    return (
        <div className="CryptoPage">
            <NavBar /> 
            <div>
                <h1> Cryptocurrencies </h1>
            </div>
            <CryptoTable /> 
        </div>
    )
  };
  
export default CryptoPage;