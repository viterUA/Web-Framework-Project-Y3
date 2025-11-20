const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const session = require('express-session');

/* Locations pages */
router.get('/home', ctrlLocations.home);
router.get('/', ctrlLocations.login);
router.get('/signin', ctrlLocations.signin);
router.get('/logout', function(req, res){
	if (req.session) {
		req.session.destroy(() => {});
	}
	res.redirect('/');
});


module.exports = router;
