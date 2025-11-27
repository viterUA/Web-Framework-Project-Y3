const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

router.post('/login', apiCtrl.login);
router.post('/signin', apiCtrl.signin);

router.get('/clubs', apiCtrl.getClubs);
router.get('/standings', apiCtrl.getStandings);
router.get('/strikers', apiCtrl.getPlayers);

module.exports = router;
