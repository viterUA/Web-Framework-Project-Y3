const express = require('express');
const router = express.Router();
const passport = require('passport');

const ctrlLocations = require('../controllers/locations');
const usersController = require('./users');

function requireLogin(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }

  if (req.session && req.session.user) {
    return next();
  }

  return res.redirect('/');
}


router.get('/home', requireLogin, ctrlLocations.home);

router.get('/', ctrlLocations.login);
router.get('/login', ctrlLocations.login);

router.get('/signin', ctrlLocations.signin);

router.post('/signin', usersController.postSignup);

router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }),
  (req, res) => {
    res.redirect('/home');
  }
);

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.save((err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  });
});


module.exports = router;
