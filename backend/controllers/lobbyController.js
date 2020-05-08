const Lobby = require('../models/lobby');

const lobbyController = {};


lobbyController.newLobby = () => {
    const randomId = Math.floor(Math.random() * 100000 + 1000);
    const lobby = new Lobby({
        lobbyId: randomId,
        users: []
    });
    return lobby.save();
}

lobbyController.deletelobby = (id) => {
    return Lobby.deleteOne({lobbyId: id});
}

lobbyController.getlobby = (id) => {
    return Lobby.findOne({lobbyId: id});
}

lobbyController.addUserTolobby = (id, user) => {
    return lobbyController.getlobby(id).then(lobby => {
        lobby.users.push(user);
        return Lobby.updateOne({lobbyId: id}, lobby);
    });
  
}

lobbyController.removeUserFromlobby = (serverId, userId) => {
    return lobbyController.getlobby(serverId).then(lobby => {
        if (lobby != null) {
            lobby.users = lobby.users.filter(u => u.uniqueId != userId);
            return Lobby.updateOne({lobbyId: serverId}, lobby);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

module.exports = lobbyController;