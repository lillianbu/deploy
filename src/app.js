const http = require('http');
const express = require('express');
const views = require('./routes/views');

const dotenv = require(‘dotenv’).config();

const app = express();

require(‘dotenv’).config();

app.use('/', views);
app.use('/static', express.static('public'));

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status | 500);
    res.send({
        status: err.status,
        message: err.message,
    })
});

const port = (process.env.PORT || 3000);
server = http.Server(app);
server.listen(process.env.PORT || 5000);