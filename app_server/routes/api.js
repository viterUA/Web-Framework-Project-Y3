const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Standings = mongoose.model('standings');
const Strikers = mongoose.model('strikers');

router.get('/standings', async (req, res) => {
    try {
        const data = await Standings.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/strikers', async (req, res) => {
    try {
        const data = await Strikers.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;
