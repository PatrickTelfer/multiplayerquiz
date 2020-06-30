const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var distDir = __dirname + "/../dist";
app.use(express.static(distDir));

app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin', 'https://realtimequiz.herokuapp.com/'
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

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
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