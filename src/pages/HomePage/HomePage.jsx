import React from 'react'
import './HomePage.css'
import Banner from "../../components/Banner/Banner"

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