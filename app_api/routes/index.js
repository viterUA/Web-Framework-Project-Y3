const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api');

router.post('/login', apiCtrl.login);

router.post('/signin', apiCtrl.signin);

router.get('/clubs', apiCtrl.getClubs);

module.exports = router;
