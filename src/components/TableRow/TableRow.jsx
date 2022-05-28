import React from 'react'
import './TableRow.css'
import UserService from "../../utils/userService"

const TableRow = (props) => {
    
    const addToWatchlistState = () => {
        // store value of current state before making changes
        const updatedUser = {...props.user}
        // update state inclusive of old state + adding new id to watchlist
        updatedUser.watchlist = [...updatedUser.watchlist, props.id]
        // set state with new added id 
        props.setUser(updatedUser) 
    }

    // change this to remove from watchlist state 
    const removeFromWatchlistState = () => {
        // store value of current state before making changes
        const updatedUser = {...props.user}
        // update state inclusive of old state + adding new id to watchlist
        updatedUser.watchlist = updatedUser.watchlist.filter(watchlistItem => watchlistItem !== props.id)
        // set state with new added id 
        props.setUser(updatedUser)
    }

    const watchListHandler = () => {
        if (props.user) {
            if (props.user.watchlist.includes(props.id)) {
                console.log('remove handler clicked')
                removeFromWatchlistState()
                UserService.removeFromWatchlist(props.id)
            } else {
                console.log('add handler clicked')
                addToWatchlistState()
                UserService.addToWatchlist(props.id)
                }
        } else {
            console.log('log in to click')
        }
    }

    // visual watchlist check - pushes star to img src 
    const checkIfInWatchlist = () => {
        if (props.user) {
            if (props.user.watchlist.includes(props.id)) {
                return "star.png"
            } else {
                return "star-outline.png"
            }
        } else {
            return "star-outline.png"
        }
    }

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
