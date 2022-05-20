import React from 'react'
import CryptoTable from '../CryptoTable/CryptoTable'
import './CryptoPage.css'

const CryptoPage = (props) => {
    return (
        <div className="CryptoPage">
            <div>
                <h1> Cryptocurrencies </h1>
            </div>
            <CryptoTable /> 
        </div>
    )
  };
  
export default CryptoPage;