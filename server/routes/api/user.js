const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/user');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/watchlist/add', usersCtrl.addToWatchlist)
router.post('/watchlist/remove', usersCtrl.removeFromWatchlist)

/*---------- Protected Routes ----------*/


module.exports = router;