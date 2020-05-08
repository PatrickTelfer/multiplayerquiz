const mongoose = require('mongoose');

const lobbySchema = mongoose.Schema(
    {
        lobbyId: {type: String},
        users: [{name: String, lobbyId: String, uniqueId: String, isHost: Boolean}]

    }
)

module.exports = mongoose.model('Server', lobbySchema);