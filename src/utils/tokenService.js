const TOKEN_STORAGE_KEY = 'token'

// sets the token value in the localStorage
function setToken(token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
}

// gets the payload (info that's being encoded) // gets user 
function getTokenPayload() {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        return (JSON.parse(window.atob(token.split('.')[1])))
    }
    return {}
}

// gets token and remove expired token from localStorage
function getToken() {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (token) {
        const payload = getTokenPayload();
        console.log(payload);

        // remove token from local storage if expired
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            token = null;
        }
    }
    return token;
}

// gets token from localStorage to identify user // REMOVED .user and added to get payload 
function getUserFromToken() {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY)
    return token ? getTokenPayload().user : null
}


// removes token from localStorage 
function removeToken() {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
}

// Without declaring exportObject, was getting yellow error lines 
const exportObject = {
    setToken,
    getUserFromToken,
    removeToken,
    getToken
}

export default exportObject