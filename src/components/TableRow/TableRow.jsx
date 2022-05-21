import React from 'react'
import './TableRow.css'

const TableRow = (props) => {
    return (
        <tr>
            <td>⭐</td>
            <td>{props.market_cap_rank} <img alt={props.name} src={props.image}/>  </td>
            <td>{props.name} ({props.symbol.toUpperCase()})</td>
            <td>${props.current_price}</td>
            <td>{parseFloat(props.price_change_percentage_24h).toFixed(2)}%</td>
            <td>${props.market_cap.toLocaleString('en-US')}</td>
            <td>Chart Here</td>
        </tr>         
    )
}

export default TableRow
