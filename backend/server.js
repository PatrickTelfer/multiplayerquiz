const app = require("./app")
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

var io = require('socket.io')(server);

const lobbyController = require('./controllers/lobbyController');

// const removeAndReturnServer = (roomId, userId) => {
//   for (let i = 0; i < servers.length; i++) {
//     if (servers[i].serverId == roomId) {
//       servers[i].clients = servers[i].clients.filter(client => client.uniqueId != userId);
//       return servers[i].clients;
//     }
//   }
// }

io.on('connection' , (socket) => { 
    console.log('a user connected');
    let currentRoomId;

    socket.on('disconnect', () => {
        lobbyController.removeUserFromlobby(currentRoomId, socket.id).then(result => {
          console.log('a user disconnected');
          lobbyController.getlobby(currentRoomId).then(lobby => {
            if (lobby != null) {
              const usersLeftInRoom = lobby.users;
              socket.broadcast.in(currentRoomId).emit('users', usersLeftInRoom);
            }
          })
        });
    });
    
    socket.on('user joined', (user) => {
        user.uniqueId = socket.id;

        socket.join(user.joinId);
        currentRoomId = user.joinId;

        lobbyController.addUserTolobby(user.joinId, user).then(l => {
          lobbyController.getlobby(user.joinId).then(lobby => {
            io.to(user.joinId).emit('users', lobby.users);
          })
        });
        
    });

    socket.on('startgame', () => {
      console.log('starting game');
      io.sockets.in(currentRoomId).emit('startgame');
    });

});


server.on("error", onError);
server.on("listening", onListening);
server.listen(port);