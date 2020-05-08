const express = require('express');

const router = express.Router();
const User = require('../models/user');

const lobbyController = require('../controllers/lobbyController');

router.get('/:id', (req, res, next) => {
    const joinId = req.params.id;
    lobbyController.getlobby(joinId).then(lobby => {
        if (lobby == null) {
            res.status(404);
        } else {
            res.status(200).json(lobby.users);
        }
    }).catch(error => {
        console.log(error);
    })
});

module.exports = router;