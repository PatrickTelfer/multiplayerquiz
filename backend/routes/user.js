const express = require('express');

const router = express.Router();
const User = require('../models/user');

const lobbyController = require('../controllers/lobbyController');

router.get('/:id', (req, res, next) => {
    const joinId = req.params.id;
    lobbyController.getlobby(joinId).then(lobby => {
        res.status(200).json(lobby.users);
    })
});

module.exports = router;