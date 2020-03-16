const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin', '*'
    );
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

// let joinedUsers = [];

// app.post('/api/join', (req, res, next) => {

// });




module.exports = app;