const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/home', ctrlLocations.home);
router.get('/', ctrlLocations.login);
router.get('/signin', ctrlLocations.signin);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;


module.exports = router;
