import React from 'react'
import './TableRow.css'

const TableRow = (props) => {
    return (
        <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>$30,115.77</td>
            <td>2.25%	</td>
            <td>3.91%</td>
            <td>$571,436,221,336</td>
            <td>$29.69B (989345.13 BTC)</td>
            <td>19,042,425 BTC</td>
            <td><img alt="Bitcoin Chart" src='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg'/></td>
        </tr>         
    )
}

export default TableRow;