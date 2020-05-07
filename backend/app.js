const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin', 'http://localhost:4200'
    );
    res.setHeader(
        'Access-Control-Allow-Credentials', 'true'
    )
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pat:Kf2EIs4fKoDSXmcm@quiz-i9ry8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then( () => {
        console.log('connected to database');
    })
    .catch( ()=> {
        console.log('connection failed');
    });

//register routes
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');
const lobbyRoutes = require('./routes/lobby');

app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lobby', lobbyRoutes);

module.exports = app;