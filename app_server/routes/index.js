const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');

/* Locations pages */
router.get('/home', ctrlLocations.home);
router.get('/', ctrlLocations.login);
router.get('/signin', ctrlLocations.signin);


module.exports = router;
