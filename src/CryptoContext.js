import React, { createContext, useContext, useState, useEffect } from 'react';

// This will be used to change the state of the currencies implemented on the site. 
// Currently not in use 

const Crypto = createContext()
// Creates a Context object. When React renders a component that subscribes to this Context object 
// it will read the current context value from the closest matching Provider above it in the tree.
// Provider being the API to set state? 
// Context provides a way to pass data through the component tree without having to pass props down manually at every level

const CryptoContext = ({props}) => {
    const [currency, setCurrency] = useState('USD')
    const [symbol, setSymbol] = useState('$')

    useEffect(() => {
        if (currency === 'USD') setSymbol('$')
        else if (currency === 'CAD') setSymbol('$')
    }, [currency])


    return <Crypto.Provider value= {{ currency, symbol, setCurrency }}>{props}</Crypto.Provider>
}

export default CryptoContext

export const CryptoState = () => {
    useContext(Crypto)
}

// to enable this, import in index.js and wrap the <App> with <CryptoContext> 