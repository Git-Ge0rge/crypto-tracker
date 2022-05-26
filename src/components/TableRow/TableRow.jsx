import React, {previousState, assign} from 'react'
import './TableRow.css'
import UserService from "../../utils/userService"

const TableRow = (props) => {

    console.log(`USER Passed down: ${props.user.watchlist}`)

    const watchListHandler = () => {
        console.log('handler clicked')
        // props.user.assign(previousState, {watchlist: [...props.user.watchlist + props.id]})
        // props.setUser.watchlist([...props.user.watchlist, props.id ])
        UserService.addToWatchlist(props.id)
    }

    const checkIfInWatchlist = () => {
        if (props.user.watchlist.includes(props.id)) {
            return "star.png"
        } else 
            return "star-outline.png"
    }

    // componentDidMount() {
    //     fetch(user.watchlist)
    
    // }

    console.log(`watchlist: ${props.user.watchlist}`)

    return (
        <tr>
            <td><img onClick={watchListHandler} className="watchlist-star" alt="Add to WatchList" src={checkIfInWatchlist()} /></td>
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
