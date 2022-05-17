import React from 'react'
import './CryptoTable.css'
import { Table } from 'react-bootstrap';
import TableRow from "../TableRow/TableRow"

const CryptoTable = (props) => {
    return (
        <div className="CryptoTable"> 
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th>Volume</th>
                <th>Circulating Supply</th>
                <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                

            </tbody>
            </Table>
        </div>

    )
}

export default CryptoTable;