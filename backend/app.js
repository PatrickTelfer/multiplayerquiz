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

app.post('/api/createQuiz', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({});
});

module.exports = app;