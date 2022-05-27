const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = process.env.SECRET

module.exports = {
  signup,
  login,
  addToWatchlist,
  removeFromWatchlist
};

async function signup(req, res) {
  const user = new User(req.body);
  console.log(req.body)
  console.log(user)
  try {
    await user.save();
    const token = createJWT(user)
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(`login function req.body: ${req.body}`)
  const email = req.body.email
  const password = req.body.pw

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return sendBadCredentialsResponse(res)
    }

    // we are using bcrypt to compare the password from our login post vs the user's hashed pw
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({ err: err.message})
      }

      if (!isMatch) {
        return sendBadCredentialsResponse(res)
      }

      // now we can handle what happens when there is a match
      const token = createJWT(user)
      res.json({ token });
    })
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function addToWatchlist (req, res, coin) {
  console.log(req.body)
  const userId = req.user._id
  const user = await User.findById(userId)
  console.log(`USER: ${user}`)

    if (!user) {
      console.log("Must be logged in to add to watchlist")
    } else {
      user.watchlist.push(req.body.coin)
      user.save()
      console.log("you can post to watchlist")
    }
} 

async function removeFromWatchlist (req, res, coin) {
  const userId = req.user._id
  const user = await User.findById(userId)
  
    if (!user) {
      console.log("Must be logged in to add to watchlist")
    } else {
      user.watchlist = user.watchlist.filter(watchlistItem => watchlistItem != req.body.coin)
      user.save()
      console.log("you can remove from watchlist")
    }
} 

// dont need toggle as front end knows what is being watched and can be removed as such
async function watchlistToggleAction (req, res, coin) {
  const userId = req.user._id
  const user = await User.findById(userId)
  console.log(`USER: ${user}`)

  if (user.watchlist.includes(req.body.coin)){
    removeFromWatchlist(req.body.coin)
  } else {
    addToWatchlist(req.body.coin)
  }
}

/* ---- Helper Functions ----*/

function sendBadCredentialsResponse(res) {
  return res.status(401).json({ err: 'Bad Credentials'})
}

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    {expiresIn: '24h'}
  )
}

