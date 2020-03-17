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

let servers = [];

app.get('/api/users/:id', (req, res, next) => {
    const joinId = req.params.id;
    const filteredUsers = servers.find(s => s.serverId == joinId).clients;
    res.status(200).json(filteredUsers);
});


const removeAndReturnServer = (roomId, userId) => {
  let user;

  for (let i = 0; i < servers.length; i++) {
    if (servers[i].serverId == roomId) {
      servers[i].clients = servers[i].clients.filter(client => client.uniqueId != userId);
      return servers[i].clients;
    }
  }
}

io.on('connection' , (socket) => { 
    console.log('a user connected');
    let currentRoomId;

    socket.on('disconnect', () => {
        console.log('a user disconnected');
        const usersLeftInRoom = removeAndReturnServer(currentRoomId, socket.id);
        socket.broadcast.in(currentRoomId).emit('users', usersLeftInRoom);
    });
    

    socket.on('user joined', (user) => {
        user.uniqueId = socket.id;

        socket.join(user.joinId);
        currentRoomId = user.joinId;

        let server = servers.find(s => s.serverId == user.joinId);

        if (servers.length == 0 || server == undefined) {
          servers.push({
            serverId: user.joinId,
            clients: [user]
          });
        } else if (server != undefined) {
          server.clients.push(user);
        }

        console.log(user);
        const usersInSameServer = servers.find(s => s.serverId == user.joinId).clients;
        io.to(user.joinId).emit('users', usersInSameServer);
    });

});



 
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);