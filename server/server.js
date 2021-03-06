const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('./models/user');
const cors = require('cors');
const path = require('path');
let PORT = null;

if (config.environment === 'DEV') {
    process.env['NODE_ENV'] = 'development';
    process.env['NODE_DB'] = config.development_database;
    PORT = process.env.PORT || 8000;
} else {
    process.env['NODE_ENV'] = 'production';
    process.env['NODE_DB'] = config.production_database;
    PORT = process.env.PORT || 3000;
}

mongoose.connect(process.env['NODE_DB']);

//routes
const auth = require('./routes/auth');
const list = require('./routes/list');
const users = require('./routes/users');
const profile = require('./routes/profile');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//temporary (I think?) middleware for development and having CORS header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.options('*', cors());

//middleware to log requests
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use(bodyParser.json());

//apply our routes
//ordering does matter
app.use('/api', auth, profile, list, users);

//server angular from express if in production
if (process.env['NODE_ENV'] === 'production') {
    // TODO: The solution to this problem is to use __dirname__.
    // It looks like wherever it is that you call node server.js it uses that as the directory
    app.use(express.static('../dist'));

    app.use('*', (req, res) => {
      // Use res.sendfile, as it streams instead of reading the file into memory.
      res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
    });
}

app.listen(PORT);
console.log('Server running at port ' + PORT + '...');
