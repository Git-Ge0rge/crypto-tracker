import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!' + Error);
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  })

}

function login(user) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Bad credentials')
  })
  .then(({ token }) => {
    tokenService.setToken(token)
  })
}

// push current coin to watchlist // communicating coinId as the data being passed to the back end
function addToWatchlist(coinId) {
  return fetch(BASE_URL + 'watchlist/add', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
    body: JSON.stringify({coin: coinId})
  })
}

// push current coin to watchlist // communicating coinId as the data being passed to the back end
function removeFromWatchlist(coinId) {
  return fetch(BASE_URL + 'watchlist/remove', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}),
    body: JSON.stringify({coin: coinId})
  })
}

// return logged in user based on the token
function getUser() {
  return tokenService.getUserFromToken(); // changed to this from getuserfrompayload function in token service
}

function logout() {
  tokenService.removeToken();
}

// Without declaring exportObject, was getting yellow error lines 
const  exportObject = {
  signup,
  login, 
  getUser,
  logout,
  addToWatchlist,
  removeFromWatchlist
};

export default exportObject