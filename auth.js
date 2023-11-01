const express = require('express');
const passport = require('@immutable/passport'); // Assuming you've installed the Immutable Passport SDK
const router = express.Router();

router.get('/login', passport.authenticate());
router.get('/callback', passport.authenticate(), (req, res) => {
  res.redirect('/profile');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

