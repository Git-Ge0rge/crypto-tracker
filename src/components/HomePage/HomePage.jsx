import React from 'react'
import NavBar from '../NavBar/NavBar'
import CryptoTable from '../CryptoTable/CryptoTable'
import './HomePage.css'
import Banner from "../Banner/Banner"

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <div>
                <h1> CryptoSeeker </h1>
                <Banner/>
            </div>
        </div>
    )
  };
  
export default HomePage;