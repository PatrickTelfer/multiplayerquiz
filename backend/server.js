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
    let currentUser;
    let lobbyUsers;

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
        currentUser = user;

        socket.join(user.joinId);
        currentRoomId = user.joinId;

        lobbyController.addUserTolobby(user.joinId, user).then(l => {
          lobbyController.getlobby(user.joinId).then(lobby => {
            // console.log("lobby",lobby);
            io.to(user.joinId).emit('users', lobby.users);


            for (let i = 0; i < lobby.users.length; i++) {
              if (lobby.users[i].uniqueId == user.uniqueId) {
                io.to(socket.id).emit('uniqueId', lobby.users[i]._id);
              }
            }
          })
        });

        lobbyController.getlobby(user.joinId).then(lobby => {
          
          
        })
        
    });

  let quiz;
  let currentScore;
  let answer;

  socket.on('startgame', (selectedQuizId) => {
    if(currentUser.isHost) {
      lobbyController.getlobby(currentRoomId).then((lobby) => {
        lobbyUsers = lobby.users;
        // console.log(lobbyUsers);
        for (let i = 0; i < lobbyUsers.length; i++) {
          if(lobbyUsers[i].isHost == false) {
            // lobbyUsers[i].score = 0;
            // lobbyUsers[i].currentGuessIndex = 0;
          }
        }

        // emit to all other users except host
        socket.to(currentRoomId).emit('startgame');

        // emit to host (-1 we dont want to count the host as a player)
        io.to(socket.id).emit('startgameHost', lobbyUsers.length - 1);
        Quiz.findById(selectedQuizId).then(foundQuiz => {
          io.to(socket.id).emit('selectedquiz', foundQuiz);
        });

        io.in(currentRoomId).emit('updateState', "question");
      });
    }   
  });

  socket.on('hostAnswer', (answerData) => {
    if (currentUser.isHost) {
      // let uniqueId = answerData.id;
      // let answerIndex = answerData.index;
      // console.log(uniqueId);
      // let userIndex = lobbyUsers.findIndex((user) => {
      //   user.uniqueId == uniqueId;
      // });

      // console.log(lobbyUsers);
      // console.log(userIndex);

      // lobbyUsers[userIndex].currentGuessIndex = answerIndex;
      // tell the client host a player answered;
      io.to(socket.id).emit('playerAnswer');
    }
  });

  socket.on('answer', (answerData) => {

    let data = {
      id: answerData.id,
      answer: answerData.answerIndex
    }
    socket.to(currentRoomId).emit('tellHostAnswer', data);
  });

  socket.on('updateAnswerForAllPlayers', (answerIndex) => {
    socket.to(currentRoomId).emit('updateAnswer', answerIndex);
  });

  socket.on('all players answers', allUserData => {
    console.log("**********")
    let answerData = [];
    for (let i = 0; i < allUserData.length; i++) {
      let data = {
        id: allUserData[i]._id,
        answer: allUserData[i].answer
      }
      answerData.push(data);
    }
    io.to(currentRoomId).emit('your answer', answerData);
    
  })

  socket.on('nextquestion', () => {
    io.to(currentRoomId).emit('updateState', "question");
  })

  socket.on('gameover', () => {
    io.to(currentRoomId).emit('updateState', "final");
  })

  socket.on('allPlayersAnswered', () => {
    console.log('allPlayersAnswered');
    if (currentUser.isHost) {
      io.in(currentRoomId).emit('updateState', "answer");
    }
  });
});

const Quiz = require('./models/quiz')


server.on("error", onError);
server.on("listening", onListening);
server.listen(port);