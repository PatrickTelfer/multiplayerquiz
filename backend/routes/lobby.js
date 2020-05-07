const express = require('express');

const router = express.Router();

const lobbyController = require('../controllers/lobbyController')

router.post('', (req, res, next) => {
    lobbyController.newLobby().then(lobby => {
        res.status(200).json({
            roomId: lobby.lobbyId
        })
    })
});

module.exports = router;