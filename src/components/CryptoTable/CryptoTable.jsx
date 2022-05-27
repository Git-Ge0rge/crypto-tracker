import React, { useState, useEffect } from 'react'
import './CryptoTable.css'
import { Table } from 'react-bootstrap';
import TableRow from '../TableRow/TableRow'

const CryptoTable = (props) => {
    const [coinsList, setCoinsList] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
            'X-RapidAPI-Key': '6cba93698emsh9da8258446107f2p10e7cajsna220d04c1023'
        }
    }

    const fetchCoins = async () => {
        await fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc', options)
            .then(response => response.json())
            .then(response => setCoinsList(response))
            .catch(err => console.error(err));
    }
      
    useEffect(() => {
        fetchCoins()
    }, []) // pass in currency in array -- will re render everytime currency is changed in state

    return (
        <div className="CryptoTable"> 
            <Table striped variant="dark" bordered hover>
            <thead>
                <tr>
                    <th> </th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h %</th>
                    <th>Market Cap</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody> 
                {coinsList.map(coinData => <TableRow {...props} {...coinData}/>)} 
                {/* talk about spread operator in prezi */}
            </tbody>
            </Table>
        </div>

    )
}

export default CryptoTable;